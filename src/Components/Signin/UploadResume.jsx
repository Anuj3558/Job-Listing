import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const UploadResume = () => {
  const {setParser, resume, setResume } = useProfile();
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleSubmit = () => {
    if (resume) {
      console.log("Resume uploaded:", resume.name);
      setParser("expertise");
    } else {
      alert("Please upload a resume.");
    }
  };


  return (
    <div className="flex flex-col items-center p-4 md:p-6 md:pt-32  min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-10 text-center mb-8 mt-32">Upload Resume</h1>
      <div
        className={`w-full max-w-md p-6 bg-white rounded-lg shadow-md ${
          dragging ? "border-2 border-blue-500" : "border-2 border-gray-300"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center">
          <svg
            className="text-indigo-500 w-24 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <label className="flex flex-col items-center">
            <input className="hidden" type="file" onChange={handleFileChange} />
            <div className="bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-2 px-4 hover:bg-indigo-500">
              Select
            </div>
            <p className="mt-4 text-indigo-500 uppercase">or drop files here</p>
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white mt-4 p-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
