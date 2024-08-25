import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const AddSkills = () => {
  const { skills, setSkills } = useProfile([]);
  const [skillInput, setSkillInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(-1); // To handle keyboard navigation through suggestions
  const navigate = useNavigate();

  // Define skill suggestions
  const skillSuggestions = [
    "JavaScript",
    "Python",
    "Java",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "TypeScript",
    "PHP",
    "Ruby",
  ];

  // Filtered list based on search input
  const filteredSuggestions = skillSuggestions.filter((skill) =>
    skill.toLowerCase().includes(skillInput.toLowerCase())
  );

  // Handle changes in the skill input field
  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
    setShowSuggestions(true);
    setSelectedSkillIndex(-1); // Reset selected suggestion index on input change
  };

  // Add a skill to the list
  const handleAddSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkillInput("");
      setShowSuggestions(false);
    }
  };

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (selectedSkillIndex >= 0) {
        handleAddSkill(filteredSuggestions[selectedSkillIndex]);
      } else {
        handleAddSkill(skillInput);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSkillIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredSuggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSkillIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (skill) => {
    setSkillInput(skill);
    handleAddSkill(skill);  
  };

  // Submit the skill list and navigate
  const handleSubmit = () => {
    console.log("Skills:", skills);
    navigate("/add-education"); // Or wherever you want to navigate
  };
  

  return (
    <div className="pt-32 flex flex-col items-center w-full min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Your Skills</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto flex p-12 flex-col lg:flex-row">
        {/* Input Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Add Skill</h2>
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={skillInput}
              onChange={handleSkillChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter a skill"
              className="p-2 border border-gray-300 rounded w-full"
            />
            {showSuggestions && skillInput && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`p-2 cursor-pointer hover:bg-gray-100 ${
                        index === selectedSkillIndex ? "bg-gray-200" : ""
                      }`}
                    >
                      {suggestion}
                    </li>
                  ))
                ) : (
                  <li className="p-2">No results found</li>
                )}
              </ul>
            )}
          </div>
          <button
            onClick={() => handleAddSkill(skillInput)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 w-full"
          >
            Add Skill
          </button>
        </div>

        {/* Skills List Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Skills List</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md w-full">
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
