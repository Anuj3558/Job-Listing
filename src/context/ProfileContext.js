// ProfileContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context for the profile data
const ProfileContext = createContext();

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
  const [skills, setSkills] = useState([]);

  return (
    <ProfileContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        newCity,
        setNewCity,
        userType,
        setUserType,
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
