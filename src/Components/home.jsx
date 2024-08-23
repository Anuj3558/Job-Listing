import React from "react";
import Hero from "./Home/heroSection";
import FeatureCategories from "./Home/FeatureCategories";
import FindJobs from "./Home/FindJobs";
import CallToAction from "./Home/CallToAction";

const Home =( )=>{
    return(<>
      <Hero />
      <FeatureCategories />
      <FindJobs />
      <CallToAction />
      </>
    );
}
export default Home;