import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSkills = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const navigate = useNavigate();

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleSubmit = () => {
    console.log("Skills:", skills);
    navigate("/dashboard"); // Or wherever you want to navigate
  };

  return (
    <div className="p-6 flex flex-col items-center w-full min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Your Skills</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={skillInput}
          onChange={handleSkillChange}
          placeholder="Enter a skill"
          className="p-2 border border-gray-300 rounded mb-4 w-full sm:w-1/2 lg:w-1/3"
        />
        <button
          onClick={handleAddSkill}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Skill
        </button>
        <ul className="mt-4 w-full sm:w-1/2 lg:w-1/3">
          {skills.map((skill, index) => (
            <li key={index} className="border-b py-2">
              {skill}
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white mt-4 p-2 rounded hover:bg-green-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddSkills;
