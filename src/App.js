import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/navbar";
import Home from "./Components/home";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import BlogPosts from "./Components/BlogPage";
import BlogSingle from "./Components/SingleBlogPost";
import Pricing from "./Components/Pricing";
import Category from "./Components/Category";
import ContactPage from "./Components/ContactPage";
import JobDetails from "./Components/JobDetails";
import ProfilePage from "./Components/ProfilePage";
import UserDashboard from "./Components/Dashobard";
import EditJob from "./Components/EditJob";
import { DashboardProvider } from "./context/context";
import CandidateList from "./Components/CandidateList";
// Import the new component
import { useLocation } from "react-router-dom";
import ContinueAs from "./Components/Signin/ContinueAs";
import CitiesPage from "./Components/Signin/CitiesPage";
import { ProfileProvider } from "./context/ProfileContext";
import CompanyDetailsForm from "./Components/Signin/CompanyDetailsForm";
import UploadResume from "./Components/Signin/UploadResume";
import YourExperiences from "./Components/Signin/YourExperiences";
import AddSkills from "./Components/Signin/AddSkills";
import AddExperience from "./Components/Signin/AddExperience";



function App() {


const [currLocation, setCurrLocation] = useState("");

const AppWrapper = () => {
  const location = useLocation();
  const curr = location.pathname.slice(1, location.pathname.length);
  useEffect(() => {
    setCurrLocation(curr);
  }, [location]);
  return null; // This component doesn't render anything itself
};


  return (
    <BrowserRouter>
      <ProfileProvider>
        <DashboardProvider>
          <AppWrapper /> {/* Add this component to use the useLocation hook */}
          <Navbar location={currLocation} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blog" element={<BlogPosts />} />
            <Route path="blog/:id" element={<BlogSingle />} />
            <Route path="price" element={<Pricing />} />
            <Route path="/category" element={<Category />} />
            <Route path="/jobdetails/:id" element={<JobDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/dashboard"
              element={<UserDashboard userType="employee" />}
            />
            <Route path="/editjob/:id" element={<EditJob />} />
            <Route path="/candidatelist" element={<CandidateList />} />
            <Route path="/continueas" element={<ContinueAs />} />
            <Route path="/cities" element={<CitiesPage />} />
            <Route
              path="/company-details"
              element={<CompanyDetailsForm />}
            />
            <Route path="/upload-resume" element={<UploadResume />} />
            <Route path="/your-experiences" element={<YourExperiences />} />
            <Route path="/add-skills" element={<AddSkills />} />
            <Route path="/add-experience" element={<AddExperience />} />
           
          </Routes>
          <Footer />
        </DashboardProvider>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
