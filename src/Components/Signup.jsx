import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Signup = () => {
  const [userType, setUserType] = useState("candidate");

  return (
    <section className="py-40">
      <div className="h-full flex justify-center items-center ">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-10/12 xl:w-8/12">
          
          {/* Form Section */}
          <div className="w-full bg-white shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

            {/* Social Signup Buttons */}
            <div className="flex justify-center mb-6">
              <button className="mx-2 p-2 bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition">
                <FaFacebookF />
              </button>
              <button className="mx-2 p-2 bg-red-600 text-white shadow-lg hover:bg-red-700 transition">
                <FaGoogle />
              </button>
              <button className="mx-2 p-2 bg-gray-800 text-white shadow-lg hover:bg-gray-900 transition">
                <FaLinkedinIn />
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Signup Form */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your name"
                />
              </div>
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
                  className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
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
                  className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Sign Up as:
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`w-full py-2 ${userType === "candidate" ? "bg-[#49e4fa] text-white" : "bg-gray-200 text-gray-700"} transition`}
                    onClick={() => setUserType("candidate")}
                  >
                    Candidate
                  </button>
                  <button
                    type="button"
                    className={`w-full py-2 ${userType === "company" ? "bg-[#49e4fa] text-white" : "bg-gray-200 text-gray-700"} transition`}
                    onClick={() => setUserType("company")}
                  >
                    Company
                  </button>
                </div>
              </div>

              {/* Candidate/Company Specific Fields */}
              {userType === "candidate" ? (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="resume"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="resume"
                      className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="skills"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your skills"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="companyName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="companySize"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Company Size
                    </label>
                    <input
                      type="number"
                      id="companySize"
                      className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter number of employees"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="industry"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Industry
                    </label>
                    <input
                      type="text"
                      id="industry"
                      className="w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter industry type"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-[#49e4fa] text-white py-2 shadow hover:bg-[#3bb2c2] transition"
              >
                Sign Up
              </button>
              <p className="mt-4 text-center text-sm text-gray-700">
                Already have an account?{" "}
                <a
                  href="#!"
                  className="text-[#49e4fa] hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
