import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, Logo } from "../assets";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";
import { signOut } from "firebase/auth";
import { handleError, handleSuccess } from "./Home/utils/utils";
import { auth } from "../FirebaseAuth/firebaseconfig";
import { useProfile } from "../context/ProfileContext";
import { useCompany } from "../context/companyContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useJobContext } from "../context/JobContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { jobs, setJobs } = useJobContext();
  const [page, setPage] = useState(1);
  const {
    Companyname,
    address,
    Companyemail,
    logoUrl,
    admins,
    owner,
    setCompanyName,
    setLogoUrl,
    setCompnayEmail,
    setAdmins,
    setOwner,
    setAddress,
  } = useCompany();
  const {
    setSelectedCity,
    userType,
    setUserType,
    name,
    setName,
    email,
    setEmail,
    profileImg,
    setProfileImg,
    setEducation,
    setExperiences,
    setStatus,
    setSkills,
    setphone,
    setCertifications,
  } = useProfile();
  const { ref: navbarRef, inView: navbarInView } = useInView({ threshold: 0 });
  const navbarControls = useAnimation();

  useEffect(() => {
    if (navbarInView) {
      navbarControls.start({ opacity: 1, y: 0 });
    } else {
      navbarControls.start({ opacity: 0.8, y: -10 });
    }
  }, [navbarInView, navbarControls]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const GetUserData = async () => {
    const uid = Cookies.get("_id");
    if (uid) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/info`,
          { uid }
        );
        const userData = response.data;
        setEmail(userData?.email);
        setName(userData?.name);
        setProfileImg(userData?.profileUrl);
        setUserType(userData?.userType);
        setSelectedCity(userData?.location);
        setEducation(userData?.education);
        setExperiences(userData?.experience);
        setStatus(userData?.status);
        setSkills(userData?.skills);
        setCertifications(userData?.certifications);
        setphone(userData?.phone);

        const companyResponse = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/get-data`,
          { uid }
        );
        setCompanyName(
          companyResponse?.data?.ownerCompany?.name ||
            companyResponse?.data?.company?.name
        );
        setLogoUrl(
          companyResponse?.data?.ownerCompany?.logoUrl ||
            companyResponse?.data?.company?.logoUrl
        );
        setCompnayEmail(
          companyResponse?.data?.ownerCompany?.email ||
            companyResponse?.data?.company?.email
        );
        setAdmins(
          companyResponse?.data?.ownerCompany?.admins ||
            companyResponse?.data?.company?.admins
        );
        setOwner(
          companyResponse?.data?.ownerCompany?.owner ||
            companyResponse?.data?.company?.owner
        );
        setAddress(
          companyResponse?.data?.ownerCompany?.address ||
            companyResponse?.data?.company?.address
        );
      } catch (error) {
        console.error(error);
        setEmail(null);
        setName(null);
        setProfileImg(null);
      }
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/get-all-jobs?page=${page}`)
      .then((response) => {
        const fetchedJobs = response?.data?.jobs || [];
        setJobs(fetchedJobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, [page, setJobs]);

  const HandleLog = async () => {
    try {
      await signOut(auth);
      logout();
      Cookies.remove("_id");
      handleSuccess("User Logged out successfully");
      window.location.reload();
    } catch (err) {
      console.error("Error in logging out:", err);
      handleError("Error in logging out");
    }
  };

  const handleDashboardClick = () => {
    navigate(
      userType === "employee" || userType === "company"
        ? "/dashboard"
        : "/continueas"
    );
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

  const shouldApplyBackground = [
    "/signup", 
    "/login", 
    "/dashboard", 
    "/add-experience", 
    "/continueas", 
    "/add-skills",
    "/your-experiences", 
    "/upload-resume", 
    "/cities", 
    "/company-details", 
    "/confirm-apply"
  ].includes(location.pathname) || location.pathname.includes("/resume-check") || location.pathname.includes("/confirm-apply");

  return (
    <motion.header
      ref={navbarRef}
      animate={navbarControls}
      initial={{ opacity: 0.8, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`left-0 w-full z-50 ease-in-out duration-500 transform ${
        isScrolled || shouldApplyBackground
          ? "fixed bg-black bg-opacity-80 text-white shadow-md"
          : "text-gray-900 absolute"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={Logo} alt="Logo" title="Home" className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/category">Category</NavLink>
            <NavLink to="/price">Price</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {!isLoggedIn || !email ? (
              <>
                <NavButton to="/signup">Signup</NavButton>
                <NavButton to="/login">Login</NavButton>
              </>
            ) : (
              <ProfileDropdown
                profileImg={profileImg}
                name={name}
                handleDashboardClick={handleDashboardClick}
                HandleLog={HandleLog}
              />
            )}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isLoggedIn={isLoggedIn}
        email={email}
        profileImg={profileImg}
        name={name}
        handleDashboardClick={handleDashboardClick}
        HandleLog={HandleLog}
      />
    </motion.header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm font-medium hover:text-purple-500 transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const NavButton = ({ to, children }) => (
  <Link
    to={to}
    className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const ProfileDropdown = ({ profileImg, name, handleDashboardClick, HandleLog }) => (
  <div className="relative group">
    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500 text-white focus:outline-none">
      {profileImg ? (
        <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
      ) : (
        <span className="text-lg font-medium">{name.charAt(0)}</span>
      )}
    </button>
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
      <button
        onClick={handleDashboardClick}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-500"
      >
        Dashboard
      </button>
      <button
        onClick={HandleLog}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-500"
      >
        Logout
      </button>
    </div>
  </div>
);

const MobileMenu = ({ isOpen, isLoggedIn, email, profileImg, name, handleDashboardClick, HandleLog }) => (
  <motion.nav
    className={`md:hidden bg-white shadow-lg ${isOpen ? 'block' : 'hidden'}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <div className="px-2 pt-2 pb-3 space-y-1">
      <MobileNavLink to="/">Home</MobileNavLink>
      <MobileNavLink to="/aboutus">About Us</MobileNavLink>
      <MobileNavLink to="/category">Category</MobileNavLink>
      <MobileNavLink to="/price">Price</MobileNavLink>
      <MobileNavLink to="/blog">Blog</MobileNavLink>
      <MobileNavLink to="/contact">Contact</MobileNavLink>
      {!isLoggedIn || !email ? (
        <>
          <MobileNavButton to="/signup">Signup</MobileNavButton>
          <MobileNavButton to="/login">Login</MobileNavButton>
        </>
      ) : (
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              {profileImg ? (
                <img className="h-10 w-10 rounded-full" src={profileImg} alt={name} />
              ) : (
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">{name}</div>
              <div className="text-sm font-medium text-gray-500">{email}</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={handleDashboardClick}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Dashboard
            </button>
            <button
              onClick={HandleLog}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  </motion.nav>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  >
    {children}
  </Link>
);

const MobileNavButton = ({ to, children }) => (
  <Link
    to={to}
    className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-purple-500 hover:bg-purple-600"
  >
    {children}
  </Link>
);

export default Navbar;