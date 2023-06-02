import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../redux/actions/userAction";

const Profile = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save action here if needed
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
            <div className=" text-black rounded-lg p-4 mb-8">
              <img
                className="w-16 h-16 rounded-full mx-auto"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                alt="Profile"
              />
              <h2 className="text-2xl font-semibold text-center">
                {user && user.firstName} {user && user.lastName}
              </h2>
              <p className="text-gray-500 text-center">Web Developer</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt nulla id sem porta, ut aliquam justo tincidunt.
                Suspendisse id nulla a urna luctus accumsan.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              {isEditing ? (
                <div>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Email:
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Phone:
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Location:
                      <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8 mt-4">
                    <p className="text-gray-700">
                      <span className="font-semibold"> Name:</span>{" "}
                      {user && user.firstName} {user && user.lastName}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span> +91 {user && user.contactNumber}
                    </p>
                  </div>
                  <div className="mb-8">
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span>{" "} {user && user.email}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              {isEditing ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
                  onClick={handleSave}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
