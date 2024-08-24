import React, { useEffect } from "react";
import {
  FaUser,
  FaBriefcase,
  FaClipboardList,
  FaBell,
  FaBuilding,
  FaListAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { useDashboard } from "../context/context.js"; // Import the custom hook

// Employee components
import JobPortalProfilePage from "./ProfilePage";
import Analytics from "./Analytics";
import RealTimeCodingAndVideo from "./codingEnvironment";

// Company components
import CompanyProfile from "./CompanyProfile";
import RecentJobPostings from "./RecentJobPostings";
import PostJob from "./PostJob";
import EditJob from "./EditJob.jsx";

const Dashboard = ({ userType }) => {
  const { activeSection, setActiveSection } = useDashboard(); // Use the context

  const renderSection = () => {
    if (userType === "employee") {
      switch (activeSection) {
        case "Profile":
          return <JobPortalProfilePage />;
        case "MyJobs":
          return <Analytics />;
        case "Applications":
          return <RealTimeCodingAndVideo />;
        case "Notifications":
          return "<Notifications />";
        default:
          return <JobPortalProfilePage />;
      }
    } else if (userType === "company") {
      switch (activeSection) {
        case "CompanyProfile":
          return <CompanyProfile />;
        case "RecentJobPostings":
          return <RecentJobPostings />;
        case "PostJob":
          return <PostJob />;
        case "EditJob":
          return <EditJob />;
        default:
          return <CompanyProfile />;
      }
    }
  };
  useEffect(() => {
    renderSection();
  }, [activeSection]);
  return (
    <div className="min-h-screen bg-gray-100 flex pt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <ul>
          {userType === "employee" ? (
            <>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "Profile" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("Profile")}
              >
                <FaUser className="mr-2" />
                <span>Profile</span>
              </li>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "MyJobs" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("MyJobs")}
              >
                <FaBriefcase className="mr-2" />
                <span>My Jobs</span>
              </li>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "Applications" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("Applications")}
              >
                <FaClipboardList className="mr-2" />
                <span>Applications</span>
              </li>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "Notifications" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("Notifications")}
              >
                <FaBell className="mr-2" />
                <span>Notifications</span>
              </li>
            </>
          ) : (
            <>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "CompanyProfile" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("CompanyProfile")}
              >
                <FaBuilding className="mr-2" />
                <span>Company Profile</span>
              </li>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "RecentJobPostings" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("RecentJobPostings")}
              >
                <FaListAlt className="mr-2" />
                <span>Recent Job Postings</span>
              </li>
              <li
                className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
                  activeSection === "PostJob" ? "bg-blue-100" : ""
                }`}
                onClick={() => setActiveSection("PostJob")}
              >
                <FaPlusCircle className="mr-2" />
                <span>Post a Job</span>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-6 overflow-y-scroll"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
