import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCompany } from "../context/companyContext";

const CompanyProfile = () => {
  const { Companyname, address, logoUrl } = useCompany();
  const [inView, setInView] = useState(false);
  const [inViewDetails, setInViewDetails] = useState(false);
  const ref = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInViewDetails(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (detailsRef.current) observer.observe(detailsRef.current);
    
    return () => {
      if (detailsRef.current) observer.unobserve(detailsRef.current);
    };
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Company Summary Section */}
          <div className="lg:w-1/3 mb-4" ref={ref}>
            <motion.div
              className="card bg-white p-6 text-center shadow-md mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logoUrl}
                alt="company-logo"
                className="rounded-full w-36 h-36 mx-auto"
              />
              <h5 className="my-3 text-lg font-medium">{Companyname}</h5>
              <p className="text-gray-500 mb-1">{address}</p>
            </motion.div>

            {/* Company Links Section */}
            <motion.div
              className="card bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="list-group">
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fas fa-globe text-yellow-500"></i>
                  <p className="mb-0 text-gray-700">https://techsolutions.com</p>
                </li>
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fab fa-linkedin text-blue-600"></i>
                  <p className="mb-0 text-gray-700">Tech Solutions Inc.</p>
                </li>
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fab fa-twitter text-blue-400"></i>
                  <p className="mb-0 text-gray-700">@techsolutions</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Company Details Section */}
          <div className="lg:w-2/3 ml-6" ref={detailsRef}>
            <motion.div
              className="card bg-white p-6 shadow-md mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inViewDetails ? 1 : 0, y: inViewDetails ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { label: "Company Name", value: Companyname },
                { label: "Industry", value: "Technology" },
                { label: "Location", value: address },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex justify-between py-2">
                    <p className="mb-0 text-gray-700">{item.label}</p>
                    <p className="text-gray-500 mb-0">{item.value}</p>
                  </div>
                  {index < 2 && <hr />}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Job Postings Section */}
            <div className="flex flex-col md:flex-row">
              {[1, 2].map((_, idx) => (
                <div className="w-full md:w-1/2 md:ml-4" key={idx}>
                  <motion.div
                    className="card bg-white p-6 shadow-md mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: inViewDetails ? 1 : 0, scale: inViewDetails ? 1 : 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mb-4 text-blue-600 italic">Job Openings</p>
                    {[
                      {
                        label: "Full Stack Developer",
                        location: "San Francisco, CA",
                      },
                      { label: "UI/UX Designer", location: "Remote" },
                      { label: "Project Manager", location: "New York, NY" },
                    ].map((job, index) => (
                      <React.Fragment key={index}>
                        <p className="text-sm mb-1">{job.label}</p>
                        <p className="text-xs text-gray-500 mb-1">{job.location}</p>
                        <div className="w-full bg-gray-200 h-1.5 mb-4">
                          <div className="bg-blue-600 h-1.5" style={{ width: "100%" }}></div>
                        </div>
                      </React.Fragment>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
