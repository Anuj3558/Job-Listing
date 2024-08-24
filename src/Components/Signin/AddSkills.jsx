import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const AddSkills = () => {
  const {skills, setSkills} = useProfile([]);
  const [skillInput, setSkillInput] = useState("");
  const navigate = useNavigate();

  // Handle changes in the skill input field
  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  // Add a skill to the list
  const handleAddSkill = () => {
    if (skillInput) {
      setSkills((prevSkills) => [...prevSkills, skillInput]);
      setSkillInput("");
    }
  };

  // Submit the skill list and navigate
  const handleSubmit = () => {
    console.log("Skills:", skills);
    navigate("/dashboard"); // Or wherever you want to navigate
  };

  // Inline styles for the skills list container
  const containerStyle = {
    maxHeight: "12rem", // Adjust based on your design; approximately 3 skills
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE and Edge
  };

  return (
    <div className="pt-32 flex flex-col items-center w-full min-h-screen  bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Your Skills</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto flex p-12 flex-col lg:flex-row">
        {/* Input Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Add Skill</h2>
          <input
            type="text"
            value={skillInput}
            onChange={handleSkillChange}
            placeholder="Enter a skill"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <button
            onClick={handleAddSkill}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 w-full"
          >
            Add Skill
          </button>
        </div>

        {/* Skills List Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Skills List</h2>
          <div
            style={containerStyle}
            className="bg-white shadow overflow-hidden sm:rounded-md w-full"
          >
            <ul className="divide-y divide-gray-200">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className={`border-t ${
                    index === 0 ? "border-t-0" : "border-gray-200"
                  } p-4`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white mt-4 p-2 rounded hover:bg-green-600"
      >
        Continue
      </button>
    </div>
  );
};

export default AddSkills;
