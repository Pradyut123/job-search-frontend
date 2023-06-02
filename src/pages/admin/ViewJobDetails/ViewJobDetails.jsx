import NavMenu from "../../../components/Admin/NavMenu/NavMenu";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadSingleAction } from "../../../redux/actions/jobAction";
import { userApplyJobAction } from "../../../redux/actions/userAction";

const ViewJobDetails = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { id } = useParams();
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        role: singleJob && singleJob.role,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
  };

  return (
    <>
      <NavMenu />
      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
        {/* page Content */}
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16 shadow-xl p-8">
            {/* content */}
            <div>
              <div className="mb-6">
                <NavLink to="/admin/viewJobs">
                  <button className="border-[2px] rounded-[10px] block p-[10px] text-[14px] font-semibold text-white bg-blue-500 group-hover/item:text-white group-hover:text-white">
                    <IoIosArrowBack className="inline-block mr-2" />
                    Back to Home
                  </button>
                </NavLink>
              </div>
              <div className="text-xs text-slate-500 italic mb-2">
                Posted On:{" "}
                <span className="font-semibold">
                  {singleJob &&
                    new Date(singleJob.createdAt).toLocaleDateString("en-GB")}
                </span>
              </div>
              <header className="mb-4">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  {singleJob && singleJob.title}
                </h1>
                {/* Important Job Details */}
                <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 mt-2">
                  {/* Left side */}
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div>
                      <div className="text-sm text-slate-500">
                        {singleJob && singleJob.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 items-end">
                    <div className="text-sm text-slate-900">
                      &#8377; {singleJob && singleJob.salary} / Year
                    </div>
                  </div>
                </div>
              </header>
              <hr className="my-6 border-t border-slate-200" />
              {/* Your Responsabilities */}
              <div>
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                  Job Description
                </h2>
                <div className="space-y-6 text-slate-500 font-normal text-sm">
                  <p>{singleJob && singleJob.description}</p>
                </div>
              </div>
              <hr className="my-6 border-t border-slate-200" />
              {/* The Role */}
              <div>
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                  Your Role
                </h2>
                <div className="space-y-6 text-slate-500 font-normal text-sm">
                  <p>{singleJob && singleJob.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJobDetails;
