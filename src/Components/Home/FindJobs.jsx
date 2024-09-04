import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { experience, jobTypes } from "../Home/utils/data";
import CustomButton from "./ui/CustomButton";
import JobCard from "./ui/JobCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useJobContext } from "../../context/JobContext";
import axios from "axios";

const FindJobs = () => {
  const { setJobs, jobs } = useJobContext();
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showJobTypes, setShowJobTypes] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Fetch jobs when the component mounts or when page changes
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-jobs?page=${page}`)
      .then((response) => {
        const fetchedJobs = response?.data?.jobs || [];
        setJobs(fetchedJobs);
        setNumPage(response?.data?.totalPages || 1); // Assume totalPages is returned
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, [page, setJobs]);

  useEffect(() => {
    let filtered = jobs;
  
    if (filterJobTypes.length > 0) {
      filtered = filtered.filter((job) => filterJobTypes.includes(job.type));
    }

    if (filterExp.length > 0) {
      filtered = filtered.filter((job) => filterExp.includes(job.experience));
    }

    setFilteredJobs(filtered);
  }, [jobs, filterJobTypes, filterExp]);

  const filterJobs = (val) => {
    setFilterJobTypes((prev) =>
      prev.includes(val) ? prev.filter((el) => el !== val) : [...prev, val]
    );
  };

  const filterExperience = (val) => {
    setFilterExp((prev) =>
      prev.includes(val) ? prev.filter((el) => el !== val) : [...prev, val]
    );
  };

  const handleLoadMore = () => {
    if (page < numPage && !isFetching) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
      setIsFetching(false);
    }
  };

  return (
    <div className="mx-9 mt-40">
      <h2 className="align-middle md:ml-72 poppins-bold md:text-3xl text-3xl mx-auto">
        Recent Job Postings
      </h2>
      <div className="container mx-auto flex mt-40 gap-6 2xl:gap-10 md:px-5 py-6 md:py-6">
        <div className="hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm p-4">
          <p className="text-lg font-semibold text-slate-600">Filter Search</p>

          <div className="py-2">
            <div
              className="flex justify-between mb-3 cursor-pointer"
              onClick={() => setShowJobTypes(!showJobTypes)}
              aria-expanded={showJobTypes}
            >
              <p className="flex items-center gap-2 font-semibold">
                <BiBriefcaseAlt2 />
                Job Type
              </p>
              <button>
                {showJobTypes ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>
            </div>

            {showJobTypes && (
              <div className="flex flex-col gap-2">
                {jobTypes.map((jtype, index) => (
                  <div key={index} className="flex gap-2 text-sm md:text-base">
                    <input
                      type="checkbox"
                      value={jtype}
                      className="w-4 h-4"
                      onChange={(e) => filterJobs(e.target.value)}
                    />
                    <span>{jtype}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="py-2">
            <div
              className="flex justify-between mb-3 cursor-pointer"
              onClick={() => setShowExperience(!showExperience)}
              aria-expanded={showExperience}
            >
              <p className="flex items-center gap-2 font-semibold">
                <BsStars />
                Experience
              </p>
              <button>
                {showExperience ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>
            </div>

            {showExperience && (
              <div className="flex flex-col gap-2">
                {experience.map((exp) => (
                  <div key={exp.title} className="flex gap-3">
                    <input
                      type="checkbox"
                      value={exp.value}
                      className="w-4 h-4"
                      onChange={(e) => filterExperience(e.target.value)}
                    />
                    <span>{exp.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <motion.div
          ref={ref}
          className="w-full md:w-5/6 px-5 md:px-0 overflow-y-auto h-screen hide-scrollbar"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing:{" "}
              <span className="font-semibold">{filteredJobs.length}</span> Jobs
              Available
            </p>
          </div>

          <div className="w-full flex flex-wrap gap-4">
            {filteredJobs.map((job, index) => (
              <JobCard job={job} key={index} />
            ))}
          </div>

          {numPage > page && !isFetching && (
            <div className="w-full flex items-center justify-center pt-16">
              <CustomButton
                title={isFetching ? "Loading..." : "Load More"}
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white -full text-base border border-blue-600`}
                onClick={handleLoadMore}
                disabled={isFetching}
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* CSS to hide the scrollbar while keeping the scrolling feature */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar for WebKit browsers */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </div>
  );
};

export default FindJobs;
