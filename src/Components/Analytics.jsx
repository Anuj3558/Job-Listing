import React from "react";
import { useJobContext } from "../context/JobContext";

const Analytics = () => {
  const { jobs } = useJobContext(); // Assuming `jobs` holds the list of popular or recommended jobs

  return (
    <div className="flex-1 p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Jobs Applied</h3>
          <p className="text-2xl font-bold text-blue-600">25</p>
        </div>
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Interviews Scheduled</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Jobs Saved</h3>
          <p className="text-2xl font-bold text-yellow-600">12</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
          <div className="bg-white p-4 shadow mb-4">
            <h4 className="text-lg font-semibold">Frontend Developer</h4>
            <p className="text-sm text-gray-600">ABC Corp - Applied on 20th Aug 2024</p>
            <p className="text-sm text-green-600">Status: Interview Scheduled</p>
          </div>
          <div className="bg-white p-4 shadow mb-4">
            <h4 className="text-lg font-semibold">Backend Developer</h4>
            <p className="text-sm text-gray-600">XYZ Inc - Applied on 18th Aug 2024</p>
            <p className="text-sm text-yellow-600">Status: In Review</p>
          </div>
        </div>

        {/* Popular/Recommended Jobs (Scrollable with Map) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommended Jobs</h3>
          <div className="h-64 overflow-y-scroll">
            {jobs && jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="bg-white p-4 shadow mb-4">
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2">Apply Now</button>
                </div>
              ))
            ) : (
              <p>No recommended jobs available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
