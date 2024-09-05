import React, { useEffect, useState, useRef } from "react";
import { useDashboard } from "../context/context";
import { useNavigate } from "react-router-dom";
import { useCompany } from "../context/companyContext";
import axios from "axios";
import { useJobContext } from "../context/JobContext";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { message } from "antd";

const RecentJobPostings = ({ Title, type }) => {
  const { activeSection, setActiveSection } = useDashboard();
  const navigate = useNavigate();
  const { Companyname } = useCompany();
  const { setJobs, jobs } = useJobContext();
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [btnType, setBtnType] = useState(type);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the item is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleClick = async (type, job) => {
    if (type === "Post Job") {
      console.log("hii");
      const handlePostJob = async () => {
        const { title, Companyname } = jobs;
        setLoading(true); // Set loading to true
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/post-job`,
            { title, Companyname }
          );
          if (response.status === 201) {
            message.success("Job posted successfully!");
            window.location.reload();
          } else {
            message.error("Failed to post the job. Please try again.");
          }
        } catch (error) {
          console.error("Error posting job:", error);
          message.error("An error occurred while posting the job.");
        } finally {
          setLoading(false); // Set loading to false after request completes
        }
      };
      handlePostJob();
    } else if (type === "Close the postion") {
      console.log("Close the postion clicked", job);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/close-position`,
          { jobId: job._id }
        );
        setBtnType("Closed");
        console.log("position closed successfully ->");
      } catch (error) {
        console.log("Error occured while closing job ->",error);
      }
    }
  };

  useEffect(() => {
    if (Companyname) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/get-jobs`, {
          params: { companyname: Companyname },
        })
        .then((response) => {
          const fetchedJobs = response?.data?.jobs || [];
          // console.log("Fetched Jobs:", fetchedJobs);

          const filteredJobs =
            type === "Close the postion"
              ? fetchedJobs.filter(
                  (job) => job.status === "Open" || job.status === "Closed"
                )
              : fetchedJobs.filter((job) => job.status === "Draft");

          setJobs(filteredJobs);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
          setLoading(false); // Set loading to false in case of error
        });
    }
  }, [Companyname, type, setJobs]);

  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-4">{Title}</h3>
        <div ref={ref}>
          {loading ? (
            Array(5)
              .fill()
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 shadow mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Skeleton height={30} width={200} />
                  <Skeleton height={20} width={150} />
                  <Skeleton height={30} width={100} className="mt-2" />
                </motion.div>
              ))
          ) : jobs.length > 0 ? (
            jobs.map((job, index) => (
              <motion.div
                key={job._id}
                className="bg-white p-4 shadow mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.location}</p>
                <button
                  onClick={() => {
                    //setActiveSection("");
                    // Use useEffect to handle side effects related to activeSection change
                    handleClick(type, job);
                    setBtnType("Closed");
                  }}
                  className={`px-4 py-2 ${
                    btnType === "Closed" || job.status === "Closed"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {job.status === "Closed" ? "Closed" : btnType}
                </button>
                {type != "Post Job" ? (
                  <button
                    onClick={() => {
                      //setActiveSection("");
                      navigate("/shortlist");
                    }}
                    className="bg-green-400 ml-[53vw] text-white px-4 py-2"
                  >
                    Shortlist Candidate
                  </button>
                ) : null}
              </motion.div>
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