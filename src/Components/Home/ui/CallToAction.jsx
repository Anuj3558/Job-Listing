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
        <a href="#" className="callto-action-button">
          I am a Candidate
        </a>
        <a href="#" className="callto-action-button">
          Request Free Demo
        </a>
      </div>
    </div>
  );
};

export default CallToAction;