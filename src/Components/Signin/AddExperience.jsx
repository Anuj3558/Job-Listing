import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (company && role && duration) {
      setExperiences([...experiences, { company, role, duration }]);
      setCompany("");
      setRole("");
      setDuration("");
    }
  };

  const handleSaveAndContinue = () => {
    console.log("Experience:", experiences);
    navigate("/dashboard"); // Or wherever you want to navigate
  };

  return (
    <div className="p-6 flex flex-col items-center w-full min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Your Experience</h1>
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Experience
        </button>
        <ul className="mt-4 w-full">
          {experiences.map((exp, index) => (
            <li key={index} className="border-b py-2">
              {exp.company} - {exp.role} ({exp.duration})
            </li>
          ))}
        </ul>
        <button
          onClick={handleSaveAndContinue}
          className="bg-green-500 text-white mt-4 p-2 rounded hover:bg-green-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddExperience;
