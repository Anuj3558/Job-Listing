import React, { useEffect, useState } from "react";
import { useJobContext } from "../context/JobContext";
import { Link } from "@mui/material"; // Consider using 'react-router-dom' if navigating within your app
import axios from "axios";
import Cookies from "js-cookie";

const Analytics = () => {
  const { jobs } = useJobContext();
  const [analyticsData, setAnalyticsData] = useState([]);
  const [wishlistedJobs, setWishlistedJobs] = useState([]);
  const uid = Cookies.get("_id");
  const fetchUserJobAnalytics = async () => {
    try {
      
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/user-job-analytics`,
        { uid: uid }
      );
      setAnalyticsData(response?.data?.appliedJobs || []);
      setWishlistedJobs(response?.data?.wishlistedJobs || []); // Fetch wishlisted jobs
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  };

  useEffect(() => {
    fetchUserJobAnalytics();
  }, []);

  const getWishlistedJobs=async()=>{
    
  }

  // Calculate the number of pending applications
  const pendingApplicationsCount = analyticsData.filter(
    (application) => application.appliedStatus === "pending"
  ).length;

  return (
    <div className="flex-1 p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Jobs Applied</h3>
          <p className="text-2xl font-bold text-blue-600">
            {analyticsData.length}
          </p>
        </div>
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Interviews Scheduled</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Pending Applications</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {pendingApplicationsCount}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
          {analyticsData.length > 0 ? (
            analyticsData.map((application) => (
              <div key={application.jobId} className="bg-white p-4 shadow mb-4">
                <h4 className="text-lg font-semibold">
                  {application.jobTitle}
                </h4>
                <p className="text-sm text-gray-600">
                  {application.company} - Applied on{" "}
                  {new Date(application.appliedDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-green-600">
                  Status: {application.appliedStatus}
                </p>
              </div>
            ))
          ) : (
            <p>No recent applications found.</p>
          )}
        </div>

        {/* Wishlisted Jobs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Wishlisted Jobs</h3>
          {wishlistedJobs.length > 0 ? (
            wishlistedJobs.map((job) => (
              <div key={job.jobId} className="bg-white p-4 shadow mb-4">
                <h4 className="text-lg font-semibold">{job.jobTitle}</h4>
                <p className="text-sm text-gray-600">{job.company}</p>
                <Link
                  href={`/job-detail/${job.jobId}`}
                  className="text-blue-600"
                >
                  View Job
                </Link>
              </div>
            ))
          ) : (
            <p>No wishlisted jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
