import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import { HeroImg } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CallToAction from './CallToAction';

const Hero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: featureRef, inView: featureInView } = useInView({ triggerOnce: true });
  const heroControls = useAnimation();
  const featureControls = useAnimation();

  React.useEffect(() => {
    if (heroInView) {
      heroControls.start({ opacity: 1, y: 0 });
    } else {
      heroControls.start({ opacity: 0, y: -50 });
    }
  }, [heroInView, heroControls]);

  React.useEffect(() => {
    if (featureInView) {
      featureControls.start({ opacity: 1, y: 0 });
    } else {
      featureControls.start({ opacity: 0, y: 50 });
    }
  }, [featureInView, featureControls]);

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      id="home"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-purple-600 opacity-50"></div>
      <motion.div
        ref={heroRef}
        animate={heroControls}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="h-full mx-auto flex flex-col items-center justify-center relative z-10 px-4"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#49e4fa]">1500+</span> Jobs posted last week
          </h1>
          <form action="search.html" className="md:w-[120vw] justify-center align-middle p-3 max-w-4xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="w-full sm:w-2/3 lg:w-1/2 px-2 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    className="form-input w-full py-3 px-4 bg-white text-gray-800 shadow-lg pr-12 shadow-lg"
                    placeholder="What are you looking for?"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600">
                    <FaSearch />
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/4 px-2 mb-4">
                <select className="form-select w-full py-3 px-4 bg-white text-gray-800 shadow-lg shadow-lg">
                  <option>Select area</option>
                  <option>Dhaka</option>
                  <option>Rajshahi</option>
                  <option>Barishal</option>
                  <option>Noakhali</option>
                </select>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/4 px-2 mb-4">
                <select className="form-select w-full py-3 px-4 bg-white text-gray-800 shadow-lg shadow-lg">
                  <option>Categories</option>
                  <option>Medical</option>
                  <option>Technology</option>
                  <option>Government</option>
                  <option>Development</option>
                </select>
              </div>
              <div className="w-full sm:w-auto lg:w-1/6 px-2 mb-4">
                <button
                  type="button"
                  className="btn bg-[#49e4fa] text-white flex justify-center px-5 gap-2 align-middle text-center w-full py-3 shadow-lg shadow-lg hover:bg-[#6a9fa6]"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </form>
          <p className="mt-4 text-sm">
            <span className="font-semibold">Search by tags:</span> Technology,
            Business, Consulting, IT Company, Design, Development
          </p>
        </div>
        <motion.div
          ref={featureRef}
          animate={featureControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 pb-16 mb-[100%] px-4 sm:px-11 top-[100vh] sm:top-[90vh]"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Searching', text: 'Find your dream job quickly with our powerful search features.' },
                { title: 'Applying', text: 'Easily apply to multiple job postings with a single click.' },
                { title: 'Security', text: 'Your data is safe with us. We prioritize your privacy.' },
                { title: 'Notifications', text: 'Get real-time updates on your job application status.' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="single-feature text-center p-6 bg-white shadow-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p>{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
