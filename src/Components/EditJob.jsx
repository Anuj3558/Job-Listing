import React, { useState } from "react";
import { FaDatabase, FaMapMarkerAlt } from "react-icons/fa";

const EditJob = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    title: "Creative Art Designer",
    company: "Premium Labels Limited",
    location: "56/8, Panthapath Dhanmondi Dhaka",
    salary: "15k - 25k",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whoWeAreLookingFor:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    experienceRequirements: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    jobFeatures: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    educationRequirements: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  });

  const [editMode, setEditMode] = useState({
    general: false,
    whoWeAreLookingFor: false,
    experienceRequirements: false,
    jobFeatures: false,
    educationRequirements: false,
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleTextArrayChange = (key, index, value) => {
    const newArray = [...jobDetails[key]];
    newArray[index] = value;
    setJobDetails({ ...jobDetails, [key]: newArray });
  };

  const handleSave = (section) => {
    // Implement save functionality here (e.g., API call)
    setEditMode({ ...editMode, [section]: false });
  };

  return (
    <div className="max-h-[80vh]">
      <section className="py-12 w-[100%]">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full lg:w-2/3">
            {/* Job Post */}
            <div className="bg-white p-6 shadow-md flex flex-col lg:flex-row mb-6">
              <div className="lg:w-1/4">
                <img
                  src="img/post.png"
                  alt="Job Image"
                  className="w-full h-auto"
                />
                <ul className="mt-4 flex space-x-2">
                  <li>
                    <a href="#" className="bg-blue-500 text-white px-2 py-1">
                      Art
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-blue-500 text-white px-2 py-1">
                      Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-blue-500 text-white px-2 py-1">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-3/4 lg:pl-6">
                <div className="flex justify-between items-start">
                  <div>
                    {editMode.general ? (
                      <>
                        <input
                          type="text"
                          name="title"
                          value={jobDetails.title}
                          onChange={handleChange}
                          className="text-2xl font-bold border p-2 w-full"
                        />
                        <input
                          type="text"
                          name="company"
                          value={jobDetails.company}
                          onChange={handleChange}
                          className="text-lg text-gray-500 border p-2 w-full mt-2"
                        />
                      </>
                    ) : (
                      <>
                        <h4 className="text-2xl font-bold">
                          <a href="#">{jobDetails.title}</a>
                        </h4>
                        <h6 className="text-lg text-gray-500">
                          {jobDetails.company}
                        </h6>
                      </>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    {editMode.general ? (
                      <button
                        onClick={() => handleSave("general")}
                        className="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          setEditMode({ ...editMode, general: true })
                        }
                        className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                {editMode.general ? (
                  <textarea
                    name="description"
                    value={jobDetails.description}
                    onChange={handleChange}
                    className="mt-4 text-gray-700 border p-2 w-full"
                  />
                ) : (
                  <p className="mt-4 text-gray-700">{jobDetails.description}</p>
                )}
                <h5 className="mt-4 font-bold">Job Nature: Full time</h5>
                {editMode.general ? (
                  <>
                    <input
                      type="text"
                      name="location"
                      value={jobDetails.location}
                      onChange={handleChange}
                      className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                    />
                    <input
                      type="text"
                      name="salary"
                      value={jobDetails.salary}
                      onChange={handleChange}
                      className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-2 flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" /> {jobDetails.location}
                    </p>
                    <p className="mt-2 flex items-center text-gray-600">
                      <FaDatabase className="mr-2" /> {jobDetails.salary}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Whom We Are Looking For */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Whom we are looking for
              </h4>
              {editMode.whoWeAreLookingFor ? (
                <>
                  <textarea
                    name="whoWeAreLookingFor"
                    value={jobDetails.whoWeAreLookingFor}
                    onChange={(e) => handleChange(e)}
                    className="text-gray-700 border p-2 w-full"
                  />
                  <button
                    onClick={() => handleSave("whoWeAreLookingFor")}
                    className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-4">
                    {jobDetails.whoWeAreLookingFor}
                  </p>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, whoWeAreLookingFor: true })
                    }
                    className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>

            {/* Experience Requirements */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Experience Requirements
              </h4>
              {editMode.experienceRequirements ? (
                <>
                  {jobDetails.experienceRequirements.map((item, index) => (
                    <div key={index} className="mb-2">
                      <textarea
                        value={item}
                        onChange={(e) =>
                          handleTextArrayChange(
                            "experienceRequirements",
                            index,
                            e.target.value
                          )
                        }
                        className="text-gray-700 border p-2 w-full"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => handleSave("experienceRequirements")}
                    className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <ul className="space-y-4">
                    {jobDetails.experienceRequirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <img
                          src="img/pages/list.jpg"
                          alt="List Icon"
                          className="w-6 h-6 mr-2"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, experienceRequirements: true })
                    }
                    className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>

            {/* Job Features */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Job Features & Overviews
              </h4>
              {editMode.jobFeatures ? (
                <>
                  {jobDetails.jobFeatures.map((item, index) => (
                    <div key={index} className="mb-2">
                      <textarea
                        value={item}
                        onChange={(e) =>
                          handleTextArrayChange(
                            "jobFeatures",
                            index,
                            e.target.value
                          )
                        }
                        className="text-gray-700 border p-2 w-full"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => handleSave("jobFeatures")}
                    className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <ul className="space-y-4">
                    {jobDetails.jobFeatures.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <img
                          src="img/pages/list.jpg"
                          alt="List Icon"
                          className="w-6 h-6 mr-2"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, jobFeatures: true })
                    }
                    className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>

            {/* Education Requirements */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Education Requirements
              </h4>
              {editMode.educationRequirements ? (
                <>
                  {jobDetails.educationRequirements.map((item, index) => (
                    <div key={index} className="mb-2">
                      <textarea
                        value={item}
                        onChange={(e) =>
                          handleTextArrayChange(
                            "educationRequirements",
                            index,
                            e.target.value
                          )
                        }
                        className="text-gray-700 border p-2 w-full"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => handleSave("educationRequirements")}
                    className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <ul className="space-y-4">
                    {jobDetails.educationRequirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <img
                          src="img/pages/list.jpg"
                          alt="List Icon"
                          className="w-6 h-6 mr-2"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, educationRequirements: true })
                    }
                    className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditJob;
