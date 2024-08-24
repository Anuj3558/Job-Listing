import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaClipboardList, FaBell } from 'react-icons/fa';

// import MyJobs from './MyJobs';
// import Applications from './Applications';
// import Notifications from './Notifications';
import JobPortalProfilePage from './ProfilePage';
import Analytics from './Analytics';
import RealTimeCodingAndVideo from './codingEnvironment';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('Profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile':
        return <JobPortalProfilePage />;
      case 'MyJobs':
        return <Analytics />;
      case 'Applications':
        return <RealTimeCodingAndVideo />;
      case 'Notifications':
        return "<Notifications />";
      default:
        return "<Profile />";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex pt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <ul>
          <li
            className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
              activeSection === 'Profile' ? 'bg-blue-100' : ''
            }`}
            onClick={() => setActiveSection('Profile')}
          >
            <FaUser className="mr-2" />
            <span>Profile</span>
          </li>
          <li
            className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
              activeSection === 'MyJobs' ? 'bg-blue-100' : ''
            }`}
            onClick={() => setActiveSection('MyJobs')}
          >
            <FaBriefcase className="mr-2" />
            <span>My Jobs</span>
          </li>
          <li
            className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
              activeSection === 'Applications' ? 'bg-blue-100' : ''
            }`}
            onClick={() => setActiveSection('Applications')}
          >
            <FaClipboardList className="mr-2" />
            <span>Applications</span>
          </li>
          <li
            className={`p-4 hover:bg-blue-100 flex items-center cursor-pointer ${
              activeSection === 'Notifications' ? 'bg-blue-100' : ''
            }`}
            onClick={() => setActiveSection('Notifications')}
          >
            <FaBell className="mr-2" />
            <span>Notifications</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-scroll ">
        {renderSection()}
      </div>
    </div>
  );
};

export default UserDashboard;
