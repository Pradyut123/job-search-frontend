import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Pagination } from "@mui/material";
import { jobLoadAction } from "../../../redux/actions/jobAction";
import { jobTypeLoadAction } from "../../../redux/actions/jobTypeAction";
import NavMenu from "../../../components/Admin/NavMenu/NavMenu";

const ViewJobs = () => {
  const { jobs, setUniqueLocation, pages, loading, id } = useSelector(
    (state) => state.loadJobs
  );
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

  return (
    <>
      <NavMenu />
      <div>
        <p className="text-center text-[25px] font-bold mt-6 mb-8">
          Available jobs
        </p>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {jobs && jobs.length > 0 ? (
            jobs.map((job, i) => (
              <div
                key={i}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {job.title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    Now
                  </span>
                </span>
                <h6 className="flex items-center text-[#ccc] gap-1">
                  <CiLocationOn className="text-[25px] icon" />
                  {job.location}
                </h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {job.shortDesc}
                </p>

                <div className="company flex items-center gap-2">
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {job.company}
                  </span>
                </div>

                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-yellow-500 group-hover/item:text-textColor group-hover:text-white">
                  <Link to={`/admin/viewjobdetails/${job._id}`}>View More</Link>
                </button>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <Pagination
            page={page}
            count={pages === 0 ? 1 : pages}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
};

export default ViewJobs;
