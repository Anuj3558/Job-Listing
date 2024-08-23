import React from "react";
import { HeroImg } from "../../../assets";

const Banner =({page})=>{
    return(
        <section className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl">{page}</h1>
          <p className="text-white mt-4">
            <a href="index.html" className="hover:text-orange-500">Home</a>
            <span className="mx-2 text-orange-500">&gt;</span>
            <a href="about-us.html" className="hover:text-orange-500">{page}</a>
          </p>
        </div>
      </section>
    );
}
export default Banner;