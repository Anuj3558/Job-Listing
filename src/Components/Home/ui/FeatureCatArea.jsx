import React from "react";
// import "../index.css";
import { o1, o2, o3, o4, o5, o6 } from "../asset";

const FeatureCategories = () => {
  return (
    <section className="feature-cat-area pt-24" id="category">
      <div className="container mx-auto">
        <div className="row flex justify-center">
          <div className="menu-content pb-16 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-4 text-3xl font-bold">
                Featured Job Categories
              </h1>
              <p className="text-gray-600">
                Who are in extremely love with eco friendly system.
              </p>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap justify-center">
          {[o1, o2, o3, o4, o5, o6].map((img, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-6 p-4 flex items-center justify-center"
            >
              <div className="single-fcat text-center bg-white rounded-lg shadow-lg w-48 h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
                <a href="category.html">
                  <img
                    src={img}
                    alt={`Category ${index + 1}`}
                    className="w-12 h-12 mb-4 transition-transform transform hover:scale-110"
                  />
                </a>
                <p className="mt-4 text-lg font-semibold">
                  {
                    [
                      "Accounting",
                      "Development",
                      "Technology",
                      "Media & News",
                      "Medical",
                      "Government",
                    ][index]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCategories;