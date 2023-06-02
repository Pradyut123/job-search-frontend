import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
import { jobLoadAction } from "../../redux/actions/jobAction";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

const Filter = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { jobType } = useSelector((state) => state.jobTypeAll);
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setUniqueLocation(e.target.value);
  };

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <p className="text-center text-[#707070] text-lg font-bold">
        Search according to your preference:
      </p>

      <div className="filterDiv flex flex-col md:flex-row items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Search By Location:{" "}
          </label>

          <select
            name=""
            id="relevance"
            value={location}
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={handleChangeLocation}
          >
            {setUniqueLocation &&
              setUniqueLocation.map((location, i) => (
                <option key={i} value="">
                  {location}
                </option>
              ))}
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="gggg" className="text-[#808080] font-semibold">
            Search By Category:{" "}
          </label>

          <select
            value={cat}
            name=""
            id="gggg"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={handleChangeCategory}
          >
            {jobType &&
              jobType.map((jt) => (
                <option key={jt._id} value={jt._id}>
                  {jt.jobTypeName}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
