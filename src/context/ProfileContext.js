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
  const [profile, setProfile] = useState("");
  const [skills, setSkills] = useState([]);
  const [status ,setStatus] = useState("");
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
        name,         // Updated to match the setter function
        setName,      // Updated to match the setter function
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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
