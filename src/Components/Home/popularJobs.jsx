import React from "react";
import {
  Building2,
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Zap,
  Trophy,
  Globe,
} from "lucide-react";

const jobs = [
  {
    title: "AI Systems Architect",
    company: "NeuroTech Industries",
    location: "Meta Headquarters, CA",
    type: "Full-time",
    posted: "2 days ago",
    skills: ["Neural Networks", "Quantum ML", "BioAI"],
    badge: "Featured",
  },
  {
    title: "Quantum Experience Designer",
    company: "HoloVerse",
    location: "Virtual Office",
    type: "Remote",
    posted: "1 day ago",
    skills: ["Q-UX", "Haptic Design", "Mind-Computer Interfaces"],
    badge: "Hot",
  },
  {
    title: "Robotics Ethicist",
    company: "AutomationX",
    location: "Neo Tokyo",
    type: "Contract",
    posted: "3 days ago",
    skills: ["AI Ethics", "Robot Psychology", "Human-Bot Relations"],
    badge: null,
  },
  {
    title: "Space Data Engineer",
    company: "MarsCorp",
    location: "Orbital Station 9",
    type: "Hybrid",
    posted: "4 days ago",
    skills: ["Zero-G Databases", "Quantum Computing", "Space-Time Analysis"],
    badge: "Trending",
  },
];

const JobCard = ({ job }) => {
  const typeColors = {
    "Full-time": "blue",
    Remote: "green",
    Contract: "purple",
    Hybrid: "orange",
  };

  const color = typeColors[job.type] || "blue";

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          {job.badge && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold 
              ${
                job.badge === "Hot"
                  ? "bg-rose-100 text-rose-600"
                  : job.badge === "Featured"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-violet-100 text-violet-600"
              }`}
            >
              {job.badge}
            </span>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-slate-600">
            <Building2 className="w-4 h-4 mr-2 text-slate-400" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <MapPin className="w-4 h-4 mr-2 text-slate-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Clock className="w-4 h-4 mr-2 text-slate-400" />
            <span>{job.posted}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`inline-flex items-center bg-${color}-100 text-${color}-800 text-sm font-medium px-3 py-1 rounded-full`}
          >
            <Globe className={`w-4 h-4 mr-1 text-${color}-500`} />
            {job.type}
          </span>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            Apply Now
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularJobs = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trending Opportunities
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore cutting-edge positions in emerging technologies and be part
            of shaping the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-8 mb-8 text-slate-600">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-amber-500" />
              <span>1000+ Jobs Posted</span>
            </div>
            <div className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-violet-500" />
              <span>Top Companies</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
              <span>Verified Positions</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/25">
            Explore All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
