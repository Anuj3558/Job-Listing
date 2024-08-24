import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const AddExperience = () => {
  const {experiences, setExperiences} = useProfile([
    { company: "", role: "", duration: "" }, // Form experience object
  ]);
  const navigate = useNavigate();

  // Function to handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => [
      {
        ...prevExperiences[0], // Update the form experience
        [name]: value,
      },
      ...prevExperiences.slice(1), // Maintain existing experiences
    ]);
  };

  // Function to handle adding the current experience to the list
  const handleSubmit = () => {
    const { company, role, duration } = experiences[0];
    if (company && role && duration) {
      // Add the new experience to the list
      setExperiences((prevExperiences) => [
        { company: "", role: "", duration: "" }, // Reset the form experience
        ...prevExperiences.slice(1), // Existing experiences
        { company, role, duration }, // New experience
      ]);
    }
  };

  // Function to handle saving and continuing
  const handleSaveAndContinue = () => {
    console.log("Experience:", experiences);
    navigate("/dashboard"); // Or wherever you want to navigate
  };

  // Inline styles
  const containerStyle = {
    maxHeight: "20rem", // Approximate height for 4 experiences
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE and Edge
  };

  return (
    <div className="p-6 flex flex-col items-center w-full min-h-screen pt-32 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Add Your Experience</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto flex p-12 flex-col lg:flex-row">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-4">Add Experience</h2>
          <input
            type="text"
            name="company"
            value={experiences[0].company}
            onChange={handleInputChange}
            placeholder="Company"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="text"
            name="role"
            value={experiences[0].role}
            onChange={handleInputChange}
            placeholder="Role"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="text"
            name="duration"
            value={experiences[0].duration}
            onChange={handleInputChange}
            placeholder="Duration"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 w-full"
          >
            Add Experience
          </button>
          <button
            onClick={handleSaveAndContinue}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full"
          >
            Continue
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Experience List</h2>
          <div
            style={containerStyle}
            className="bg-white shadow overflow-hidden sm:rounded-md w-full"
          >
            <ul className="divide-y divide-gray-200">
              {experiences.slice(1).map((exp, index) => (
                <li
                  key={index}
                  className={`border-t ${
                    index === 0 ? "border-t-0" : "border-gray-200"
                  } p-4`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {exp.company}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {exp.role}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      Duration:{" "}
                      <span className="text-gray-600">{exp.duration}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
