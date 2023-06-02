import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../redux/actions/userAction";
import Footer from "../components/Footer/Footer";

const JobHistory = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto bg-white">
        <h1 className="text-center text-[25px] font-bold mt-6 mb-8">
          JOB History
        </h1>
        {user && user.jobsHistory.length > 0 ? (
          user.jobsHistory.map((history, i) => (
            <div
              key={i}
              className="shadow-lg rounded-sm border px-5 py-4 justify-center mx-4 my-2 mb-8"
            >
              <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
                {/* Left side */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-9 h-9 shrink-0 mt-1"></div>
                  <div>
                    <header className="mb-4">
                      <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                        {history.title}
                      </h1>
                    </header>

                    <div className="text-lg text-slate-500">
                      {history.location}
                    </div>
                    <div
                      className="text-sm text-slate-500 mt-5"
                      style={{ width: "70%" }}
                    >
                      {history.description}
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col space-y-1 items-end">
                  <div className="text-sm text-slate-900">
                    &#8377; {history.salary} / Year
                  </div>
                  <div className="flex items-center space-x-4 pl-10 md:pl-0">
                    <p className="text-sm text-slate-500 italic whitespace-nowrap">
                      Applied at:
                    </p>
                    <div className="text-sm text-slate-500 italic whitespace-nowrap">
                      {new Date(history.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <p className="text-sm text-slate-500 italic whitespace-nowrap">
                      status:
                    </p>
                    <div className="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-600">
                      {history.applicationStatus}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-6">
            No job history available
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default JobHistory;
