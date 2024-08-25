import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
// import { AuthContext } from "../utils/context";

const ProtectedRoute = ({ element: Component }) => {
  const loginCookie = Cookies.get("_id");

  

//   useEffect(() => {
//     handleProtected();
//   }, []);

  return loginCookie ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
