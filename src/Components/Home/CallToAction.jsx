import React from "react";
import "../../index.css"

const CallToAction = () => {
  return (
    <section className="bg-purple-400 py-16 mt-11">
    <div className="container mx-auto text-center text-white">
      <h1 className="text-4xl font-bold">Join us today without any hesitation</h1>
      <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" className="inline-block bg-white text-purple-400 px-8 py-3 mt-6 400-lg font-bold hover:bg-gray-200">Become a Member</a>
    </div>
  </section>
  );
};

export default CallToAction;