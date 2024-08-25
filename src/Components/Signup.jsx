import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "../FirebaseAuth/firebaseconfig"; // Adjust the path
import axios from "axios";
import { handleError, handleSuccess } from "./Home/utils/utils";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import the js-cookie library

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const Navigate = useNavigate();

  const handleEmailSignup = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      handleError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      handleError("Password must be greater than 6 characters.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      const uid = userCredential.user.uid;
      const response = await axios.post("http://localhost:8080/register", {
        email,
        uid,
        name,
      });

      // Set cookie with the _id as uid
      Cookies.set("_id", uid);

      handleSuccess("User Registered Successfully");
      Navigate("/continueas");
      window.location.reload();
    } catch (error) {
      console.error("Error signing up with email and password:", error.message);
      if (error.response && error.response.status === 500) {
        handleError("Internal Server Error");
      } else if (
        error.message === "Firebase: Error (auth/email-already-in-use)."
      ) {
        handleError("Email is already registered");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed up with Google:", result.user);
      const name = result.user.displayName;
      const email = result.user.email;
      const uid = result.user.uid;
      const profile = result.user.photoURL;
      const user = await axios.post("http://localhost:8080/register/google", {
        name,
        email,
        uid,
        profile,
      });

      // Set cookie with the _id as uid
      Cookies.set("_id", uid);

      handleSuccess("User Registered Successfully with Google");
      Navigate("/continueas");
      window.location.reload();
    } catch (error) {
      console.error("Error signing up with Google:", error.message);

      if (error.message === "Firebase: Error (auth/cancelled-popup-request).") {
        handleError("Network Error");
      } else if (
        error.message === "Firebase: Error (auth/cancelled-popup-request).."
      ) {
        handleError("Network Error");
      } else if (error.message === "Firebase: Error (auth/internal-error).") {
        handleError("Firebase Authentication Error");
      } else if ((error.message = " Request failed with status code 400")) {
        handleError("");
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-white shadow-md p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Create Your Account
          </h2>

          {/* Social Signup Buttons */}
          <div className="flex justify-center mb-6">
            <button
              className="flex items-center justify-center w-full max-w-xs py-3 px-4 bg-red-600 text-white shadow hover:bg-red-700 transition"
              onClick={handleGoogleSignup}
            >
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleEmailSignup}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#49e4fa] text-white py-3 shadow hover:bg-[#3bb2c2] transition"
            >
              Create Account
            </button>
            <p className="mt-6 text-center text-sm text-gray-700">
              Already have an account?{" "}
              <a href="#!" className="text-[#49e4fa] hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
