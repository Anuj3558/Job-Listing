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
const{jobs,setJobs}=useJobContext();
const [page, setPage] = useState(1);
  const { Companyname, address, Companyemail, logoUrl, admins, owner, setCompanyName, setLogoUrl, setCompnayEmail, setAdmins, setOwner, setAddress } = useCompany();
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
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/info`, { uid });
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


        const companyResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/get-data`, { uid });
        setCompanyName(companyResponse?.data?.ownerCompany?.name || companyResponse?.data?.company?.name);
        setLogoUrl(companyResponse?.data?.ownerCompany?.logoUrl || companyResponse?.data?.company?.logoUrl);
        setCompnayEmail(companyResponse?.data?.ownerCompany?.email || companyResponse?.data?.company?.email);
        setAdmins(companyResponse?.data?.ownerCompany?.admins || companyResponse?.data?.company?.admins );
        setOwner(companyResponse?.data?.ownerCompany?.owner || companyResponse?.data?.company?.owner);
        setAddress(companyResponse?.data?.ownerCompany?.address || companyResponse?.data?.company?.address);
        
      } catch (error) {
        console.error(error);
        setEmail(null);
        setName(null);
        setProfileImg(null);
      }
    }
  };

  useEffect(() => {
    // Fetch jobs when the component mounts or when page changes
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-jobs?page=${page}`)
      .then((response) => {
        const fetchedJobs = response?.data?.jobs || [];
        setJobs(fetchedJobs);
      // Assume totalPages is returned
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
    navigate(userType === "employee" || userType === "company" ? "/dashboard" : "/continueas");
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
  ].includes(location.pathname) || location.pathname.includes("/resume-check")||location.pathname.includes("/confirm-apply");

  return (
    <motion.header
      ref={navbarRef}
      animate={navbarControls}
      initial={{ opacity: 0.8, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`left-0 poppins-regular w-full text-white z-50 ease-in-out duration-500 transform ${
        isScrolled || shouldApplyBackground ? "fixed bg-[#000000CC] text-white shadow-md" : "text-[#230d0d] absolute translate-y"
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
              <li className="text-inherit font-semibold"><Link to="/">Home</Link></li>
              <li><Link to="/aboutus" className="hover:text-purple-500 text-inherit">About Us</Link></li>
              <li><Link to="/category" className="hover:text-purple-500">Category</Link></li>
              <li><Link to="/price" className="hover:text-purple-500">Price</Link></li>
              <li><Link to="/blog" className="hover:text-purple-500">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
              {!isLoggedIn || !email ? (
                <>
                  <li><Link to="/signup" className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300">Signup</Link></li>
                  <li><Link to="/login" className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300">Login</Link></li>
                </>
              ) : (
                <li className="relative group">
                  <button className="w-10 h-10 mr-6 bg-purple-400 rounded-full flex items-center justify-center text-white">
                    {profileImg ? (
                      <img src={profileImg} alt="Profile" className="rounded-full" />
                    ) : (
                      <p className="text-white">{name.charAt(0)}</p>
                    )}
                  </button>
                  <ul className="absolute right-0 mt-2 w-48 bg-opacity-30 border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><button onClick={handleDashboardClick} className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-purple-500 w-full text-left">Dashboard</button></li>
                    <li><button onClick={HandleLog} className="block px-4 py-2 w-full text-black text-left hover:text-purple-500 hover:bg-gray-100">Logout</button></li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="flex flex-col space-y-2 p-4 text-purple-500">
            <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-purple-500">About Us</Link></li>
            <li><Link to="/category" className="hover:text-purple-500">Category</Link></li>
            <li><Link to="/price" className="hover:text-purple-500">Price</Link></li>
            <li><Link to="/blog" className="hover:text-purple-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
            {!isLoggedIn || !email ? (
              <>
                <li><Link to="/signup" className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300">Signup</Link></li>
                <li><Link to="/login" className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300">Login</Link></li>
              </>
            ) : (
              <li className="relative group">
                <button className="w-10 h-10 mr-6 bg-purple-400 rounded-full flex items-center justify-center text-white">
                  {profileImg ? (
                    <img src={profileImg} alt="Profile" className="rounded-full" />
                  ) : (
                    <p className="text-white">{name.charAt(0)}</p>
                  )}
                </button>
                <ul className="absolute right-0 mt-2 w-48 bg-opacity-30 border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <li><Link to="/dashboard" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-purple-500">Dashboard</Link></li>
                  <li><button onClick={HandleLog} className="block px-4 py-2 w-full text-black text-left hover:text-purple-500 hover:bg-gray-100">Logout</button></li>
                </ul>
              </li>
            )}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;