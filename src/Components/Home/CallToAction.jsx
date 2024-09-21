import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import { f1, f2, t1, t2, t3, t4, t5 } from '../../asset.js';
const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, isInView]);

  return (
    <><section
    ref={ref}
    className="bg-purple-400 py-16 mt-11"
  >
    
    <motion.div
      className="container mx-auto text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold">Join Us Today Without Any Hesitation</h1>
      <p className="mt-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a 
        href="#" 
        className="inline-block bg-white text-purple-400 px-8 py-3 mt-6 font-bold hover:bg-gray-200 transition-colors duration-300"
        aria-label="Become a Member"
      >
        Become a Member
      </a>
    </motion.div>
  </section></>
  );
};

export default CallToAction;
