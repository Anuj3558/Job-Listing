import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaBuilding } from "react-icons/fa"; // Import icons
import { useProfile } from "../../context/ProfileContext.js"; // Import the ProfileContext

const options = [
  {
    name: "Employee",
    icon: <FaUserAlt size={32} />,
    link: "/signup/cities",
    type: "employee",
  },
  {
    name: "Company",
    icon: <FaBuilding size={32} />,
    link: "/signup/company-details", // Change the link to the company details form
    type: "company",
  },
];

const ContinueAs = () => {
  const navigate = useNavigate();
  const { setUserType } = useProfile(); // Get the setUserType function from ProfileContext

  const handleOptionClick = (link, type) => {
    setUserType(type); // Set the userType based on the option clicked
    navigate(link); // Navigate to the specified link
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-16 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8 text-center">Continue as</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
        {options.map((option) => (
          <article
            key={option.name}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center"
          >
            <div
              onClick={() => handleOptionClick(option.link, option.type)}
              className="single-fcat text-center bg-white shadow-lg w-full h-48 flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
            >
              <div className="mb-4 text-blue-500">{option.icon}</div>
              <p className="mt-4 text-lg font-semibold">{option.name}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContinueAs;
