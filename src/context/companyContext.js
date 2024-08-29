import React, { createContext, useContext, useState } from "react";

// Create a Context for the company data
const CompanyContext = createContext();

// Create a Provider component
export const CompanyProvider = ({ children }) => {
  const [Companyname, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [Companyemail, setCompnayEmail] = useState('');
  const [logoUrl, setLogoUrl] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [owner, setOwner] = useState('');

  const updateCompanyDetails = (newDetails) => {
    if (newDetails.name !== undefined) setCompanyName(newDetails.name);
    if (newDetails.address !== undefined) setAddress(newDetails.address);
    if (newDetails.email !== undefined) setCompnayEmail(newDetails.email);
    if (newDetails.logoUrl !== undefined) setLogoUrl(newDetails.logoUrl);
    if (newDetails.admins !== undefined) setAdmins(newDetails.admins);
    if (newDetails.owner !== undefined) setOwner(newDetails.owner);
  };

  return (
    <CompanyContext.Provider value={{ Companyname, address, Companyemail, logoUrl, admins, owner, setCompanyName,setLogoUrl,setCompnayEmail,setAdmins,setOwner,setAddress }}>
      {children}
    </CompanyContext.Provider>
  );
};

// Create a custom hook to use the CompanyContext
export const useCompany = () => useContext(CompanyContext);
