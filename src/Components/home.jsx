import React from "react";
import Hero from "./Home/heroSection.jsx";
import PopularJobs from "./Home/popularJobs.jsx";
import FeatureCategories from "./Home/FeatureCategories.jsx";
import FindJobs from "./Home/FindJobs.jsx";
import CallToAction from "./Home/CallToAction.jsx";
import Testimonials from "./Home/testimonial.jsx";
// import AnimatedCounter from "./Ui/AnimatedCounter";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <PopularJobs />
      <FeatureCategories />
      <FindJobs />
      {/* <AnimatedCounter /> */}
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default Home;
