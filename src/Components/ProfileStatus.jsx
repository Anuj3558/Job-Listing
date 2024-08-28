import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useProfile } from "../context/ProfileContext";
// import { AuthContext } from "../utils/context";

const ProfileStatus = ({ element: Component }) => {
    const {status,userType}=useProfile();
    console.log("status"+status)
  const loginCookie =status

  return loginCookie=="Pending" ? Component : <Navigate to="/" />;
};

export default ProfileStatus;
