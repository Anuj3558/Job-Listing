import React, { useEffect, useState } from "react";
import { useDashboard } from "../context/context";
import { useNavigate } from "react-router-dom";
import { useCompany } from "../context/companyContext";
import axios from "axios";

const RecentJobPostings = ({ Title, type }) => {
  const { activeSection, setActiveSection } = useDashboard();
  const navigate = useNavigate();
  const { Companyname } = useCompany();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (Companyname) {
      // Make the GET request to fetch jobs
      axios
        .get("http://localhost:8080/get-jobs", {
          params: { companyname: Companyname },
        })
        .then((response) => {
          console.log("Response data:", response?.data?.jobs);
          // Handle the response and set jobs
          setJobs(response?.data?.jobs || []);
          console.log("Jobs state:", jobs);
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
        });
    }
  }, [Companyname]); // Re-run effect if Companyname changes

  const button = () => {
    return type === "Post Job" ? "hidden" : "";
  };

  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-4">{Title}</h3>

       

        {/* Render jobs */}
        <div>
          {jobs.status > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="bg-white p-4 shadow mb-4">
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.location}</p>
              </div>
            ))
          ) : (
            <p>No jobs found for {Companyname}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentJobPostings;
