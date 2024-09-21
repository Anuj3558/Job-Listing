import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ResumeUpload = ({ previousResume, onUploadNewResume, onContinueWithPrevious }) => {
  const{resume,setResume}=useProfile();
  const Navigate=useNavigate()
  const location = useLocation();
  const jobId = location.pathname.slice(14); 
  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file.name);  // You can also upload it to a server here
      Navigate(`/confirm-apply/${jobId}`)
    }
  };

  return (
    <div className="flex flex-col min-h-[100vh] items-center pt-[40vh]   p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold   mb-4">Manage Your Resume</h2>

      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 w-full">
        {/* Option 1: Continue with Resume from Profile */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Use Resume from Your Profile</h3>
          <p className="text-gray-600 mb-4">
            {resume ? `Your current resume: ${resume}` : 'No resume found in your profile.'}
          </p>
          <button
            onClick={onContinueWithPrevious}
            className={`px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200 ease-in-out ${
              !resume ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!resume}
          >
            Continue with Profile Resume
          </button>
        </div>

        {/* Option 2: Upload New Resume */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Upload a New Resume</h3>
          <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-gray-200">
            <svg
              className="w-8 h-8 mb-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18M3 12h18"
              />
            </svg>
            <span className="mt-2 text-base leading-normal">Upload New Resume</span>
            <input
              type="file"
              className="hidden"
              onChange={handleResumeUpload}
              accept=".pdf,.doc,.docx"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
