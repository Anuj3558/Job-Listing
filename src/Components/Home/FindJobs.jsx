import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { experience, jobTypes, jobs } from "../Home/utils/data";

import CustomButton from "./ui/CustomButton";
import JobCard from "./ui/JobCard";

const FindJobs = () => {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const [showJobTypes, setShowJobTypes] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Filter jobs based on selected filters
  useEffect(() => {
    let filtered = jobs;

    if (filterJobTypes.length > 0) {
      filtered = filtered.filter((job) => filterJobTypes.includes(job.type));
    }

    if (filterExp.length > 0) {
      filtered = filtered.filter((job) => filterExp.includes(job.experience));
    }

    setFilteredJobs(filtered);
  }, [filterJobTypes, filterExp]);

  const filterJobs = (val) => {
    if (filterJobTypes.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el !== val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  const filterExperience = (val) => {
    if (filterExp.includes(val)) {
      setFilterExp(filterExp.filter((el) => el !== val));
    } else {
      setFilterExp([...filterExp, val]);
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

          <div className="py-2 ">
            <div
              className="flex justify-between mb-3 cursor-pointer"
              onClick={() => setShowExperience(!showExperience)}
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

        <div className="w-full md:w-5/6 px-5 md:px-0 overflow-y-auto h-screen hide-scrollbar">
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
                title="Load More"
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white -full text-base border border-blue-600`}
              />
            </div>
          )}
        </div>
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