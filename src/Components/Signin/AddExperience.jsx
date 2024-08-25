import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

const AddExperience = () => {
  const { experiences, setExperiences } = useProfile();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [companySearch, setCompanySearch] = useState("");
  const [roleSearch, setRoleSearch] = useState("");
  const navigate = useNavigate();

  

  // Dummy data for companies and roles
  const companies = ["Company A", "Company B", "Company C"];
  const roles = ["Role X", "Role Y", "Role Z"];

  // Filtered lists based on search input
  const filteredCompanies = companies.filter((c) =>
    c.toLowerCase().includes(companySearch.toLowerCase())
  );

  const filteredRoles = roles.filter((r) =>
    r.toLowerCase().includes(roleSearch.toLowerCase())
  );

  // Handle input changes for company and role
  const handleCompanyChange = (e) => {
    setCompanySearch(e.target.value);
    setShowCompanyDropdown(true);
  };

  const handleRoleChange = (e) => {
    setRoleSearch(e.target.value);
    setShowRoleDropdown(true);
  };

  const handleCompanySelect = (selectedCompany) => {
    setCompany(selectedCompany);
    setCompanySearch(selectedCompany);
    setShowCompanyDropdown(false);
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setRoleSearch(selectedRole);
    setShowRoleDropdown(false);
  };

  // Add experience to the list
  const handleAddExperience = () => {
    const finalCompany = company || companySearch;
    const finalRole = role || roleSearch;

    if (finalCompany && finalRole && duration) {
      setExperiences((prevExperiences) => [
        { company: finalCompany, role: finalRole, duration },
        ...prevExperiences,
      ]);
      // Reset form fields
      setCompany("");
      setRole("");
      setDuration("");
      setCompanySearch("");
      setRoleSearch("");
      setShowCompanyDropdown(false);
      setShowRoleDropdown(false);
    }
  };

  // Save and continue to the next page
  const handleSaveAndContinue = () => {
    console.log("Experience:", experiences);
    navigate("/add-skills"); // Or wherever you want to navigate
  };

  return (
    <div className="p-6 flex flex-col items-center w-full min-h-screen pt-32 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Add Your Experience</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto flex p-12 flex-col lg:flex-row">
        {/* Input Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-4">Add Experience</h2>

          {/* Company Dropdown */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={companySearch}
              onChange={handleCompanyChange}
              placeholder="Search for a company"
              className="p-2 border border-gray-300 rounded w-full"
            />
            {showCompanyDropdown && companySearch && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto">
                {filteredCompanies.map((company, index) => (
                  <li
                    key={index}
                    onClick={() => handleCompanySelect(company)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {company}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Role Dropdown */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={roleSearch}
              onChange={handleRoleChange}
              placeholder="Search for a role"
              className="p-2 border border-gray-300 rounded w-full"
            />
            {showRoleDropdown && roleSearch && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto">
                {filteredRoles.map((role, index) => (
                  <li
                    key={index}
                    onClick={() => handleRoleSelect(role)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />

          <button
            onClick={handleAddExperience}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 w-full"
          >
            Add Experience
          </button>
          <button
            onClick={handleSaveAndContinue}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full"
          >
            Continue
          </button>
        </div>

        {/* Experience List Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Experience List</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md w-full">
            <ul className="divide-y divide-gray-200">
              {experiences.map(
                (exp, index) =>
                  exp.company &&
                  exp.role && (
                    <li
                      key={index}
                      className={`border-t ${
                        index === 0 ? "border-t-0" : "border-gray-200"
                      } p-4`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {exp.company}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {exp.role}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                          Duration:{" "}
                          <span className="text-gray-600">{exp.duration}</span>
                        </p>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
