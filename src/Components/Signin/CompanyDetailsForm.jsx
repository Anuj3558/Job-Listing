import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const CompanyDetailsForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    email: '',
    logoUrl: null,
    companyCode: '',  // Added companyCode field
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const uid = Cookies.get('_id');
  console.log(uid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('uid', uid); // Append the uid to formData

    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register-company`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="companyform min-h-[100vh]">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white">
        <h3 className="text-lg font-semibold mb-4 text-2xl mt-32">Company Details</h3>

        <div className="mb-4">
          <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">Company Logo</label>
          <input
            type="file"
            id="logoUrl"
            name="logoUrl"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 -md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 -md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 -md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 -md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyCode" className="block text-sm font-medium text-gray-700">Company Code</label>
          <input
            type="text"
            id="companyCode"
            name="companyCode"
            value={formValues.companyCode}
            onChange={handleChange}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 -md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white font-medium -md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyDetailsForm;
