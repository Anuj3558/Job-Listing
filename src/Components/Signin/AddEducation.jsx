import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AddEducation = () => {
  const [course, setCourse] = useState("");
  const [institute, setInstitute] = useState("");
  const [yearOfCompletion, setYearOfCompletion] = useState(new Date());
  const [courseSearch, setCourseSearch] = useState("");
  const [instituteSearch, setInstituteSearch] = useState("");
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showInstituteDropdown, setShowInstituteDropdown] = useState(false);

  const {
    selectedCity,
    name,
    email,
    
    experiences,
    skills,
    education,
    setEducation,
    userType
  } = useProfile();

  const navigate = useNavigate();

  // Dummy data for institutes and courses
  const institutes = ["Institute A", "Institute B", "Institute C"];
  const courses = ["Course X", "Course Y", "Course Z"];

  // Filtered lists based on search input
  const filteredCourses = courses.filter((c) =>
    c.toLowerCase().includes(courseSearch.toLowerCase())
  );

  const filteredInstitutes = institutes.filter((i) =>
    i.toLowerCase().includes(instituteSearch.toLowerCase())
  );

  // Handle changes in input fields
  const handleCourseChange = (e) => {
    setCourseSearch(e.target.value);
    setShowCourseDropdown(true);
  };

  const handleInstituteChange = (e) => {
    setInstituteSearch(e.target.value);
    setShowInstituteDropdown(true);
  };

  const handleCourseSelect = (selectedCourse) => {
    setCourse(selectedCourse);
    setCourseSearch(selectedCourse);
    setShowCourseDropdown(false);
  };

  const handleInstituteSelect = (selectedInstitute) => {
    setInstitute(selectedInstitute);
    setInstituteSearch(selectedInstitute);
    setShowInstituteDropdown(false);
  };

  const handleYearChange = (date) => {
    setYearOfCompletion(date);
  };

  // Add an education entry
  const handleAddEducation = () => {
    if (course && institute && yearOfCompletion) {
      const year = yearOfCompletion.getFullYear().toString();
      setEducation((prevEducation) => [
        ...prevEducation,
        { course, institute, yearOfCompletion: year },
      ]);
      setCourse("");
      setInstitute("");
      setYearOfCompletion(new Date());
      setCourseSearch("");
      setInstituteSearch("");
    }
  };

  // Submit the education list and navigate
  // Submit the education list and navigate
  const   handleSubmit = async () => {
    // Constructing the profile data directly from the latest state values
    const profileData = {
      name: name,
      title: "",
      location: selectedCity,
      email: email,
      phone: "",
      experience: experiences,
      education: education,
      certifications: [""],
      skills: skills,
      
      status: "Completed",
      userType: userType
    };

    console.log("Submitting profile data:", profileData);

    try {
      const URL = `${process.env.REACT_APP_BACKEND_URL}/completeprofile`;
      const response = await axios.put(URL, profileData);
      console.log("Profile submitted successfully:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Error submitting profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="pt-32 flex flex-col items-center w-full min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add Your Education</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto flex p-12 flex-col lg:flex-row">
        {/* Input Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Add Education</h2>

          {/* Course Dropdown */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={courseSearch}
              onChange={handleCourseChange}
              placeholder="Search for a course"
              className="p-2 border border-gray-300 rounded w-full"
            />
            {showCourseDropdown && filteredCourses.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto">
                {filteredCourses.map((course, index) => (
                  <li
                    key={index}
                    onClick={() => handleCourseSelect(course)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Institute Dropdown */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={instituteSearch}
              onChange={handleInstituteChange}
              placeholder="Search for an institute"
              className="p-2 border border-gray-300 rounded w-full"
            />
            {showInstituteDropdown && filteredInstitutes.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto">
                {filteredInstitutes.map((institute, index) => (
                  <li
                    key={index}
                    onClick={() => handleInstituteSelect(institute)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {institute}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Year of Completion DatePicker */}
          <DatePicker
            selected={yearOfCompletion}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />

          <button
            onClick={handleAddEducation}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 w-full"
          >
            Add Education
          </button>
        </div>

        {/* Education List Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Education List</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md w-full">
            <ul className="divide-y divide-gray-200">
              {education.length > 0 ? (
                education.map((item, index) => (
                  <li
                    key={index}
                    className={`border-t ${
                      index === 0 ? "border-t-0" : "border-gray-200"
                    } p-4`}
                  >
                    {item.course} - {item.institute} ({item.yearOfCompletion})
                  </li>
                ))
              ) : (
                <li className="p-4 text-gray-500">
                  No education entries added.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white mt-4 p-2 rounded hover:bg-green-600"
      >
        Complete profile
      </button>
    </div>
  );
};

export default AddEducation;
