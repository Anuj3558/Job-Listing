import React, { createContext, useContext, useState } from "react";

// Create a Context for the profile data
const ProfileContext = createContext("");

// Create a custom hook to use the ProfileContext
export const useProfile = () => useContext(ProfileContext);

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [newCity, setNewCity] = useState("");
  const [userType, setUserType] = useState("");
  const [resume, setResume] = useState(null);
  const [experiences, setExperiences] = useState([
    { company: "", role: "", duration: "" }, // Form experience object
  ]);
  const [name, setName] = useState(""); // Corrected to setName
  const [email, setEmail] = useState("");
  // const [profile, setProfile] = useState("");
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState("");
  const [education, setEducation] = useState([]); // Add state for education
    const [profile, setProfile] = useState({
      name: "",
      title: "",
      location: "",
      email: "",
      phone: "",
      experience: [{ company: "", role: "", duration: "" }],
      education: [{ course: "", institute: "", yearOfCompletion: "" }],
      certifications: [],
      skills: [],
      resume: "", // State for resume
    });
  return (
    <ProfileContext.Provider
      value={{
        selectedCity,
        status,
        setStatus,
        setSelectedCity,
        newCity,
        setNewCity,
        userType,
        setUserType,
        name, 
        setName, 
        email,
        setEmail,
        profile,
        setProfile,
        resume,
        setResume,
        experiences,
        setExperiences,
        skills,
        setSkills,
        education,
        setEducation,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
