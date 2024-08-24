import React, { useState } from "react";

const LanguageSelector = ({ language, onSelect }) => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages((prevState) => !prevState);
  };

  const handleSelectLanguage = (selectedLanguage) => {
    onSelect(selectedLanguage); // Update the selected language
    setShowLanguages(false); // Hide the dropdown
  };

  return (
    <div className="relative inline-block pb-2 text-left">
      <button
        onClick={toggleLanguages}
        className="bg-blue-500 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {language || "Select Language"}{" "}
        {/* Display the selected language or default text */}
      </button>
      {showLanguages && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
          <ul className="py-2">
            <li
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectLanguage("cpp")}
            >
              Cpp
            </li>
            <li
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectLanguage("java")}
            >
              Java
            </li>
            <li
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectLanguage("python")}
            >
              Python
            </li>
            <li
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectLanguage("javascript")}
            >
              JavaScript
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
