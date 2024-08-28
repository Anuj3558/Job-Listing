import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { login } from "../assets";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../FirebaseAuth/firebaseconfig";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Utility functions for showing success or error messages
const handleSuccess = (message) => toast.success(message);
const handleError = (message) => toast.error(message);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed up with Google:", result.user);
      const { displayName, email, uid, photoURL } = result.user;
      const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register/google`, {
        name: displayName,
        email,
        uid,
        profile: photoURL,
      });

      Cookies.set("_id", uid);
      handleSuccess("User logged in successfully with Google");

      Navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
      handleError("Error signing up with Google");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential?.user?.uid);
      console.log("User signed in with email:", userCredential.user);
      Cookies.set("_id", userCredential?.user?.uid);
      handleSuccess("User logged in successfully with email");
      Navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      console.error("Error signing in with email:", error.message);
      handleError("Error signing in with email");
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-10/12 xl:w-8/12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img
              src={login}
              className="w-3/4 lg:w-full mr-7 object-cover"
              alt="Login Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Login
            </h2>

            {/* Social Login Buttons */}
            <div className="flex justify-center mb-6">
              <button
                className="flex items-center justify-center w-full max-w-xs py-3 px-4 bg-red-600 text-white shadow hover:bg-red-700 transition"
                onClick={handleGoogleSignup}
              >
                <FaGoogle className="mr-2" /> Sign up with Google
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Remember me
                  </span>
                </label>
                <a href="#!" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#49e4fa] text-white py-2 shadow hover:bg-[#3bb2c2] transition"
              >
                Login
              </button>
              <p className="mt-4 text-center text-sm text-gray-700">
                Don't have an account?{" "}
                <a href="#!" className="text-[#49e4fa] hover:underline">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
