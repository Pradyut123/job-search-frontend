import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Welcome = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative">
        <img
          src="https://media.licdn.com/dms/image/D5612AQFbzjOwRwEfeA/article-cover_image-shrink_720_1280/0/1682689384092?e=2147483647&v=beta&t=dH_poHL8pmtDz1-bxOfDh_Hh1w20QIP7b5gd-O0dWwo"
          alt="Welcome"
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Jobit</h1>
            <p className="mt-4 text-xl">
              Find your dream job or recruit talented individuals
            </p>

            <div className="mt-8 space-x-4">
              <Link to="/login">
                <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
                  Login
                </button>
              </Link>

              {/* <Link to="/recruit">
                <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
                  Recruit
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
