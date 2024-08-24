import React from "react";

const Analytics = () => {
  return (
    // Main Content
    <div className="flex-1 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Stats Overview */}
        <div className="bg-white p-4 -lg shadow">
          <h3 className="text-lg font-semibold">Jobs Applied</h3>
          <p className="text-2xl font-bold text-blue-600">25</p>
        </div>
        <div className="bg-white p-4 -lg shadow">
          <h3 className="text-lg font-semibold">Interviews Scheduled</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white p-4 -lg shadow">
          <h3 className="text-lg font-semibold">Jobs Saved</h3>
          <p className="text-2xl font-bold text-yellow-600">12</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
          <div className="bg-white p-4 -lg shadow mb-4">
            <h4 className="text-lg font-semibold">Frontend Developer</h4>
            <p className="text-sm text-gray-600">ABC Corp - Applied on 20th Aug 2024</p>
            <p className="text-sm text-green-600">Status: Interview Scheduled</p>
          </div>
          <div className="bg-white p-4 -lg shadow mb-4">
            <h4 className="text-lg font-semibold">Backend Developer</h4>
            <p className="text-sm text-gray-600">XYZ Inc - Applied on 18th Aug 2024</p>
            <p className="text-sm text-yellow-600">Status: In Review</p>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommended Jobs</h3>
          <div className="bg-white p-4 -lg shadow mb-4">
            <h4 className="text-lg font-semibold">Full Stack Developer</h4>
            <p className="text-sm text-gray-600">DEF Ltd - San Francisco, CA</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2">Apply Now</button>
          </div>
          <div className="bg-white p-4 -lg shadow mb-4">
            <h4 className="text-lg font-semibold">UI/UX Designer</h4>
            <p className="text-sm text-gray-600">GHI Studio - Remote</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
