import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaSignInAlt, FaPlusCircle } from 'react-icons/fa'; // Import icons
import { useProfile } from '../../context/ProfileContext';

const CompanyOptions = () => {
  const navigate = useNavigate();
  const { setParser, parser } = useProfile();
  const handleOptionClick = (path) => {
    //navigate(path);
    setParser(path)
    console.log(path)
  };

  return (
   <div className="company min-h-[100vh] items-center pt-72">
     <section className="max-w-2xl mx-auto p-4 my-auto bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-6">Company Options</h3>
      
      <div className="space-y-4">
        {/* Existing Company */}
        <div className="flex items-center p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 cursor-pointer" onClick={() => handleOptionClick('LoginToCompany')}>
          <FaSignInAlt size={32} className="text-indigo-600 mr-4" />
          <div>
            <h4 className="text-lg font-medium">Log in as Existing Company</h4>
            <p className="text-gray-600">Access your existing company account.</p>
          </div>
        </div>
        
        {/* Create New Company */}
        <div className="flex items-center p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 cursor-pointer" onClick={() => handleOptionClick('createCompany')}>
          <FaPlusCircle size={32} className="text-green-600 mr-4" />
          <div>
            <h4 className="text-lg font-medium">Create New Company</h4>
            <p className="text-gray-600">Fill out the details to create a new company account.</p>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default CompanyOptions;
