import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";
import JobHistory from "./pages/JobHistory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import CreateJob from "./pages/admin/CreateJob/CreateJob";
import ViewJobs from "./pages/admin/ViewJobs/ViewJobs";
import ViewJobDetails from "./pages/admin/ViewJobDetails/ViewJobDetails";
// import UserRoute from './utils/userRoute';

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route path="/jobhistory" element={<JobHistory />} />
          {/* Admin Routes  */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/addjob" element={<CreateJob />} />
          <Route path="/admin/viewJobs" element={<ViewJobs />} />
          <Route path="/admin/viewjobdetails/:id" element={<ViewJobDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
