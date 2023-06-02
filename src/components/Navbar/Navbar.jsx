import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../redux/actions/userAction";
import axios from "axios";
import "../../CommonStyle/comStyle.css";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      localStorage.setItem("userInfo");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>It
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/home">Home</Link>
        </li>
        {userInfo && (
          <>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              <Link to="/jobhistory">Job History</Link>
            </li>
          </>
        )}
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          About Us
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Contact Us
        </li>
        {userInfo ? (
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              <Link to="/login">Login</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
