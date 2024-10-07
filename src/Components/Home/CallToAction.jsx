import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight, Users, Zap, Trophy } from "lucide-react";

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    { icon: Users, text: "Join 50k+ Professionals" },
    { icon: Zap, text: "AI-Powered Matching" },
    { icon: Trophy, text: "Industry-Leading Benefits" },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 py-24 mt-16 relative overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="text-center text-white">
            <motion.div
              className="inline-flex items-center justify-center space-x-2 mb-6"
              variants={itemVariants}
            >
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <span className="text-sm font-medium bg-white/20 px-4 py-1 rounded-full">
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-violet-100 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Elevate Your Career Today
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100"
              variants={itemVariants}
            >
              Join our community of professionals and unlock new opportunities
              for growth, networking, and success in your industry.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mb-12"
              variants={itemVariants}
            >
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-blue-200" />
                  <span className="text-sm lg:text-base text-blue-100">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button className="group relative px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 hover:shadow-lg hover:shadow-white/20">
                Become a Member
                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 flex justify-center items-center space-x-4 text-sm text-blue-200"
            variants={itemVariants}
          >
            <span>✓ No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-blue-200" />
            <span>✓ Cancel anytime</span>
            <span className="w-1 h-1 rounded-full bg-blue-200" />
            <span>✓ 30-day free trial</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
