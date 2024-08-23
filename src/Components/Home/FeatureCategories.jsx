import React from "react";
import { o1, o2, o3, o4, o5, o6 } from "../../asset";

const FeatureCategories = () => {
  const categories = [
    { name: "Accounting", img: o1 },
    { name: "Development", img: o2 },
    { name: "Technology", img: o3 },
    { name: "Media & News", img: o4 },
    { name: "Medical", img: o5 },
    { name: "Government", img: o6 },
  ];

  return (
    <section className="feature-cat-area pt-24" id="category">
      <div className="container mx-auto px-12 mt-[80vh] md:mt-12 ">
        <header className="flex justify-center pb-16">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold">Featured Job Categories</h1>
            <p className="text-gray-600">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </header>
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <article
              key={index}
              className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex items-center justify-center"
            >
              <div className="single-fcat text-center bg-white shadow-lg shadow-lg w-full h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
                <a href="category.html">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-12 h-12 mb-4 transition-transform transform hover:scale-110"
                  />
                </a>
                <p className="mt-4 text-lg font-semibold">{category.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCategories;
