import React, { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Profile"); // Default value

  return (
    <DashboardContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
