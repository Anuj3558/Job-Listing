import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { login, Logo } from "../assets";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Cookies from 'js-cookie';
import { signOut } from "firebase/auth";
import { handleError, handleSuccess } from "./Home/utils/utils";
import { auth } from "../FirebaseAuth/firebaseconfig";
import { useProfile } from "../context/ProfileContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  
  // Corrected the destructuring to match the context provider
  const { setName, email, profile, name, setEmail, setProfile } = useProfile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const GetUserData = async () => {
    const id = Cookies.get("_id");
    if (id) {
      try {
        const response = await axios.post("http://localhost:8080/getdata", { id });
        const userData = response?.data;
        setName(userData[0]?.name);
        setEmail(userData[0]?.email);
        setProfile(userData[0]?.photoUrl);
      } catch (error) {
        console.error(error);
        setEmail(null);
        setName(null);
        setProfile(null);
      }
    } else {
      setEmail(null);
      setName(null);
      setProfile(null);
    }
  };

  const HandleLog = async () => {
    try {
      await signOut(auth);
      logout();
      Cookies.remove("_id");
      setName(null);
      setEmail(null);
      setProfile(null);

      handleSuccess("User Logged out successfully");
    } catch (err) {
      console.error("Error in logging out:", err);
      handleError("Error in logging out");
    }
  };

  useEffect(() => {
    GetUserData();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Cookies.get("_id")]);

  const shouldApplyBackground = ["/signup", "/login", "/dashboard","/add-experience","/continueas","/add-skills","/your-experiences","/upload-resume","/cities","/company-details"].includes(
    location.pathname
  );

  return (
    <header
      className={`left-0 poppins-regular w-full text-white z-50 ease-in-out duration-500 transform ${
        isScrolled || shouldApplyBackground
          ? "fixed bg-[#000000CC] text-white shadow-md"
          : "text-[#230d0d] absolute translate-y"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div id="logo" className="md:ml-60">
            <Link to="/">
              <img src={Logo} alt="Logo" title="Home" className="w-auto" />
            </Link>
          </div>
          <nav id="nav-menu-container" className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li className="text-inherit font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-purple-500 text-inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:text-purple-500">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/price" className="hover:text-purple-500">
                  Price
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-purple-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-500">
                  Contact
                </Link>
              </li>
              {!isLoggedIn || !email ? (
                <>
                  <li>
                    <Link
                      to="/signup"
                      className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="relative group">
                  <button className="w-10 h-10 mr-6 bg-purple-400 rounded-full flex items-center justify-center text-white">
                    {profile ? (
                      <img src={profile} alt="Profile" className="rounded-full" />
                    ) : (
                      <p className="text-white">{name.charAt(0)}</p>
                    )}
                  </button>
                  <ul className="absolute right-0 mt-2 w-48 bg-opacity-30 border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-purple-500"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={HandleLog}
                        className="block px-4 py-2 w-full text-black text-left hover:text-purple-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="flex flex-col space-y-2 p-4 text-purple-500">
            <li>
              <Link to="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-purple-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/category" className="hover:text-purple-500">
                Category
              </Link>
            </li>
            <li>
              <Link to="/price" className="hover:text-purple-500">
                Price
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-purple-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500">
                Contact
              </Link>
            </li>
            {!isLoggedIn || !email ? (
              <>
                <li>
                  <Link
                    to="/signup"
                    className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300"
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="relative group">
                <button className="w-10 h-10 mr-6 bg-purple-400 rounded-full flex items-center justify-center text-white">
                  {profile ? (
                    <img src={profile} alt="Profile" className="rounded-full" />
                  ) : (
                    <p className="text-white">{name.charAt(0)}</p>
                  )}
                </button>
                <ul className="absolute right-0 mt-2 w-48 bg-opacity-30 border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-purple-500"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={HandleLog}
                      className="block px-4 py-2 w-full text-black text-left hover:text-purple-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
