import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Brain,
  Binary,
  Atom,
  Bot,
  Globe,
  Users,
  Dna,
  Network,
  LineChart,
} from "lucide-react";

const FeatureCategories = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      name: "AI & Robotics",
      icon: Brain,
      color: "bg-violet-100 text-violet-600",
      description: "Machine Learning, Neural Networks",
      jobCount: 1250,
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      color: "bg-blue-100 text-blue-600",
      description: "Quantum Algorithms, Q-Hardware",
      jobCount: 850,
    },
    {
      name: "Biotech Engineering",
      icon: Dna,
      color: "bg-emerald-100 text-emerald-600",
      description: "Genetic Engineering, BioAI",
      jobCount: 920,
    },
    {
      name: "Space Technology",
      icon: Rocket,
      color: "bg-orange-100 text-orange-600",
      description: "Aerospace, Orbital Systems",
      jobCount: 760,
    },
    {
      name: "Metaverse Design",
      icon: Globe,
      color: "bg-rose-100 text-rose-600",
      description: "Virtual Worlds, AR/VR",
      jobCount: 1100,
    },
    {
      name: "Cyber Security",
      icon: Binary,
      color: "bg-slate-100 text-slate-600",
      description: "Quantum Cryptography, Neural Security",
      jobCount: 980,
    },
    {
      name: "Human Augmentation",
      icon: Users,
      color: "bg-amber-100 text-amber-600",
      description: "Neurotech, Human 2.0",
      jobCount: 690,
    },
    {
      name: "Data Science",
      icon: LineChart,
      color: "bg-cyan-100 text-cyan-600",
      description: "Predictive AI, Time-Series Analysis",
      jobCount: 1400,
    },
    {
      name: "IoT & Robotics",
      icon: Bot,
      color: "bg-indigo-100 text-indigo-600",
      description: "Smart Devices, Autonomous Systems",
      jobCount: 830,
    },
    {
      name: "Blockchain",
      icon: Network,
      color: "bg-fuchsia-100 text-fuchsia-600",
      description: "DeFi, Smart Contracts",
      jobCount: 920,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-b from-slate-50 to-white py-24"
      id="category"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-semibold mb-4">
            Future of Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Emerging Career Paths
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover groundbreaking opportunities in cutting-edge industries
            shaping tomorrow's workforce.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <a
                href={`/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block p-6"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} mb-4 transition-transform group-hover:scale-110`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500 mb-3">
                  {category.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-slate-600">
                    {category.jobCount.toLocaleString()}+ jobs
                  </span>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCategories;
