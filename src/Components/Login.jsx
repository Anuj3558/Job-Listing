import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { login } from "../assets";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-10/12 xl:w-8/12">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10  lg:mb-0">
            <img
              src={login}
              className="w-3/4 lg:w-full mr-7 object-cover"
              alt="Login Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
            
            {/* Social Login Buttons */}
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

            {/* Login Form */}
            <form>
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
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
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
                <a
                  href="#!"
                  className="text-[#49e4fa] hover:underline"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
