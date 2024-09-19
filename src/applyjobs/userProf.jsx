import React from "react";
import { useProfile } from "../context/ProfileContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie"
import { message } from "antd";
const UserProfilePage = () => {
    const navigate = useNavigate();
    const {
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
      
    } = useProfile();
    const location = useLocation();
    const jobId = location.pathname.slice(15);
    const Navigate = useNavigate();
    console.log(jobId);
    // Function to handle "Confirm Apply"
    const uid =Cookie.get("_id");
    const handleConfirmApply = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/apply-job`, {
                uid,
                jobId,
            });
            message.success(response.data.message)
            Navigate("/dashboard")
            console.log("Job application successful", response.data.message);
            // Show success message or redirect to another page
        } catch (error) {
            console.error("Error applying for job:", error);
            // Handle the error, show error message
        }
    };

    // Function to navigate to the edit profile page
    const handleEditProfile = () => {
        navigate("/dashboard");
    };

    return (
        <div className="max-w-4xl mx-auto p-8 min-h-screen  pt-[20vh] border-t-4 border-yellow-300">
            <div className="flex items-center space-x-6 mb-12">
                <img
                    className="w-28 h-28 object-cover border-4 border-yellow-300"
                    src={profileImg || "/default-profile.png"}
                    alt={`${name}'s profile`}
                />
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-800">{name}</h2>
                    <p className="text-gray-500">{selectedCity}</p>
                    <p className="text-gray-500">{email}</p>
                    <p className="text-gray-500">{phone}</p>
                </div>
            </div>

            {/* Skills section */}
            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Skills</h3>
                <ul className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <li key={index} className="px-5 py-2 bg-blue-100 text-blue-900 shadow hover:bg-blue-300 transition">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Education section */}
            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className="mb-6">
                        <p className="font-bold text-lg">{edu.course}</p>
                        <p className="text-gray-500">{edu.institute}</p>
                        <p className="text-gray-500">Year of Completion: {edu.yearOfCompletion}</p>
                    </div>
                ))}
            </div>

            {/* Experience section */}
            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Experience</h3>
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-6">
                        <p className="font-bold text-lg">{exp.role}</p>
                        <p className="text-gray-500">{exp.company}</p>
                        <p className="text-gray-500">Duration: {exp.duration}</p>
                    </div>
                ))}
            </div>

            {/* Certifications section */}
            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Certifications</h3>
                <ul className="list-disc list-inside">
                    {certifications.map((cert, index) => (
                        <li key={index} className="text-gray-500">
                            {cert}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center space-x-8">
                {/* Confirm Apply button */}
                <button
                    onClick={handleConfirmApply}
                    className="px-6 py-3 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold transition"
                >
                    Confirm Apply
                </button>

                {/* Edit Profile button */}
                <button
                    onClick={handleEditProfile}
                    className="px-6 py-3 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold transition"
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default UserProfilePage;
