import React from "react";
import { useLocation } from "react-router-dom";

const AppWrapper = () => {
  const location = useLocation();
  console.log(location.pathname.slice(1, location.pathname.length));

  return null; // This component doesn't render anything itself
};

export default AppWrapper;