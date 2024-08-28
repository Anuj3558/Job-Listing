import React, { useEffect } from "react";
import { useProfile } from "../../context/ProfileContext.js"; // Import the useProfile hook
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faIndustry,
  faCog,
} from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons

// Initial list of cities with FontAwesome icons
const initialCities = [
  { name: "Mumbai", icon: faBuilding },
  { name: "Pune", icon: faIndustry },
  { name: "Bangalore", icon: faCog },
  { name: "Delhi", icon: faBuilding },
  { name: "Hyderabad", icon: faIndustry },
  { name: "Noida", icon: faCog },
];

const CitiesPage = () => {
  const { setParser,selectedCity, setSelectedCity, newCity, setNewCity } = useProfile(); // Destructure the states and setters
  const navigate = useNavigate();


  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setNewCity(cityName); // Set input value to the selected city's name
  };

  const handleInputChange = (e) => {
    setNewCity(e.target.value);
    setSelectedCity(""); // Clear the selected city when the user starts typing
  };

  const handleContinue = () => {
    const cityToUse = selectedCity || newCity;
    if (cityToUse) {
      console.log(`Selected city: ${cityToUse}`);
      setParser("resume"); // Navigate to the UploadResume page
    } else {
      alert("Please select or enter a city.");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center w-full max-w-6xl mt-8 md:mt-12">
        {initialCities.map((city, index) => (
          <article
            key={index}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center"
          >
            <div
              onClick={() => handleCityClick(city.name)}
              className={`text-center bg-white shadow-lg w-full h-48 flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl ${
                selectedCity === city.name ? "bg-blue-100" : ""
              }`}
            >
              <div className="mb-4 text-blue-500 text-4xl">
                <FontAwesomeIcon icon={city.icon} />
              </div>
              <p className="mt-4 text-lg font-semibold">{city.name}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center">
        <input
          type="text"
          required="reqired"
          value={newCity}
          onChange={handleInputChange}
          placeholder="Enter your city"
          className="p-2 border border-gray-300 rounded mb-4 w-full "
        />
        <button
          onClick={handleContinue}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CitiesPage;
