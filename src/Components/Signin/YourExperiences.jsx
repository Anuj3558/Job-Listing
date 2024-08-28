import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const YourExperiences = () => {
  const {setParser}=useProfile();
  const navigate = useNavigate();

  const handleFresherClick = () => {
    setParser("fresher");
  };

  const handleExperiencedClick = () => {
    setParser("Experience");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center w-full min-h-[70vh] pt-24 md:pt-32">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Your Experiences
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-around w-full max-w-4xl bg-gray-100 p-6 sm:p-8 md:p-10 rounded-lg">
        <div
          onClick={handleFresherClick}
          className="p-4 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Fresher</h2>
          <p className="text-gray-600">
            Just starting out? Click here if you have no work experience.
          </p>
        </div>
        <div
          onClick={handleExperiencedClick}
          className="p-4 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl w-full sm:w-1/2 lg:w-1/3 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Experienced
          </h2>
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
