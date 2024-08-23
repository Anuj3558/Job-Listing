import React from "react";
import "../index.css"

const CallToAction = () => {
  return (
    <div className="callto-action-container">
      <div className="callto-action-content">
        <h1 className="callto-action-title">
          Join us today without any hesitation
        </h1>
        <p className="callto-action-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button href="#" className="rounded-none">
          I am a Candidate
        </button>
        <button href="#" className="rounded-none">
          Request Free Demo
        </button>
      </div>
    </div>
  );
};

export default CallToAction;