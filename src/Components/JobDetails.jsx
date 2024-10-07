"use client";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Database,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import Banner from "./Home/ui/Banner";
import { useJobContext } from "../context/JobContext";
import { useProfile } from "../context/ProfileContext";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";

const JobDetails = () => {
  const [liked, setLiked] = useState(false);
  const [jobDetail, setJobDetails] = useState(null);
  const location = useLocation();
  const { jobs } = useJobContext();
  const navigate = useNavigate();
  const { userType } = useProfile();
  const userId = Cookies.get("_id");
  const jobId = location.pathname.slice(12);

  const handleWishlist = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/wishlist/${jobId}`;
      const response = await axios.post(url, { userId, jobId });
      setLiked(response.data.jobIds.includes(jobId));
      if (response.status === 201) {
        message.success("Job added to wishlist");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        try {
          const removeUrl = `${process.env.REACT_APP_BACKEND_URL}/wishlist/remove`;
          await axios.delete(removeUrl, { data: { userId, jobId } });
          setLiked(false);
          message.success("Job removed from wishlist");
        } catch (removeError) {
          message.error("Error removing from wishlist");
        }
      } else {
        message.error("Error occurred while updating wishlist");
      }
    }
  };

  const handleApplyJob = async () => {
    if (userType === "") {
      message.warning("Please login to Apply");
      navigate("/login");
    } else {
      navigate(`/resume-check/${jobId}`);
    }
  };

  useEffect(() => {
    const foundJob = jobs.find((job) => job._id === jobId);
    setJobDetails(foundJob || {});
    handleWishlist();
  }, [jobId, jobs]);

  if (!jobDetail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-pulse text-3xl font-semibold text-indigo-600">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Banner page="JobDetails" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {jobDetail.title}
                </h1>
                <h2 className="text-2xl text-indigo-600">
                  {jobDetail.company}
                </h2>
              </div>
              <div className="flex space-x-4">
                {(userType === "employee" || userType === "") && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleWishlist();
                      setLiked((prev) => !prev);
                    }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      liked
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${liked ? "fill-current" : ""}`}
                    />
                  </motion.button>
                )}
                {(userType === "employee" || userType === "") && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleApplyJob}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Apply Now
                  </motion.button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center text-indigo-700">
                <Briefcase className="w-5 h-5 mr-2" />
                <span>{jobDetail.nature || "Full time"}</span>
              </div>
              <div className="flex items-center text-indigo-700">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{jobDetail.location}</span>
              </div>
              <div className="flex items-center text-indigo-700">
                <Database className="w-5 h-5 mr-2" />
                <span>{jobDetail.salary}</span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Job Description
                </h3>
                <p className="text-gray-700">{jobDetail.description}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Whom We Are Looking For
                </h3>
                <p className="text-gray-700">{jobDetail.whoWeAreLookingFor}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Experience Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {jobDetail.experienceRequirements?.map(
                    (requirement, index) => (
                      <li key={index}>{requirement}</li>
                    )
                  )}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Job Features
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {jobDetail.jobFeatures?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Education Requirements
                </h3>
                <p className="text-gray-700">
                  {jobDetail.educationRequirements}
                </p>
              </section>
            </div>
          </div>

          <div className="bg-indigo-50 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Related Jobs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((job) => (
                <div
                  key={job}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        Similar Job Title
                      </h4>
                      <p className="text-indigo-600">Company Name</p>
                    </div>
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Job Location</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-indigo-100 text-indigo-700 py-2 rounded-lg font-medium flex items-center justify-center"
                  >
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobDetails;
