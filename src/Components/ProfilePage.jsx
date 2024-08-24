import React, { useState } from "react";

const JobPortalProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Smith",
    title: "Full Stack Developer",
    location: "Bay Area, San Francisco, CA",
    email: "example@example.com",
    phone: "(097) 234-5678",
    experience: [
      { company: "XYZ Corp", role: "Frontend Developer", duration: "2 years" },
      { company: "ABC Inc.", role: "Backend Developer", duration: "3 years" },
    ],
    education: ["B.S. in Computer Science"],
    certifications: ["Certified Full Stack Developer"],
    skills: ["JavaScript", "React", "Node.js", "Python"],
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingCertifications, setIsEditingCertifications] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);

  const [newEducation, setNewEducation] = useState("");
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
    if (newEducation.trim()) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        education: [...prevProfile.education, newEducation],
      }));
      setNewEducation("");
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

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Profile Summary Section */}
          <div className="lg:w-1/3 mb-4">
            <div className="card bg-white p-6 text-center shadow-md mb-4 relative">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-full w-36 h-36 mx-auto"
              />
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
                  {index < 4 && <hr />}
                </React.Fragment>
              ))}
            </div>

            {/* Experience Section */}
            <div className="card bg-white p-6 shadow-md mb-4 relative">
              <h3 className="font-bold text-gray-700 mb-4">Experience</h3>
              {profile.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-700 font-semibold">{exp.company}</p>
                    <p className="text-gray-500">{exp.role}</p>
                    <p className="text-gray-500">{exp.duration}</p>
                  </div>
                  {isEditingExperience && (
                    <span
                      onClick={() => removeExperience(index)}
                      className="text-red-500 cursor-pointer text-lg"
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))}
              {isEditingExperience && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        company: e.target.value,
                      })
                    }
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        role: e.target.value,
                      })
                    }
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Role"
                  />
                  <input
                    type="text"
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        duration: e.target.value,
                      })
                    }
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Duration"
                  />
                  <button
                    onClick={addExperience}
                    className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                  >
                    Add Experience
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsEditingExperience(!isEditingExperience)}
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
                  className="mb-4 flex justify-between items-center"
                >
                  <p className="text-gray-700">{edu}</p>
                  {isEditingEducation && (
                    <span
                      onClick={() => removeEducation(index)}
                      className="text-red-500 cursor-pointer text-lg"
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))}
              {isEditingEducation && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={newEducation}
                    onChange={(e) => setNewEducation(e.target.value)}
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Add Education"
                  />
                  <button
                    onClick={addEducation}
                    className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                  >
                    Add Education
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsEditingEducation(!isEditingEducation)}
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
                  className="mb-4 flex justify-between items-center"
                >
                  <p className="text-gray-700">{cert}</p>
                  {isEditingCertifications && (
                    <span
                      onClick={() => removeCertification(index)}
                      className="text-red-500 cursor-pointer text-lg"
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))}
              {isEditingCertifications && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Add Certification"
                  />
                  <button
                    onClick={addCertification}
                    className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                  >
                    Add Certification
                  </button>
                </div>
              )}
              <button
                onClick={() =>
                  setIsEditingCertifications(!isEditingCertifications)
                }
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
                  className="mb-4 flex justify-between items-center"
                >
                  <p className="text-gray-700">{skill}</p>
                  {isEditingSkills && (
                    <span
                      onClick={() => removeSkill(index)}
                      className="text-red-500 cursor-pointer text-lg"
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))}
              {isEditingSkills && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="w-full text-gray-500 mb-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Add Skill"
                  />
                  <button
                    onClick={addSkill}
                    className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                  >
                    Add Skill
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsEditingSkills(!isEditingSkills)}
                className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white py-1 px-2 rounded"
              >
                {isEditingSkills ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalProfilePage;
