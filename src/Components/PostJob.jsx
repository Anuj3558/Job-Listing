import React, { useState } from "react";
import { FaDatabase, FaMapMarkerAlt } from "react-icons/fa";

import { Popover, message, notification } from "antd";
import axios from "axios";
import { useCompany } from "../context/companyContext";

const PostJob = () => {
  const { logoUrl,Companyname } = useCompany()
  const [jobDetails, setJobDetails] = useState({
    title: "",
    Companyname: Companyname,
    location: "",
    salary: "",
    description: "",
    whoWeAreLookingFor: "",
    experienceRequirements: [],
    jobFeatures: [],
    educationRequirements: [],
    jobType: "Full-time",
  });
 ;
  const [editMode, setEditMode] = useState({
    whoWeAreLookingFor: false,
    experienceRequirements: false,
    jobFeatures: false,
    educationRequirements: false,
  });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
    setHasUnsavedChanges(true);
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...jobDetails[key]];
    newArray[index] = value;
    setJobDetails({ ...jobDetails, [key]: newArray });
    setHasUnsavedChanges(true);
  };

  const handleAddToArray = (key) => {
    setJobDetails({ ...jobDetails, [key]: [...jobDetails[key], ""] });
    setHasUnsavedChanges(true);
  };

  const handleRemoveFromArray = (key, index) => {
    const newArray = jobDetails[key].filter((_, i) => i !== index);
    setJobDetails({ ...jobDetails, [key]: newArray });
    setHasUnsavedChanges(true);
  };

  const handleSave = (section) => {
    setEditMode({ ...editMode, [section]: false });
    setHasUnsavedChanges(false);
  };

  const validateFields = () => {
    const requiredFields = [
      "title",
      "Companyname",
      "location",
      "salary",
      "description",
      "whoWeAreLookingFor",
      "experienceRequirements",
      "jobFeatures",
      "educationRequirements",
    ];

    for (const field of requiredFields) {
      if (field === "experienceRequirements" || field === "jobFeatures" || field === "educationRequirements") {
        if (jobDetails[field].length === 0) {
          notification.error({
            message: `Validation Error`,
            description: `Please add at least one ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} or enter NA.`,
            duration: 5,
          });
          return false;
        }
      } else {
        if (!jobDetails[field]) {
          notification.error({
            message: `Validation Error`,
            description: `Please fill out the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`,
            duration: 5,
          });
          return false;
        }
      }
    }
    return true;
  };

  const handleFinalSave = async () => {
    if (!validateFields()) return;

    setLoading(true); // Set loading to true
    console.log("Saving all changes...", jobDetails);
    setHasUnsavedChanges(false);
    setEditMode({
      whoWeAreLookingFor: false,
      experienceRequirements: false,
      jobFeatures: false,
      educationRequirements: false,
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/save-draft`, jobDetails);
      console.log(response);
      if (response.status === 201) {
        message.success("All changes have been saved!");
      } else {
        message.error("Failed to save. Please try again.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      message.error("An error occurred while saving the job.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  const handlePostJob = async () => {
    if (!validateFields()) return;

    setLoading(true); // Set loading to true
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/post-job`, jobDetails);
      if (response.status === 201) {
        message.success("Job posted successfully!");
        window.location.reload();
      } else {
        message.error("Failed to post the job. Please try again.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      message.error("An error occurred while posting the job.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  const confirmPostJob = (
    <div>
      <p>Are you sure you want to post this job?</p>
      <button
        type="button"
        onClick={handlePostJob}
        className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 mr-4"
        disabled={loading}
      >
        Confirm
      </button>
    </div>
  );

  return (
    <div className="max-h-[80vh]">
      <h1 className="poppint poppins-bold text-2xl">Post a new job</h1>
      {loading && (
        <div className="flex justify-center items-center py-6">
          <div className="spinner"></div>
        </div>
      )}
      <section className="py-12 w-[100%]">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full lg:w-2/3">
            {/* Job Post */}
            <div className="bg-white p-6 shadow-md flex flex-col lg:flex-row mb-6">
              <div className="lg:w-1/4">
                <img src={logoUrl} alt="Job Image" className="w-full h-auto" />
              </div>
              <div className="lg:w-3/4 lg:pl-6">
                <form>
                  {/* Title and Companyname */}
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="title"
                        value={jobDetails.title}
                        onChange={handleChange}
                        placeholder="Job Title"
                        className="text-2xl font-bold border p-2 w-full"
                      />
                      <p  className="text-2xl font-bold  p-2 w-full">{jobDetails.Companyname}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <textarea
                    name="description"
                    value={jobDetails.description}
                    onChange={handleChange}
                    placeholder="Job Description"
                    className="mt-4 text-gray-700 border p-2 w-full"
                  />
                  
                  {/* Job Type */}
                  <h5 className="mt-4 font-bold">
                    Job Nature:{" "}
                    <select
                      name="jobType"
                      value={jobDetails.jobType}
                      onChange={handleChange}
                      className="border p-2 mt-2"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </h5>
                  
                  {/* Location and Salary */}
                  <input
                    type="text"
                    name="location"
                    value={jobDetails.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                  />
                  <input
                    type="text"
                    name="salary"
                    value={jobDetails.salary}
                    onChange={handleChange}
                    placeholder="Salary"
                    className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                  />
                </form>
              </div>
            </div>

            {/* Who We Are Looking For */}
            <section className="bg-white p-6 shadow-md mb-6">
              <h2 className="text-xl font-bold">Who We Are Looking For</h2>
              {editMode.whoWeAreLookingFor ? (
                <textarea
                  name="whoWeAreLookingFor"
                  value={jobDetails.whoWeAreLookingFor}
                  onChange={handleChange}
                  placeholder="Describe who you are looking for"
                  className="mt-2 border p-2 w-full"
                />
              ) : (
                <p className="mt-2">{jobDetails.whoWeAreLookingFor || "Describe who you are looking for"}</p>
              )}
              {editMode.whoWeAreLookingFor ? (
                <button
                  type="button"
                  onClick={() => handleSave("whoWeAreLookingFor")}
                  className="bg-blue-500 text-white px-4 py-2 mt-2"
                  disabled={loading}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode({ ...editMode, whoWeAreLookingFor: true })}
                  className="bg-green-500 ml-3 text-white px-4 py-2 mt-2"
                >
                  Edit
                </button>
              )}
            </section>

            {/* Experience Requirements */}
            <section className="bg-white p-6 shadow-md mb-6">
              <h2 className="text-xl font-bold">Experience Requirements</h2>
              {jobDetails.experienceRequirements.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange("experienceRequirements", index, e.target.value)}
                    className="border p-2 flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFromArray("experienceRequirements", index)}
                    className="bg-red-500 text-white px-2 py-1 ml-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddToArray("experienceRequirements")}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                Add Requirement
              </button>
              {editMode.experienceRequirements ? (
                <button
                  type="button"
                  onClick={() => handleSave("experienceRequirements")}
                  className="bg-blue-500 text-white px-4 py-2 mt-2"
                  disabled={loading}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode({ ...editMode, experienceRequirements: true })}
                  className="bg-green-500 ml-3  text-white px-4 py-2 mt-2"
                >
                  Edit
                </button>
              )}
            </section>

            {/* Job Features */}
            <section className="bg-white p-6 shadow-md mb-6">
              <h2 className="text-xl font-bold">Job Features</h2>
              {jobDetails.jobFeatures.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange("jobFeatures", index, e.target.value)}
                    className="border p-2 flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFromArray("jobFeatures", index)}
                    className="bg-red-500 text-white px-2 py-1 ml-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddToArray("jobFeatures")}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                Add Feature
              </button>
              {editMode.jobFeatures ? (
                <button
                  type="button"
                  onClick={() => handleSave("jobFeatures")}
                  className="bg-blue-500 text-white px-4 py-2 mt-2"
                  disabled={loading}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode({ ...editMode, jobFeatures: true })}
                  className="bg-green-500 ml-3 text-white px-4 py-2 mt-2"
                >
                  Edit
                </button>
              )}
            </section>

            {/* Education Requirements */}
            <section className="bg-white p-6 shadow-md mb-6">
              <h2 className="text-xl font-bold">Education Requirements</h2>
              {jobDetails.educationRequirements.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange("educationRequirements", index, e.target.value)}
                    className="border p-2 flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFromArray("educationRequirements", index)}
                    className="bg-red-500 text-white px-2 py-1 ml-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddToArray("educationRequirements")}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                Add Requirement
              </button>
              {editMode.educationRequirements ? (
                <button
                  type="button"
                  onClick={() => handleSave("educationRequirements")}
                  className="bg-blue-500 text-white px-4 py-2 mt-2"
                  disabled={loading}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditMode({ ...editMode, educationRequirements: true })}
                  className="bg-green-500 ml-3 text-white px-4 py-2 mt-2"
                >
                  Edit
                </button>
              )}
            </section>

            {/* Post Job Button */}
            <div className="flex justify-end">
              <Popover content={confirmPostJob} trigger="click">
                <button
                  type="button"
                  className="bg-red-500 text-white px-6 py-2 hover:bg-red-600"
                  disabled={loading}
                >
                  Post Job
                </button>
              </Popover>
              <button
                type="button"
                onClick={handleFinalSave}
                className="bg-green-500 ml-3 text-white px-6 py-2 ml-4 hover:bg-green-600"
                disabled={loading}
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
