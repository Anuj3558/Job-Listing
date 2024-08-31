import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from "js-cookie";
import { message } from 'antd';

const CompanyLogin = () => {
  const [companyCode, setCompanyCode] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCompanyCode(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const uid = Cookie.get("_id");
    const companyCode1 = companyCode;

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login-to-company`, {
        uid,
        companyCode1
      });
      message.success('Successfully logged into the company');
      window.location.reload();
      navigate(`/dashboard`);
     
  

    } catch (error) {
      console.error('Error logging into company:', error);
      message.error('An error occurred while logging into the company. Please try again later.');
    }
  };

  return (
    <div className="logintocompany min-h-[100vh] align-middle justify-center items-center pt-72">
      <section className="max-w-md mx-auto p-6 bg-white shadow-md p-3 -md">
        <h3 className="text-lg font-semibold mb-4">Company Login</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyCode" className="block text-sm font-medium text-gray-700">Enter Company Code</label>
            <input
              type="text"
              id="companyCode"
              name="companyCode"
              value={companyCode}
              onChange={handleInputChange}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 p-3 -md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-indigo-600 text-white font-medium p-3 -md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
      </section>
    </div>
  );
};

export default CompanyLogin;
