import React, { useState, useEffect } from 'react';
import { FaHeart, FaMapMarkerAlt, FaDatabase } from 'react-icons/fa';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Banner from './Home/ui/Banner';
import { useJobContext } from '../context/JobContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { TbPointFilled } from "react-icons/tb";
import { useProfile } from '../context/ProfileContext';
import axios from 'axios';
import { message } from 'antd';

const JobDetails = () => {
  const location = useLocation();
  const { jobs } = useJobContext();
  const Navigate = useNavigate()
  const { userType } = useProfile(); // Get userType from ProfileContext
  const [jobDetail, setJobDetails] = useState(null);

  // Extracting job ID or any other parameter from the URL
  const jobId = location.pathname.slice(12); // Assuming job ID is the last segment in the URL
  const HandleApplyjob=async (e)=>{
    if(userType===""){
     message.warning("Please login to Apply")
      Navigate("/login")
    }
    else{
      Navigate(`/resume-check/${jobId}`)
    }
 }
  useEffect(() => {
    console.log(userType)
    // Update job details when the component mounts or when jobs or jobId changes
    const foundJob = jobs.find((job) => job._id === jobId);
    setJobDetails(foundJob || {});
  }, [jobId, jobs,userType]);

  if (!jobDetail) {
    return (
      <div>
        {/* Banner Area */}
        <Banner page={"JobDetails"} />
        {/* Post Area */}
        <section className="py-12 px-14">
          <div className="container mx-auto flex flex-wrap justify-center">
            <div className="w-full lg:w-2/3">
              {/* Job Post */}
              <div className="bg-white p-6 shadow-md lg:flex lg:flex-row mb-6">
                <div className="lg:w-1/4">
                  <Skeleton height={200} />
                  <ul className="mt-4 flex space-x-2">
                    <li><Skeleton width={60} height={20} /></li>
                    <li><Skeleton width={60} height={20} /></li>
                    <li><Skeleton width={60} height={20} /></li>
                  </ul>
                </div>
                <div className="lg:w-3/4 lg:pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <Skeleton width={150} height={30} />
                      <Skeleton width={100} height={20} />
                    </div>
                    <div className="flex space-x-4">
                      <Skeleton circle={true} height={30} width={30} />
                      <Skeleton width={80} height={30} />
                    </div>
                  </div>
                  <Skeleton count={3} />
                </div>
              </div>
              {/* Job Details */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
              {/* Experience Requirements */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
              {/* Job Features */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
              {/* Education Requirements */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
            </div>
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 lg:pl-8">
              {/* Jobs by Location */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
              {/* Top Rated Jobs */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
              {/* Jobs by Category */}
              <div className="bg-white p-6 shadow-md lg:mb-6">
                <Skeleton width={200} height={30} />
                <Skeleton count={2} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Area */}
      <Banner page={"JobDetails"} />

      {/* Post Area */}
      <section className="py-12 px-14">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full lg:w-2/3">
            {/* Job Post */}
            <div className="bg-white p-6 shadow-md lg:flex lg:flex-row mb-6">
              <div className="lg:w-1/4">
                <img src={jobDetail.ProfileUrl || "img/post.png"} alt="Job Image" className="w-full h-auto" />
                <ul className="mt-4 flex space-x-2">
                  {jobDetail.categories && jobDetail.categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="bg-blue-500 text-white px-2 py-1">{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-3/4 lg:pl-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold"><a href="#">{jobDetail.title || "Job Title"}</a></h4>
                    <h6 className="text-lg text-gray-500">{jobDetail.company || "Company Name"}</h6>
                  </div>
                  <div className="flex space-x-4">
                  {(userType === "employee" || userType === "") && <button className="text-red-500"><FaHeart /></button>}
                    {/* Conditionally show the 'Apply' button for employees only */}
                    {(userType === 'employee' || userType === "") && (
                      <button onClick={HandleApplyjob} className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">
                        Apply
                      </button>
                      
                    )}
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  {jobDetail.description || "Job description goes here..."}
                </p>
                <h5 className="mt-4 font-bold">Job Nature: {jobDetail.nature || "Full time"}</h5>
                <p className="mt-2 flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> {jobDetail.location || "Location"}</p>
                <p className="mt-2 flex items-center text-gray-600"><FaDatabase className="mr-2" /> {jobDetail.salary || "Salary"}</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Whom we are looking for</h4>
              <p className="text-gray-700 mb-4">
                {jobDetail.whoWeAreLookingFor || "Details about whom we are looking for..."}
              </p>
            </div>

            {/* Experience Requirements */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Experience Requirements</h4>
              <ul className="space-y-4">
                {jobDetail.experienceRequirements && jobDetail.experienceRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <TbPointFilled className='mr-5' />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Features */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Job Features</h4>
              <ul className="space-y-4">
                {jobDetail.jobFeatures && jobDetail.jobFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <TbPointFilled className='mr-5' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Requirements */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Education Requirements</h4>
              <p className="text-gray-700">
                {jobDetail.educationRequirements || "Education requirements go here..."}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:pl-8">
            {/* Jobs by Location */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Jobs by Location</h4>
              <p className="text-gray-700">
                {jobDetail.location || "Location"}
              </p>
            </div>

            {/* Top Rated Jobs */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Top Rated Jobs</h4>
              <p className="text-gray-700">List of top-rated jobs goes here...</p>
            </div>

            {/* Jobs by Category */}
            <div className="bg-white p-6 shadow-md lg:mb-6">
              <h4 className="text-2xl font-bold mb-4">Jobs by Category</h4>
              <p className="text-gray-700">List of jobs by category goes here...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
