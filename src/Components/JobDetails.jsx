import React from 'react';
import { FaHeart, FaMapMarkerAlt, FaDatabase, FaArrowRight } from 'react-icons/fa';
import Banner from './Home/ui/Banner';

const JobDetails = () => {
  return (
    <div>
      {/* Banner Area */}
   <Banner page={"JobDetails"} />

      {/* Post Area */}
      <section className="py-12 px-14">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full lg:w-2/3">
            {/* Job Post */}
            <div className="bg-white p-6 shadow-md -lg flex flex-col lg:flex-row mb-6">
              <div className="lg:w-1/4">
                <img src="img/post.png" alt="Job Image" className="w-full h-auto" />
                <ul className="mt-4 flex space-x-2">
                  <li><a href="#" className="bg-blue-500 text-white px-2 py-1 ">Art</a></li>
                  <li><a href="#" className="bg-blue-500 text-white px-2 py-1 ">Media</a></li>
                  <li><a href="#" className="bg-blue-500 text-white px-2 py-1 ">Design</a></li>
                </ul>
              </div>
              <div className="lg:w-3/4 lg:pl-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold"><a href="#">Creative Art Designer</a></h4>
                    <h6 className="text-lg text-gray-500">Premium Labels Limited</h6>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-red-500"><FaHeart /></button>
                    <button className="bg-purple-500 text-white px-4 py-2  hover:bg-purple-600">Apply</button>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h5 className="mt-4 font-bold">Job Nature: Full time</h5>
                <p className="mt-2 flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> 56/8, Panthapath Dhanmondi Dhaka</p>
                <p className="mt-2 flex items-center text-gray-600"><FaDatabase className="mr-2" /> 15k - 25k</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-2xl font-bold mb-4">Whom we are looking for</h4>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Experience Requirements */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-2xl font-bold mb-4">Experience Requirements</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
              </ul>
            </div>

            {/* Job Features */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-2xl font-bold mb-4">Job Features & Overviews</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
              </ul>
            </div>

            {/* Education Requirements */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-2xl font-bold mb-4">Education Requirements</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
                <li className="flex items-start">
                  <img src="img/pages/list.jpg" alt="List Icon" className="w-6 h-6 mr-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:pl-8">
            {/* Jobs by Location */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-xl font-bold mb-4">Jobs by Location</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <p>New York</p><span className="text-gray-600">37</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Park Montana</p><span className="text-gray-600">57</span>
                </li>
              </ul>
            </div>

            {/* Top Rated Jobs */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-xl font-bold mb-4">Top Rated Job Posts</h4>
              <div className="space-y-6">
                <div>
                  <img className="w-full h-auto mb-4" src="img/r1.jpg" alt="Job Image" />
                  <a href="single.html"><h4 className="text-lg font-bold">Creative Art Designer</h4></a>
                  <h6 className="text-gray-600">Premium Labels Limited</h6>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut dolore magna aliqua.</p>
                  <p className="text-gray-600"><FaMapMarkerAlt className="mr-2" /> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p className="text-gray-600"><FaDatabase className="mr-2" /> 15k - 25k</p>
                  <a href="#" className="text-purple-500 hover:underline">Apply job</a>
                </div>
              </div>
            </div>

            {/* Jobs by Category */}
            <div className="bg-white p-6 shadow-md -lg mb-6">
              <h4 className="text-xl font-bold mb-4">Jobs by Category</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <p>Technology</p><span className="text-gray-600">37</span>
                </li>
                <li className="flex justify-between items-center">
                  <p>Accounting</p><span className="text-gray-600">57</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
