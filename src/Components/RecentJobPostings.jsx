import React, { useContext } from "react";
import { useDashboard } from "../context/context";
import { useNavigate } from "react-router-dom";

const RecentJobPostings = () => {
  const { activeSection, setActiveSection } = useDashboard();
  const navigate=useNavigate();

  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Jobs</h3>

        <div className="bg-white p-4 shadow mb-4">
          <h4 className="text-lg font-semibold">UI/UX Designer</h4>
          <p className="text-sm text-gray-600">GHI Studio - Remote</p>
          <div className="flex justify-between">
            <button
              onClick={() => {
                setActiveSection("EditJob");
                console.log("activeSection", activeSection);
              }}
              className="bg-blue-600 text-white px-4 py-2"
            >
              Edit Job
            </button>
            <button
              onClick={() => {
                // Implement shortlist candidates functionality here
                console.log("Shortlist candidates clicked");
                navigate("/candidatelist");
              }}
              className="bg-green-600 text-white px-4 py-2"
            >
              Applied Candidates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobPostings;
