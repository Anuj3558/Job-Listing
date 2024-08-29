import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaBuilding } from "react-icons/fa"; // Import icons
import { useProfile } from "../../context/ProfileContext.js"; // Import the ProfileContext
import ContinueAs from "./SelectType.jsx";
import CitiesPage from "./CitiesPage.jsx";
import UploadResume from "./UploadResume.jsx";
import AddEducation from "./AddEducation.jsx";
import AddSkills from "./AddSkills.jsx";
import YourExperiences from "./YourExperiences.jsx";
import AddExperience from "./AddExperience.jsx";
import CompanyDetailsForm from "./CompanyDetailsForm.jsx";
import CompanyOptions from "./CompanyOptions.jsx";
import CompanyLogin from "./LoginTOCompant.jsx";

const options = [
  {
    name: "Employee",
    icon: <FaUserAlt size={32} />,
    link: "/cities",
    type: "employee",
  },
  {
    name: "Company",
    icon: <FaBuilding size={32} />,
    link: "/company-details", // Change the link to the company details form
    type: "company",
  },
];

const ComplteProfile = () => {
  const navigate = useNavigate();
  const { setParser, parser, userType, setUserType } = useProfile(); // Get the setUserType function from ProfileContext

  const handleOptionClick = (link, type) => {
    setParser(type); // Set the userType based on the option clicked
    console.log(parser);
    // Navigate to the specified link
  };

  const renderSection = () => {
    switch (parser) {
      case "employee":
        return (
          <CitiesPage />
        );
      case "resume":
        return (
          <UploadResume />
        );
      case "expertise":
        return (
          <YourExperiences />
        );
        case "company":
          return(
              <CompanyOptions />
          );
          case "createCompany":
            return(
              <CompanyDetailsForm />
            );
            case "LoginToCompany":
              return(
                <CompanyLogin />
              );
      case "education":
        return (
          <AddEducation />
        );
      case "fresher":
        return (
          <AddSkills />
        )
        case "Experience":
        return (
          <AddExperience />
        )
        case "Education":
        return (
          <AddEducation />
        )
      default:
        return (
          <ContinueAs />
        );
    }
  };

  return <section>{renderSection()}</section>;
};

export default ComplteProfile;
