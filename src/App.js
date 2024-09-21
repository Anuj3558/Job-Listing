import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import AboutUs from "./Components/AboutUs";
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
import CandidateList from "./Components/CandidateList";
import ContinueAs from "./Components/Signin/ContinueAs";
import CitiesPage from "./Components/Signin/CitiesPage";
import CompanyDetailsForm from "./Components/Signin/CompanyDetailsForm";
import UploadResume from "./Components/Signin/UploadResume";
import YourExperiences from "./Components/Signin/YourExperiences";
import AddSkills from "./Components/Signin/AddSkills";
import AddExperience from "./Components/Signin/AddExperience";
import AddEducation from "./Components/Signin/AddEducation";
import ProtectedRoute from "./Components/ProtectedRoute";
import { DashboardProvider } from "./context/context";
import { ProfileProvider } from "./context/ProfileContext";
import ProfileStatus from "./Components/ProfileStatus";
import ComplteProfile from "./Components/Signin/ContinueAs";
import JobBoard from "./Components/text";
import CompanyOptions from "./Components/Signin/CompanyOptions";

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
            <Route path="/job-detail/:id" element={<JobDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/test" element={<CompanyOptions />} />

            <Route
              path="/continueas"
              element={<ProfileStatus element={<ComplteProfile />} />}
            />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<UserDashboard />} />}
            />
            <Route
              path="/editjob/:id"
              element={<ProtectedRoute element={<EditJob />} />}
            />
            <Route
              path="/candidatelist"
              element={<ProtectedRoute element={<CandidateList />} />}
            />
            <Route
              path="/company-details"
              element={<ProtectedRoute element={<CompanyDetailsForm />} />}
            />
          </Routes>
          {/* <Footer /> */}
        </DashboardProvider>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
