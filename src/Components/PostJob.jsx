import React, { useState } from "react";
import { FaDatabase, FaMapMarkerAlt } from "react-icons/fa";

const PostJob = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    whoWeAreLookingFor: "",
    experienceRequirements: [],
    jobFeatures: [],
    educationRequirements: [],
  });

  const [editMode, setEditMode] = useState({
    general: false,
    whoWeAreLookingFor: false,
    experienceRequirements: false,
    jobFeatures: false,
    educationRequirements: false,
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
    setHasUnsavedChanges(true);
  };

  const handleArrayChange = (key, index, value) => {
    const newArray = [...jobDetails[key]];
    newArray[index] = value;
    setJobDetails({ ...jobDetails, [key]: newArray });
    setHasUnsavedChanges(true);
  };

  const handleAddToArray = (key) => {
    setJobDetails({ ...jobDetails, [key]: [...jobDetails[key], ""] });
    setHasUnsavedChanges(true);
  };

  const handleRemoveFromArray = (key, index) => {
    const newArray = jobDetails[key].filter((_, i) => i !== index);
    setJobDetails({ ...jobDetails, [key]: newArray });
    setHasUnsavedChanges(true);
  };

  const handleSave = (section) => {
    // Implement save functionality here (e.g., API call)
    setEditMode({ ...editMode, [section]: false });
    setHasUnsavedChanges(false);
  };

  const handleFinalSave = () => {
    // Implement the final save logic here, such as making an API call to save all changes
    console.log("Saving all changes...", jobDetails);
    setHasUnsavedChanges(false);
    // Reset edit modes
    setEditMode({
      general: false,
      whoWeAreLookingFor: false,
      experienceRequirements: false,
      jobFeatures: false,
      educationRequirements: false,
    });
  };

  return (
    <div className="max-h-[80vh]">
      <h1 className="poppint poppins-bold text-2xl">Post a new job</h1>
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
                <form>
                  {/* General Info */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {editMode.general ? (
                        <>
                          <input
                            type="text"
                            name="title"
                            value={jobDetails.title}
                            onChange={handleChange}
                            placeholder="Job Title"
                            className="text-2xl font-bold border p-2 w-full"
                          />
                          <input
                            type="text"
                            name="company"
                            value={jobDetails.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="text-lg text-gray-500 border p-2 w-full mt-2"
                          />
                        </>
                      ) : (
                        <>
                          <h4 className="text-2xl font-bold">
                            {jobDetails.title || "Job Title"}
                          </h4>
                          <h6 className="text-lg text-gray-500">
                            {jobDetails.company || "Company Name"}
                          </h6>
                        </>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      {editMode.general ? (
                        <button
                          type="button"
                          onClick={() => handleSave("general")}
                          className="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
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
                      placeholder="Job Description"
                      className="mt-4 text-gray-700 border p-2 w-full"
                    />
                  ) : (
                    <p className="mt-4 text-gray-700">
                      {jobDetails.description || "Job Description"}
                    </p>
                  )}
                  <h5 className="mt-4 font-bold">Job Nature: Full time</h5>
                  {editMode.general ? (
                    <>
                      <input
                        type="text"
                        name="location"
                        value={jobDetails.location}
                        onChange={handleChange}
                        placeholder="Location"
                        className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                      />
                      <input
                        type="text"
                        name="salary"
                        value={jobDetails.salary}
                        onChange={handleChange}
                        placeholder="Salary"
                        className="mt-2 flex items-center text-gray-600 border p-2 w-full"
                      />
                    </>
                  ) : (
                    <>
                      <p className="mt-2 flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" />{" "}
                        {jobDetails.location || "Location"}
                      </p>
                      <p className="mt-2 flex items-center text-gray-600">
                        <FaDatabase className="mr-2" />{" "}
                        {jobDetails.salary || "Salary"}
                      </p>
                    </>
                  )}
                </form>
              </div>
            </div>

            {/* Whom We Are Looking For */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Whom We Are Looking For
              </h4>
              <form>
                {editMode.whoWeAreLookingFor ? (
                  <>
                    <textarea
                      name="whoWeAreLookingFor"
                      value={jobDetails.whoWeAreLookingFor}
                      onChange={handleChange}
                      placeholder="Description of whom we are looking for"
                      className="text-gray-700 border p-2 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => handleSave("whoWeAreLookingFor")}
                      className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700 mb-4">
                      {jobDetails.whoWeAreLookingFor ||
                        "Description of whom we are looking for"}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setEditMode({ ...editMode, whoWeAreLookingFor: true })
                      }
                      className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600"
                    >
                      Edit
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Experience Requirements */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">
                Experience Requirements
              </h4>
              <form>
                {editMode.experienceRequirements ? (
                  <>
                    {jobDetails.experienceRequirements.map((item, index) => (
                      <div key={index} className="mb-2">
                        <textarea
                          value={item}
                          onChange={(e) =>
                            handleArrayChange(
                              "experienceRequirements",
                              index,
                              e.target.value
                            )
                          }
                          placeholder={`Requirement ${index + 1}`}
                          className="text-gray-700 border p-2 w-full"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromArray(
                              "experienceRequirements",
                              index
                            )
                          }
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddToArray("experienceRequirements")}
                      className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
                    >
                      Add Requirement
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSave("experienceRequirements")}
                      className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <ul className="list-disc ml-6 text-gray-700">
                      {jobDetails.experienceRequirements.length ? (
                        jobDetails.experienceRequirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No experience requirements added</li>
                      )}
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        setEditMode({
                          ...editMode,
                          experienceRequirements: true,
                        })
                      }
                      className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                    >
                      Edit
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Job Features */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">Job Features</h4>
              <form>
                {editMode.jobFeatures ? (
                  <>
                    {jobDetails.jobFeatures.map((item, index) => (
                      <div key={index} className="mb-2">
                        <textarea
                          value={item}
                          onChange={(e) =>
                            handleArrayChange("jobFeatures", index, e.target.value)
                          }
                          placeholder={`Feature ${index + 1}`}
                          className="text-gray-700 border p-2 w-full"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromArray("jobFeatures", index)
                          }
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddToArray("jobFeatures")}
                      className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
                    >
                      Add Feature
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSave("jobFeatures")}
                      className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <ul className="list-disc ml-6 text-gray-700">
                      {jobDetails.jobFeatures.length ? (
                        jobDetails.jobFeatures.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No job features added</li>
                      )}
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        setEditMode({
                          ...editMode,
                          jobFeatures: true,
                        })
                      }
                      className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                    >
                      Edit
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Education Requirements */}
            <div className="bg-white p-6 shadow-md mb-6">
              <h4 className="text-2xl font-bold mb-4">Education Requirements</h4>
              <form>
                {editMode.educationRequirements ? (
                  <>
                    {jobDetails.educationRequirements.map((item, index) => (
                      <div key={index} className="mb-2">
                        <textarea
                          value={item}
                          onChange={(e) =>
                            handleArrayChange("educationRequirements", index, e.target.value)
                          }
                          placeholder={`Requirement ${index + 1}`}
                          className="text-gray-700 border p-2 w-full"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromArray("educationRequirements", index)
                          }
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddToArray("educationRequirements")}
                      className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
                    >
                      Add Requirement
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSave("educationRequirements")}
                      className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <ul className="list-disc ml-6 text-gray-700">
                      {jobDetails.educationRequirements.length ? (
                        jobDetails.educationRequirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>No education requirements added</li>
                      )}
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        setEditMode({
                          ...editMode,
                          educationRequirements: true,
                        })
                      }
                      className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 mt-2"
                    >
                      Edit
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Final Save Button */}
            {hasUnsavedChanges && (
              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={handleFinalSave}
                  className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600"
                >
                  Save All Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
