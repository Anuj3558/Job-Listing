import React, { createContext, useContext, useState } from "react";

// Create a Context for the profile data
const ProfileContext = createContext("");

// Create a custom hook to use the ProfileContext
export const useProfile = () => useContext(ProfileContext);

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [ parser,setParser]=useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [newCity, setNewCity] = useState("");
  const [phone,setphone]=useState();
  const [userType, setUserType] = useState("");
  const [resume, setResume] = useState(null);
  const [experiences, setExperiences] = useState([
    { company: "", role: "", duration: "" }, // Form experience object
  ]);
  const [name, setName] = useState(""); // Corrected to setName
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [skills, setSkills] = useState([]);
  const [status, setStatus] = useState("");
  const [education, setEducation] = useState([]); // Add state for education
  const [certifications,setCertifications] = useState([]);
  const [profileData, setProfileData] = useState({
    name: "",
    title: "",
    location: "",
    email: "",
    phone: "",
    experience: [],
    education: [],
    certifications: [""],
    skills: [],
    resume: "",
    
    
  });

  return (
    <ProfileContext.Provider
      value={{
        selectedCity,
        status,
        parser,
        setParser,
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
        profileData,
        setProfileData,
        profileImg,
        setProfileImg,
        certifications,
        setCertifications,
        setphone,
        phone,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
