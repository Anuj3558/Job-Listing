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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
