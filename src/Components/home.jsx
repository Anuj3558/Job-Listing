import React from "react";
import Hero from "./Home/heroSection";
import FeatureCategories from "./Home/FeatureCategories";
import FindJobs from "./Home/FindJobs";
import CallToAction from "./Home/CallToAction";
import PopularJobCarousel from "./Home/popularJobs";
import Testimonials from "./Home/testimonial";

const Home =( )=>{
    return(<>
      <Hero />
      <PopularJobCarousel />
      <FeatureCategories />
      <FindJobs />
      <CallToAction />
      <Testimonials />
      </>
    );
}
export default Home;