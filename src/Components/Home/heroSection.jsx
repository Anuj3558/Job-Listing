import React from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Globe2,
  Layers,
  Timer,
  Sparkles,
} from "lucide-react";

const jobTypes = [
  { icon: Globe2, label: "Remote" },
  { icon: Timer, label: "Flexible" },
  { icon: Briefcase, label: "Full-time" },
  { icon: Layers, label: "Contract" },
];

const categories = [
  "AI & Machine Learning",
  "Blockchain",
  "Quantum Computing",
  "Robotics",
  "Virtual Reality",
];

const locations = [
  "Meta Offices",
  "Space Stations",
  "Virtual Hubs",
  "Tech Corridors",
  "Global Remote",
];

export default function FuturisticHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-violet-500" />
            <span className="text-sm font-medium bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
              AI-Powered Matching
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight lg:leading-tight">
            Your Next-Gen
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              {" "}
              Career{" "}
            </span>
            Awaits
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Quantum-speed matching with{" "}
            <span className="text-blue-600 font-semibold">10,000+</span>{" "}
            future-forward opportunities
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg max-w-6xl mx-auto">
          <div className="p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  className="w-full h-14 pl-12 pr-4 bg-white/50 rounded-xl outline-none focus:ring-2 focus:ring-violet-500 transition-all text-slate-800 placeholder-slate-400"
                  placeholder="Search roles, skills, or companies"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:w-7/12 xl:w-1/2">
                <div className="relative flex-grow">
                  <select className="w-full h-14 appearance-none pl-12 pr-4 bg-white/50 rounded-xl outline-none focus:ring-2 focus:ring-violet-500 transition-all text-slate-800">
                    <option value="">Location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc.toLowerCase()}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                </div>

                <div className="relative flex-grow">
                  <select className="w-full h-14 appearance-none pl-12 pr-4 bg-white/50 rounded-xl outline-none focus:ring-2 focus:ring-violet-500 transition-all text-slate-800">
                    <option value="">Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat.toLowerCase()}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <Layers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                </div>
              </div>

              <button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 whitespace-nowrap">
                Find Opportunities
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                {jobTypes.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-600">
          <p className="mb-2 text-lg">
            Trending skills: Neurotech, Quantum Programming, Hologram Design
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-2 text-lg">
            <span>Leading innovators:</span>
            {["NeuraLink", "SpaceX", "Quantum Labs", "Meta"].map(
              (company, index) => (
                <a
                  key={company}
                  href="#"
                  className="text-blue-600 hover:text-violet-600 transition-colors"
                >
                  {company}
                  {index < 3 ? "," : ""}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
  