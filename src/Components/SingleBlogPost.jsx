import React from 'react';
import { HeroImg } from '../assets';
import { FaSearch } from 'react-icons/fa';
const BlogSingle = () => {
  return (
    <>
      {/* Banner Area */}
      <section className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl">Single Blog</h1>
          <p className="text-white mt-4">
            <a href="index.html" className="hover:text-orange-500">Home</a>
            <span className="mx-2 text-orange-500">&gt;</span>
            <a href="about-us.html" className="hover:text-orange-500">Single blog</a>
          </p>
        </div>
      </section>

      {/* Blog Posts Area */}
      <section className="py-16 bg-gray-100 px-14">
        <div className="container mx-auto flex flex-wrap">
          <div className="lg:w-2/3 w-full pr-4 lg:pr-8">
            <div className="bg-white p-6 -lg shadow-md mb-8">
              <img className="w-full h-auto -lg mb-4" src="img/blog/p1.jpg" alt="Blog Post" />
              <ul className="flex space-x-4 mb-4">
                <li><a href="#" className="text-blue-600 hover:underline">Art</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Technology</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Fashion</a></li>
              </ul>
              <a href="#" className="text-2xl font-bold text-gray-800 hover:underline">
                Cartridge Is Better Than Ever A Discount Toner
              </a>
              <div className="mt-4 text-gray-600">
                <p>
                  MCSE boot camps have its supporters and its detractors...
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">
                  “Recently, the US Federal government banned online casinos...”
                </blockquote>
                <p>
                  MCSE boot camps have its supporters and its detractors...
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                    <span className="mr-2">
                      <i className="fa fa-heart"></i>
                    </span>
                    4 likes
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                    <span className="mr-2">
                      <i className="fa fa-comment"></i>
                    </span>
                    06 Comments
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:underline">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:underline">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:underline">
                    <i className="fa fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Area */}
           
            {/* Comment Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto">
                <h5 className="text-lg font-bold mb-6">05 Comments</h5>
                <div className="mb-6">
                  <div className="flex items-start mb-6">
                    <img className="w-12 h-12 -full mr-4" src="img/blog/c1.jpg" alt="Commenter" />
                    <div>
                      <h5 className="font-bold text-gray-800"><a href="#" className="hover:underline">Emilly Blunt</a></h5>
                      <p className="text-sm text-gray-600">December 4, 2017 at 3:12 pm</p>
                      <p className="text-gray-800 mt-2">Never say goodbye till the end comes!</p>
                      <a href="#" className="text-blue-600 hover:underline">reply</a>
                    </div>
                  </div>
                  {/* Repeat comment structure for each additional comment */}
                </div>
              </div>
            </section>

            {/* Comment Form Area */}
            <section className="py-16 bg-gray-100">
              <div className="container mx-auto">
                <h5 className="text-lg font-bold mb-6">Leave a Reply</h5>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/3 pr-4">
                    <input
                      name="name"
                      placeholder="Enter your name"
                      className="w-full mb-4 p-3 border border-gray-300 "
                      required
                      type="text"
                    />
                    <input
                      name="email"
                      placeholder="Enter your email"
                      className="w-full mb-4 p-3 border border-gray-300 "
                      required
                      type="email"
                    />
                    <input
                      name="Subject"
                      placeholder="Subject"
                      className="w-full mb-4 p-3 border border-gray-300 "
                      required
                      type="text"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 pl-4">
                    <textarea
                      className="w-full mb-4 p-3 border border-gray-300 "
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                    <button className="bg-blue-600 text-white py-2 px-4  hover:bg-blue-700">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 w-full pl-4 lg:pl-8">
            <div className="bg-white p-6 -lg shadow-md mb-8">
              <form className="flex items-center border border-gray-300 ">
                <input
                  type="text"
                  placeholder="Search Posts"
                  name="search2"
                  className="w-full p-3 border-none -l"
                />
                <button type="submit" className="bg-blue-600 text-white p-3 -r m-3">
                <FaSearch />
                </button>
              </form>
            </div>

            <div className="bg-white p-6 -lg shadow-md mb-8">
              <img className="w-24 h-24 -full mb-4" src="img/blog/user2.jpg" alt="User" />
              <h4 className="font-bold text-gray-800 mb-2"><a href="#" className="hover:underline">Adele Gonzalez</a></h4>
              <p className="text-gray-600 mb-4">MCSE boot camps have its supporters and its detractors...</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:underline">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-400 hover:underline">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-pink-500 hover:underline">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 -lg shadow-md mb-8">
              <h4 className="font-bold text-gray-800 mb-4">Post Categories</h4>
              <ul>
                <li className="flex justify-between mb-2">
                  <a href="#" className="text-blue-600 hover:underline">Technology</a>
                  <span className="text-gray-600">37</span>
                </li>
                {/* Additional categories */}
              </ul>
            </div>

            <div className="bg-white p-6 -lg shadow-md">
              <h4 className="font-bold text-gray-800 mb-4">Recent Posts</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img className="w-16 h-16 -full mr-4" src="img/blog/r1.jpg" alt="Recent Post" />
                  <div>
                    <a href="#" className="text-blue-600 hover:underline">
                      <h4 className="text-gray-800">The wonderful joy of giving</h4>
                    </a>
                    <p className="text-gray-600">02 hours ago</p>
                  </div>
                </div>
                {/* Additional recent posts */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
