import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import axios from "axios";
import { handleSuccess } from "./Home/utils/utils";
import { ToastContainer } from "react-toastify";

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
    resume: "", // State for resume
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

  console.log("Profile Changes ->");
  console.log("skills", skills);
  console.log("phone", phone);
  console.log("education", education);
  console.log("certifications", certifications);
  console.log("name", name);

  useEffect(() => {
    setProfile({
      name: name,
      title: "",
      location: selectedCity,
      email: email,
      phone: phone,
      experience: experiences,
      education: education,
      certifications: certifications,
      skills: skills,
      resume: resume,
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

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingCertifications, setIsEditingCertifications] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingResume, setIsEditingResume] = useState(false); // State for editing resume
  const [isEditingAnySection, setIsEditingAnySection] = useState(false);

  const [newEducation, setNewEducation] = useState({
    course: "",
    institute: "",
    yearOfCompletion: "",
  });
  const [newCertification, setNewCertification] = useState("");
  const [newExperience, setNewExperience] = useState({
    company: "",
    role: "",
    duration: "",
  });
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const addEducation = () => {
    if (
      newEducation.course.trim() &&
      newEducation.institute.trim() &&
      newEducation.yearOfCompletion
    ) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        education: [...prevProfile.education, newEducation],
      }));
      setNewEducation({ course: "", institute: "", yearOfCompletion: "" });
    }
  };

  const addCertification = () => {
    if (newCertification.trim()) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        certifications: [...prevProfile.certifications, newCertification],
      }));
      setNewCertification("");
    }
  };

  const addExperience = () => {
    if (
      newExperience.company.trim() &&
      newExperience.role.trim() &&
      newExperience.duration.trim()
    ) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        experience: [...prevProfile.experience, newExperience],
      }));
      setNewExperience({ company: "", role: "", duration: "" });
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        skills: [...prevProfile.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  const removeExperience = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      experience: prevProfile.experience.filter((_, i) => i !== index),
    }));
  };

  const removeEducation = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      education: prevProfile.education.filter((_, i) => i !== index),
    }));
  };

  const removeCertification = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      certifications: prevProfile.certifications.filter((_, i) => i !== index),
    }));
  };

  const removeSkill = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: prevProfile.skills.filter((_, i) => i !== index),
    }));
  };

  const saveChanges = async () => {
    try {
      const url = "http://localhost:8080/savechanges";
      const response = await axios.post(url, profile);

      if (response.status === 200) {
        setIsEditingAnySection(false);
        console.log("Changes saved:", profile);
        
        // Reset edit states after saving
        setIsEditingProfile(false);
        setIsEditingExperience(false);
        setIsEditingEducation(false);
        setIsEditingCertifications(false);
        setIsEditingSkills(false);
        setIsEditingResume(false);
        handleSuccess("Profile updated successfully");
      } else {
        console.error("Failed to save changes, status code:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during save changes ->", error.message);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Profile Summary Section */}
          <div className="lg:w-1/3 mb-4">
            <div className="card bg-white p-6 text-center shadow-md mb-4 relative">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile"
                  className="rounded-full mx-auto"
                />
              ) : (
                <button className="w-36 h-36 text-7xl mr-6 bg-purple-400 rounded-full">
                  <p className="text-white">{name}</p>
                </button>
              )}

              {isEditingProfile ? (
                <>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="my-3 text-lg font-medium text-center w-full border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="text-gray-500 mb-1 text-center w-full border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="text-gray-500 mb-4 text-center w-full border-b-2 border-gray-300 focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h5 className="my-3 text-lg font-medium">{profile.name}</h5>
                  <p className="text-gray-500 mb-1">{profile.title}</p>
                  <p className="text-gray-500 mb-4">{profile.location}</p>
                </>
              )}
              <button
                onClick={() => {
                  setIsEditingAnySection(true);
                  setIsEditingProfile(!isEditingProfile);
                }}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingProfile ? "Save" : "Edit"}
              </button>
            </div>
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">
                Services Offered by Us
              </h3>
              <ul className="list-disc list-inside text-gray-500">
                <li>Job and Internship Opportunities</li>
                <li>Resume Tester</li>
                <li>Coding Environment</li>
              </ul>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="lg:w-2/3 ml-6">
            <div className="card bg-white p-6 shadow-md mb-4">
              {[
                { label: "Full Name", field: "name", value: profile.name },
                { label: "Email", field: "email", value: profile.email },
                { label: "Phone", field: "phone", value: profile.phone },
                {
                  label: "Location",
                  field: "location",
                  value: profile.location,
                },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex justify-between py-2">
                    <p className="mb-0 text-gray-700">{item.label}</p>
                    {isEditingProfile ? (
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) =>
                          handleChange(item.field, e.target.value)
                        }
                        className="text-gray-500 mb-0 w-1/2 border-b-2 border-gray-300 focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-500 mb-0">{item.value}</p>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Experience Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Experience</h3>
              {profile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-b py-2 flex justify-between items-center relative"
                >
                  <div>
                    <p className="font-bold">{exp.company}</p>
                    <p className="text-gray-500">{exp.role}</p>
                    <p className="text-gray-400">{exp.duration}</p>
                  </div>
                  {isEditingExperience && (
                    <button
                      onClick={() => removeExperience(index)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              {isEditingExperience && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        company: e.target.value,
                      })
                    }
                    className="w-full mb-2 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        role: e.target.value,
                      })
                    }
                    className="w-full mb-2 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        duration: e.target.value,
                      })
                    }
                    className="w-full mb-4 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={addExperience}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add Experience
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setIsEditingAnySection(true);
                  setIsEditingExperience(!isEditingExperience);
                }}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingExperience ? "Save" : "Edit"}
              </button>
            </div>

            {/* Education Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Education</h3>
              {profile.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-b py-2 flex justify-between items-center relative"
                >
                  <div>
                    <p className="font-bold">{edu.course}</p>
                    <p className="text-gray-500">{edu.institute}</p>
                    <p className="text-gray-400">{edu.yearOfCompletion}</p>
                  </div>
                  {isEditingEducation && (
                    <button
                      onClick={() => removeEducation(index)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              {isEditingEducation && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Course"
                    value={newEducation.course}
                    onChange={(e) =>
                      setNewEducation({
                        ...newEducation,
                        course: e.target.value,
                      })
                    }
                    className="w-full mb-2 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Institute"
                    value={newEducation.institute}
                    onChange={(e) =>
                      setNewEducation({
                        ...newEducation,
                        institute: e.target.value,
                      })
                    }
                    className="w-full mb-2 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Year of Completion"
                    value={newEducation.yearOfCompletion}
                    onChange={(e) =>
                      setNewEducation({
                        ...newEducation,
                        yearOfCompletion: e.target.value,
                      })
                    }
                    className="w-full mb-4 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={addEducation}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add Education
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setIsEditingAnySection(true);
                  setIsEditingEducation(!isEditingEducation);
                }}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingEducation ? "Save" : "Edit"}
              </button>
            </div>

            {/* Certifications Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Certifications</h3>
              {profile.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border-b py-2 flex justify-between items-center relative"
                >
                  <p className="text-gray-500">{cert}</p>
                  {isEditingCertifications && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              {isEditingCertifications && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Certification"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                    className="w-full mb-4 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={addCertification}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add Certification
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setIsEditingAnySection(true);
                  setIsEditingCertifications(!isEditingCertifications);
                }}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingCertifications ? "Save" : "Edit"}
              </button>
            </div>

            {/* Skills Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Skills</h3>
              {profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="border-b py-2 flex justify-between items-center relative"
                >
                  <p className="text-gray-500">{skill}</p>
                  {isEditingSkills && (
                    <button
                      onClick={() => removeSkill(index)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              {isEditingSkills && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="w-full mb-4 border-b-2 border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={addSkill}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add Skill
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setIsEditingAnySection(true);
                  setIsEditingSkills(!isEditingSkills);
                }}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingSkills ? "Save" : "Edit"}
              </button>
            </div>

            {/* Resume Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Resume</h3>
              <p className="text-gray-500 mb-4">{profile.resume}</p>
              {isEditingResume && (
                <div className="mt-4">
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
                  <button
                    onClick={() => setIsEditingResume(false)}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsEditingResume(!isEditingResume)}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingResume ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
        {isEditingAnySection && (
          <div className="fixed bottom-0 left-0 p-4 bg-white shadow-lg">
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default JobPortalProfilePage;
