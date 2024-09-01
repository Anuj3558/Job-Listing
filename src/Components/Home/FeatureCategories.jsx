import React from "react";
import { o1, o2, o3, o4, o5, o6 } from "../../asset";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCategories = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView, controls]);

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
      <div className="container mx-auto px-12 md:mt-12">
        <header className="flex justify-center pb-16">
          <div className="text-center">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" justify-center"
        ><h1 className="mb-4 text-3xl font-bold">Featured Job Categories</h1>
            <p className="text-gray-600">
              Discover various job categories suited to your career needs.
            </p></motion.div>
          </div>
        </header>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-wrap justify-center"
        >
          {categories.map((category, index) => (
            <motion.article
              key={index}
              className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="single-fcat text-center bg-white shadow-lg w-full h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
                <a href="category.html">
                  <motion.img
                    src={category.img}
                    alt={category.name}
                    className="w-12 h-12 mb-4 transition-transform transform hover:scale-110"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                <p className="mt-4 text-lg font-semibold">{category.name}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCategories;
