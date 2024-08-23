import React from "react";
import Marquee from "react-fast-marquee";
import { popularJobs } from "../../assets";
// import { "", p2 } from "../asset";

const jobs = [
  {
    title: "Creative Designer",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: popularJobs,
  },
  {
    title: " Designer",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: popularJobs,
  },
  {
    title: "Creative ",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: popularJobs,
  },
  {
    title: "Developer",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: popularJobs,
  },
  // Add more job objects here...
];

const JobCard = ({ job }) => (
  <div className="single-popular-post flex flex-row bg-gray-800 mx-7 p-7 relative">
    <div className="thumbc">
      <img className=" object-contain w-20" color="white" src={job.img} alt={job.title} />
      <button className="absolute md:left-[650px] left-[200px] mt-3 bottom-6 bg-[#49e4fa] text-white text-xs font-medium p-2 uppercase transition duration-300 ease-in-out hover:bg-gray-800 hover:text-teal-400">
        View Job Post
      </button>
    </div>
    <div className="details ml-10">
      <a href="#">
        <h4 className="text-white">{job.title}</h4>
      </a>
      <h6 className="py-2 text-[#49e4fa]">{job.location}</h6>
      <p className="text-white mb-3">{job.description}</p>
    </div>
  </div>
);

const PopularJobCarousel = () => {
  const slides = [];
  for (let i = 0; i < 1; i += 2) {
    slides.push(
      <div key={i} className="flex space-x-4">
        {jobs.slice(i, i + jobs.length).map((job, index) => (
          <div key={index} className="md:w-1/6 w-[8%] flex-shrink-0">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="popular-post-area mx-6 py-20 flex-col poppins  mt-[80vh] md:mt-0">
      <div className="flex p-10 mx-7">
        <h1 className="mx-auto poppins-bold text-3xl "> Popular jobs</h1>
      </div>
      <div className="container mx-auto">
        <Marquee
          pauseOnHover
          loop={false}
          speed={200}
          className="flex-space-x-14"
        >
          {slides}
        </Marquee>
      </div>
    </section>
  );
};

export default PopularJobCarousel;