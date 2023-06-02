import React, { useState, useEffect } from "react";
import "./CreateJob.scss";
import NavMenu from "../../../components/Admin/NavMenu/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../../../redux/actions/jobTypeAction";
import { createAjobAction } from "../../../redux/actions/jobAction";

const CreateJob = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const { jobType } = useSelector((state) => state.jobTypeAll);

  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    jobType: "",
    description: "",
    salary: "",
    location: "",
    shortDesc: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAjobAction(formData));
    setFormData({
      title: "",
      companyName: "",
      jobType: "",
      description: "",
      salary: "",
      location: "",
      shortDesc: "",
      role: "",
    });
  };

  return (
    <>
      <NavMenu />
      <div className="card">
        <h1>Add New Job</h1>
        <div className="add">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="sections">
                <div className="info">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    placeholder="e.g. This is a frontend role"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Google INC."
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <label htmlFor="jobType">Job Type</label>
                  <select
                    name="jobType"
                    id="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                  >
                    {jobType &&
                      jobType.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.jobTypeName}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief descriptions to introduce your service to customers"
                    cols="0"
                    rows="16"
                  ></textarea>
                  <button type="submit">Create</button>
                </div>
                <div className="details">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    placeholder="e.g. ₹500000"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Remote, Delhi"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <label htmlFor="shortDesc">Short Description</label>
                  <textarea
                    id="shortDesc"
                    name="shortDesc"
                    value={formData.shortDesc}
                    onChange={handleChange}
                    placeholder="Short description of your service"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <label htmlFor="role">Role</label>
                  <textarea
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="What would be the role of a candidate"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
