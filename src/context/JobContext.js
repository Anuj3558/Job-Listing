import React, { createContext, useContext, useState } from "react";

// Create a Context for the job data
const JobContext = createContext();

// Create a Provider component
export const JobProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [whoWeAreLookingFor, setWhoWeAreLookingFor] = useState('');
  const [experienceRequirements, setExperienceRequirements] = useState([]);
  const [jobFeatures, setJobFeatures] = useState([]);
  const [educationRequirements, setEducationRequirements] = useState([]);
  const [jobType, setJobType] = useState(''); // Default to "Full-time"
  const [status, setStatus] = useState(''); // Default to "Draft"
  const [jobs, setJobs] = useState([{}]);
  return (
    <JobContext.Provider value={{
        jobs, setJobs,
      title, setTitle,
      company, setCompany,
      location, setLocation,
      salary, setSalary,
      description, setDescription,
      whoWeAreLookingFor, setWhoWeAreLookingFor,
      experienceRequirements, setExperienceRequirements,
      jobFeatures, setJobFeatures,
      educationRequirements, setEducationRequirements,
      jobType, setJobType,
      status, setStatus
    }}>
      {children}
    </JobContext.Provider>
  );
};

// Create a custom hook to use the JobContext
export const useJobContext = () => useContext(JobContext);
