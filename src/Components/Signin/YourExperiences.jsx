import React from "react";
import { useNavigate } from "react-router-dom";

const YourExperiences = () => {
  const navigate = useNavigate();

  const handleFresherClick = () => {
    navigate("/add-skills");
  };

  const handleExperiencedClick = () => {
    navigate("/add-experience");
  };

  return (
    <div className="p-6 flex flex-col items-center w-full min-h-[70vh] pt-32">
      <h1 className="text-2xl font-bold mb-8">Your Experiences</h1>
      <div className="flex flex-col sm:flex-row justify-around w-[60%] bg-gray-100  p-10">
        <div
          onClick={handleFresherClick}
          className="p-4 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl w-full sm:w-1/2 lg:w-1/3 mx-2 text-center"
        >
          <h2 className="text-xl font-semibold mb-2">Fresher</h2>
          <p className="text-gray-600">
            Just starting out? Click here if you have no work experience.
          </p>
        </div>
        <div
          onClick={handleExperiencedClick}
          className="p-4 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl w-full sm:w-1/2 lg:w-1/3 mx-2 text-center"
        >
          <h2 className="text-xl font-semibold mb-2">Experienced</h2>
          <p className="text-gray-600">
            Already have work experience? Click here to share your previous work
            details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourExperiences;
    