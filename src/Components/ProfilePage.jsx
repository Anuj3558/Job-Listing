import React, { useEffect, useState } from "react";
import { FaTimes, FaEdit, FaSave } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import axios from "axios";
import { handleSuccess } from "./Home/utils/utils";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const JobPortalProfilePage = () => {
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
    resume: "",
  });

  const {
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
    resume,
    setResume,
    experiences,
    setExperiences,
    skills,
    setSkills,
    education,
    setEducation,
    profileImg,
    phone,
    setphone,
    certifications,
  } = useProfile();

  useEffect(() => {
    setProfile({
      name,
      title: "",
      location: selectedCity,
      email,
      phone,
      experience: experiences,
      education,
      certifications,
      skills,
      resume,
    });
  }, [
    name,
    email,
    selectedCity,
    phone,
    experiences,
    education,
    skills,
    resume,
    certifications,
  ]);

  const [editingSection, setEditingSection] = useState("");
  const [newEducation, setNewEducation] = useState({ course: "", institute: "", yearOfCompletion: "" });
  const [newCertification, setNewCertification] = useState("");
  const [newExperience, setNewExperience] = useState({ company: "", role: "", duration: "" });
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const addItem = (section, newItem, setNewItem) => {
    if (Object.values(newItem).every(val => val.trim())) {
      setProfile(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
      setNewItem(typeof newItem === 'string' ? '' : {});
    }
  };

  const removeItem = (section, index) => {
    setProfile(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const saveChanges = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/savechanges`;
      const response = await axios.post(url, profile);

      if (response.status === 200) {
        setEditingSection("");
        handleSuccess("Profile updated successfully");
      } else {
        console.error("Failed to save changes, status code:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during save changes ->", error.message);
    }
  };

  const SectionCard = ({ title, children, onEdit }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          aria-label={`Edit ${title}`}
        >
          {editingSection === title ? <FaSave /> : <FaEdit />}
        </button>
      </div>
      {children}
    </motion.div>
  );

  const InputField = ({ label, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <SectionCard title="Profile Summary" onEdit={() => setEditingSection(editingSection === "Profile Summary" ? "" : "Profile Summary")}>
              <div className="text-center">
                {profileImg ? (
                  <img src={profileImg} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                ) : (
                  <div className="w-32 h-32 bg-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    {name.charAt(0)}
                  </div>
                )}
                {editingSection === "Profile Summary" ? (
                  <>
                    <InputField label="Name" value={profile.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your Name" />
                    <InputField label="Title" value={profile.title} onChange={(e) => handleChange("title", e.target.value)} placeholder="Your Title" />
                    <InputField label="Location" value={profile.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="Your Location" />
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h2>
                    <p className="text-gray-600 mb-1">{profile.title}</p>
                    <p className="text-gray-500">{profile.location}</p>
                  </>
                )}
              </div>
            </SectionCard>

            <SectionCard title="Services Offered" onEdit={() => {}}>
              <ul className="list-disc list-inside text-gray-600">
                <li>Job and Internship Opportunities</li>
                <li>Resume Tester</li>
                <li>Coding Environment</li>
              </ul>
            </SectionCard>
          </div>

          <div className="lg:w-2/3">
            <SectionCard title="Personal Information" onEdit={() => setEditingSection(editingSection === "Personal Information" ? "" : "Personal Information")}>
              {editingSection === "Personal Information" ? (
                <>
                  <InputField label="Full Name" value={profile.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your Full Name" />
                  <InputField label="Email" value={profile.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your Email" />
                  <InputField label="Phone" value={profile.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Your Phone Number" />
                  <InputField label="Location" value={profile.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="Your Location" />
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><span className="font-medium">Full Name:</span> {profile.name}</div>
                  <div><span className="font-medium">Email:</span> {profile.email}</div>
                  <div><span className="font-medium">Phone:</span> {profile.phone}</div>
                  <div><span className="font-medium">Location:</span> {profile.location}</div>
                </div>
              )}
            </SectionCard>

            <SectionCard title="Experience" onEdit={() => setEditingSection(editingSection === "Experience" ? "" : "Experience")}>
              {profile.experience.map((exp, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">{exp.company}</h4>
                      <p className="text-gray-600">{exp.role}</p>
                      <p className="text-gray-500">{exp.duration}</p>
                    </div>
                    {editingSection === "Experience" && (
                      <button onClick={() => removeItem("experience", index)} className="text-red-500 hover:text-red-600" aria-label="Remove experience">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {editingSection === "Experience" && (
                <div className="mt-4">
                  <InputField label="Company" value={newExperience.company} onChange={(e) => setNewExperience({...newExperience, company: e.target.value})} placeholder="Company Name" />
                  <InputField label="Role" value={newExperience.role} onChange={(e) => setNewExperience({...newExperience, role: e.target.value})} placeholder="Your Role" />
                  <InputField label="Duration" value={newExperience.duration} onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})} placeholder="Duration" />
                  <button onClick={() => addItem("experience", newExperience, setNewExperience)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                    Add Experience
                  </button>
                </div>
              )}
            </SectionCard>

            <SectionCard title="Education" onEdit={() => setEditingSection(editingSection === "Education" ? "" : "Education")}>
              {profile.education.map((edu, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">{edu.course}</h4>
                      <p className="text-gray-600">{edu.institute}</p>
                      <p className="text-gray-500">{edu.yearOfCompletion}</p>
                    </div>
                    {editingSection === "Education" && (
                      <button onClick={() => removeItem("education", index)} className="text-red-500 hover:text-red-600" aria-label="Remove education">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {editingSection === "Education" && (
                <div className="mt-4">
                  <InputField label="Course" value={newEducation.course} onChange={(e) => setNewEducation({...newEducation, course: e.target.value})} placeholder="Course Name" />
                  <InputField label="Institute" value={newEducation.institute} onChange={(e) => setNewEducation({...newEducation, institute: e.target.value})} placeholder="Institute Name" />
                  <InputField label="Year of Completion" value={newEducation.yearOfCompletion} onChange={(e) => setNewEducation({...newEducation, yearOfCompletion: e.target.value})} placeholder="Year of Completion" />
                  <button onClick={() => addItem("education", newEducation, setNewEducation)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                    Add Education
                  </button>
                </div>
              )}
            </SectionCard>

            <SectionCard title="Certifications" onEdit={() => setEditingSection(editingSection === "Certifications" ? "" : "Certifications")}>
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center">
                    {cert}
                    {editingSection === "Certifications" && (
                      <button onClick={() => removeItem("certifications", index)} className="ml-2 text-red-500 hover:text-red-600" aria-label="Remove certification">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {editingSection === "Certifications" && (
                <div className="mt-4">
                  <InputField label="Certification" value={newCertification} onChange={(e) => setNewCertification(e.target.value)} placeholder="Certification Name" />
                  <button onClick={() => addItem("certifications", newCertification, setNewCertification)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                    Add Certification
                  </button>
                </div>
              )}
            </SectionCard>

            <SectionCard title="Skills" onEdit={() => setEditingSection(editingSection === "Skills" ? "" : "Skills")}>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center">
                    {skill}
                    {editingSection === "Skills" && (
                      <button onClick={() => removeItem("skills", index)} className="ml-2 text-red-500 hover:text-red-600" aria-label="Remove skill">
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {editingSection === "Skills" && (
                <div className="mt-4">
                  <InputField label="Skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Skill Name" />
                  <button onClick={() => addItem("skills", newSkill, setNewSkill)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                    Add Skill
                  </button>
                </div>
              )}
            </SectionCard>

            <SectionCard title="Resume" onEdit={() => setEditingSection(editingSection === "Resume" ? "" : "Resume")}>
              {editingSection === "Resume" ? (
                <div>
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setProfile((prevProfile) => ({
                            ...prevProfile,
                            resume: reader.result,
                          }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="mb-4"
                  />
                </div>
              ) : (
                <p className="text-gray-600">{profile.resume ? "Resume uploaded" : "No resume uploaded"}</p>
              )}
            </SectionCard>
          </div>
        </div>
        {editingSection && (
          <div className="fixed bottom-8 right-8">
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center"
            >
              <FaSave className="mr-2" /> Save All Changes
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default JobPortalProfilePage;