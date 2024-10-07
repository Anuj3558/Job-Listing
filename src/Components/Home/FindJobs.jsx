  import React, { useState, useEffect } from "react";
  import { useJobContext } from "../../context/JobContext";
  import axios from "axios";
  import { motion } from "framer-motion";
  import { useInView } from "react-intersection-observer";

  // Icons (you can replace these with any icon library or custom SVGs)
  import {
    FaSearch,
    FaBriefcase,
    FaStar,
    FaChevronDown,
    FaChevronUp,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";

  const FindJobs = () => {
    const { setJobs, jobs } = useJobContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sort, setSort] = useState("relevance");
    const [page, setPage] = useState(1);
    const [numPage, setNumPage] = useState(1);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filterJobTypes, setFilterJobTypes] = useState([]);
    const [filterExp, setFilterExp] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [showFilters, setShowFilters] = useState(true);

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      fetchJobs();
    }, [page, searchTerm, location, sort]);

    useEffect(() => {
      applyFilters();
    }, [jobs, filterJobTypes, filterExp]);

    const fetchJobs = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/get-all-jobs`,
          {
            params: {
              page,
              search: searchTerm,
              location,
              sort,
            },
          }
        );
        const fetchedJobs = response?.data?.jobs || [];
        setJobs((prevJobs) => [...prevJobs, ...fetchedJobs]);
        setNumPage(response?.data?.totalPages || 1);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsFetching(false);
      }
    };

    const applyFilters = () => {
      let filtered = jobs;

      if (filterJobTypes.length > 0) {
        filtered = filtered.filter((job) => filterJobTypes.includes(job.type));
      }

      if (filterExp.length > 0) {
        filtered = filtered.filter((job) => filterExp.includes(job.experience));
      }

      setFilteredJobs(filtered);
    };

    const handleSearch = (e) => {
      e.preventDefault();
      setPage(1);
      setJobs([]);
      fetchJobs();
    };

    const handleLoadMore = () => {
      if (page < numPage && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const toggleFilter = (type, value) => {
      const updateFilter = (prev) =>
        prev.includes(value)
          ? prev.filter((el) => el !== value)
          : [...prev, value];

      type === "jobType"
        ? setFilterJobTypes(updateFilter)
        : setFilterExp(updateFilter);
    };

    return (
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        <h1 className="text-3xl font-bold mb-8">Find Your Next Opportunity</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-grow relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex-grow relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City, state, or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 border rounded-md"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="salary">Salary</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Search Jobs
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row gap-8 flex-grow overflow-hidden">
          <aside className="w-full md:w-1/4 overflow-y-auto hide-scrollbar">
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showFilters ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {showFilters && (
                <div>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Job Type</h3>
                    {["Full-time", "Part-time", "Contract", "Internship"].map(
                      (type) => (
                        <div key={type} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id={`jobType-${type}`}
                            checked={filterJobTypes.includes(type)}
                            onChange={() => toggleFilter("jobType", type)}
                            className="mr-2"
                          />
                          <label htmlFor={`jobType-${type}`}>{type}</label>
                        </div>
                      )
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Experience Level</h3>
                    {[
                      "Entry Level",
                      "Mid Level",
                      "Senior Level",
                      "Executive",
                    ].map((exp) => (
                      <div key={exp} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`exp-${exp}`}
                          checked={filterExp.includes(exp)}
                          onChange={() => toggleFilter("experience", exp)}
                          className="mr-2"
                        />
                        <label htmlFor={`exp-${exp}`}>{exp}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          <main className="w-full md:w-3/4 overflow-y-auto hide-scrollbar">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-600 mb-4">
                Showing {filteredJobs.length} jobs
              </p>

              {filteredJobs.map((job) => (
                <Link to={`/job-detail/${job?._id}`}>
                  <div key={job.id} className="border rounded-md p-4 mb-4 flex">
                    <img
                      src={job.ProfileUrl || "/api/placeholder/64/64"}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                          {job.type}
                        </span>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {job.experience}
                        </span>
                      </div>
                      <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}

              {numPage > page && (
                <div className="mt-8 text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={isFetching}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {isFetching ? "Loading..." : "Load More Jobs"}
                  </button>
                </div>
              )}
            </motion.div>
          </main>
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    );
  };

  export default FindJobs;
