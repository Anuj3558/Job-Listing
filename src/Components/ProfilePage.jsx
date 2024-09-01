import React, { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import Cookies from "js-cookie";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    resume: null, // State for resume file
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
    profileImg
  } = useProfile();

  useEffect(() => {
    setProfile({
      name: name,
      title: "",
      location: selectedCity,
      email: email,
      phone: "",
      experience: experiences,
      education: education,
      certifications: [],
      skills: skills,
      resume: resume,
    });
  }, [name, selectedCity, email, experiences, education, skills, resume]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingCertifications, setIsEditingCertifications] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingResume, setIsEditingResume] = useState(false);
  
  const isEditingAnySection =
    isEditingProfile ||
    isEditingExperience ||
    isEditingEducation ||
    isEditingCertifications ||
    isEditingSkills ||
    isEditingResume;

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

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prevProfile) => ({ ...prevProfile, resume: file }));
    }
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

  const saveChanges = () => {
    // Implement the save logic here
    console.log("Changes saved:", profile);

    // Reset edit states after saving
    setIsEditingProfile(false);
    setIsEditingExperience(false);
    setIsEditingEducation(false);
    setIsEditingCertifications(false);
    setIsEditingSkills(false);
    setIsEditingResume(false);
  };

  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationControls = useAnimation();

  useEffect(() => {
    if (profileInView) {
      animationControls.start({ opacity: 1, y: 0 });
    } else {
      animationControls.start({ opacity: 0, y: 50 });
    }
  }, [profileInView, animationControls]);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Profile Summary Section */}
          <motion.div
            className="lg:w-1/3 mb-4"
            ref={profileRef}
            animate={animationControls}
            transition={{ duration: 0.5 }}
          >
            <div className="card bg-white p-6 text-center shadow-md mb-4 relative">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile"
                  className="rounded-full w-36 h-36 text-7xl mx-auto"
                />
              ) : (
                <button className="w-36 h-36 text-7xl mr-6 bg-purple-400 rounded-full">
                  <p className="text-white">{name.charAt(0)}</p>
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
                onClick={() => setIsEditingProfile(!isEditingProfile)}
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
          </motion.div>

          {/* Profile Details Section */}
          <div className="lg:w-2/3 ml-6">
            <div className="card bg-white p-6 shadow-md mb-4">
              {[
                { label: "Full Name", field: "name", value: profile.name },
                { label: "Title", field: "title", value: profile.title },
                { label: "Location", field: "location", value: profile.location },
                { label: "Email", field: "email", value: profile.email },
                { label: "Phone", field: "phone", value: profile.phone },
              ].map(({ label, field, value }) => (
                <div key={field} className="mb-4">
                  <h4 className="font-medium text-gray-700">{label}</h4>
                  {isEditingProfile && field !== "email" ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full border-b-2 border-gray-300 focus:outline-none"
                    />
                  ) : (
                    <p className="text-gray-500">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">Experience</h3>
              {isEditingExperience ? (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newExperience.role}
                    onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={newExperience.duration}
                    onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-4"
                  />
                  <button
                    onClick={addExperience}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Add Experience
                  </button>
                </div>
              ) : null}
              <ul>
                {profile.experience.map((exp, index) => (
                  <li key={index} className="mb-2">
                    <p><strong>Company:</strong> {exp.company}</p>
                    <p><strong>Role:</strong> {exp.role}</p>
                    <p><strong>Duration:</strong> {exp.duration}</p>
                    {isEditingExperience && (
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {isEditingExperience && (
                <button
                  onClick={() => setIsEditingExperience(false)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-4"
                >
                  Save Experience
                </button>
              )}
              {!isEditingExperience && (
                <button
                  onClick={() => setIsEditingExperience(true)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit Experience
                </button>
              )}
            </div>

            {/* Education Section */}
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">Education</h3>
              {isEditingEducation ? (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Course"
                    value={newEducation.course}
                    onChange={(e) => setNewEducation({ ...newEducation, course: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Institute"
                    value={newEducation.institute}
                    onChange={(e) => setNewEducation({ ...newEducation, institute: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Year of Completion"
                    value={newEducation.yearOfCompletion}
                    onChange={(e) => setNewEducation({ ...newEducation, yearOfCompletion: e.target.value })}
                    className="w-full border-b-2 border-gray-300 mb-4"
                  />
                  <button
                    onClick={addEducation}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Add Education
                  </button>
                </div>
              ) : null}
              <ul>
                {profile.education.map((edu, index) => (
                  <li key={index} className="mb-2">
                    <p><strong>Course:</strong> {edu.course}</p>
                    <p><strong>Institute:</strong> {edu.institute}</p>
                    <p><strong>Year of Completion:</strong> {edu.yearOfCompletion}</p>
                    {isEditingEducation && (
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {isEditingEducation && (
                <button
                  onClick={() => setIsEditingEducation(false)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-4"
                >
                  Save Education
                </button>
              )}
              {!isEditingEducation && (
                <button
                  onClick={() => setIsEditingEducation(true)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit Education
                </button>
              )}
            </div>

            {/* Certifications Section */}
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">Certifications</h3>
              {isEditingCertifications ? (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Certification"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                    className="w-full border-b-2 border-gray-300 mb-4"
                  />
                  <button
                    onClick={addCertification}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Add Certification
                  </button>
                </div>
              ) : null}
              <ul>
                {profile.certifications.map((cert, index) => (
                  <li key={index} className="mb-2">
                    {cert}
                    {isEditingCertifications && (
                      <button
                        onClick={() => removeCertification(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {isEditingCertifications && (
                <button
                  onClick={() => setIsEditingCertifications(false)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-4"
                >
                  Save Certifications
                </button>
              )}
              {!isEditingCertifications && (
                <button
                  onClick={() => setIsEditingCertifications(true)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit Certifications
                </button>
              )}
            </div>

            {/* Skills Section */}
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">Skills</h3>
              {isEditingSkills ? (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="w-full border-b-2 border-gray-300 mb-4"
                  />
                  <button
                    onClick={addSkill}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Add Skill
                  </button>
                </div>
              ) : null}
              <ul>
                {profile.skills.map((skill, index) => (
                  <li key={index} className="mb-2">
                    {skill}
                    {isEditingSkills && (
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {isEditingSkills && (
                <button
                  onClick={() => setIsEditingSkills(false)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-4"
                >
                  Save Skills
                </button>
              )}
              {!isEditingSkills && (
                <button
                  onClick={() => setIsEditingSkills(true)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit Skills
                </button>
              )}
            </div>

            {/* Resume Section */}
            <div className="card bg-white p-6 shadow-md mb-4">
              <h3 className="font-bold text-gray-700 mb-4">Resume</h3>
              {isEditingResume ? (
                <div className="mb-4">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="mb-4"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  {profile.resume ? (
                    <a
                      href={URL.createObjectURL(profile.resume)}
                      download
                      className="text-blue-500 hover:underline"
                    >
                      Download Resume
                    </a>
                  ) : (
                    <p>No resume uploaded</p>
                  )}
                </div>
              )}
              {isEditingResume && (
                <button
                  onClick={() => setIsEditingResume(false)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mt-4"
                >
                  Save Resume
                </button>
              )}
              {!isEditingResume && (
                <button
                  onClick={() => setIsEditingResume(true)}
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                >
                  Edit Resume
                </button>
              )}
            </div>

            {/* Save Changes Button */}
            <div className="text-center mb-4">
              {isEditingAnySection && (
                <button
                  onClick={saveChanges}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Save All Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalProfilePage;
