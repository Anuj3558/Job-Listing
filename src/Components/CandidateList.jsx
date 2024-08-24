import React from "react";
import { handleSuccess } from "./Home/utils/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const candidates = [
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },
  {
    name: "John Doe",
    skills: "Django, Python, Gunicorn",
    profilePic: "https://via.placeholder.com/50", // Replace with actual profile picture URLs
  },

  // Add other candidates as needed
];

const CandidateList = () => {
  return (
    <>
      <div className="flex p-32 min-h-[100vh] space-x-6">
        {/* Candidate List */}
        <div>
          <h1 className="py-10 text-2xl font-bold">Shortlisted Candidates</h1>
          <div
            className="w-[60vw] max-h-[60vh] overflow-y-auto"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            <div className="flex flex-col gap-4">
              {candidates.map((candidate, index) => (
                <div
                  key={index}
                  className="bg-white shadow p-4 flex items-center gap-4 py-5 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  {/* Profile Picture */}
                  <img
                    src={candidate.profilePic}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  {/* Content */}
                  <div className="flex-grow">
                    <p className="text-[#1c7b88] font-semibold">
                      {candidate.name}
                    </p>
                    <p className="text-sm text-gray-800 font-light">
                      Skills: {candidate.skills}
                    </p>
                  </div>

                  {/* Schedule Interview Button */}
                  <button
                    onClick={() => handleSuccess("Interview scheduled")}
                    className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e]"
                  >
                    Schedule Interview
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="lg:w-3/4 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-2xl font-bold">
                <a href="#">Creative Art Designer</a>
              </h4>
              <h6 className="text-lg text-gray-500">Premium Labels Limited</h6>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5 className="mt-4 font-bold">Job Nature: Full time</h5>
          <p className="mt-2 flex items-center text-gray-600">
            <span className="mr-2">📍</span> 56/8, Panthapath Dhanmondi Dhaka
          </p>
          <p className="mt-2 flex items-center text-gray-600">
            <span className="mr-2">💰</span> 15k - 25k
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CandidateList;
