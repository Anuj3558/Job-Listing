import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaSearch,
  FaHeart,
  FaComment,
} from "react-icons/fa";
import Banner from "./Home/ui/Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleAllBlogs = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/handleblogs`;
      const response = await axios.get(url);
      setBlogs(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAllBlogs();
  }, []);

  const truncateContent = (content, wordLimit = 50) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return content;
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  if (loading) {
    return (
      <div>
        <Banner page={"Blog"} />
        <section className="py-16 px-14">
          <div className="container mx-auto flex flex-wrap">
            <div className="w-full lg:w-2/3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white lg:shadow-lg mb-8">
                  <Skeleton height={200} />
                  <div className="px-6 py-4">
                    <Skeleton width={150} />
                    <Skeleton count={3} />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
              <div className="bg-white lg:shadow-lg p-6 mb-8">
                <Skeleton height={50} />
                <Skeleton height={30} />
              </div>
              <div className="bg-white lg:shadow-lg p-6 mb-8">
                <Skeleton height={24} />
                <Skeleton count={4} />
              </div>
              <div className="bg-white lg:shadow-lg p-6">
                <Skeleton height={24} />
                <Skeleton count={6} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Banner page={"Blog"} />

      <section className="py-16 px-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3">
              {blogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleBlogClick(blog._id)}
                  className="bg-white lg:shadow-lg mb-8 cursor-pointer"
                >
                  <img
                    className="w-full h-[40vh] p-5 object-cover"
                    src={blog.image}
                    alt="Post"
                  />
                  <ul className="flex space-x-4 px-6 py-4 text-gray-600">
                    {blog.categories.map((category, index) => (
                      <li key={index}>
                        <a href="#">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 pb-6">
                    <a
                      href="blog-single.html"
                      className="block text-2xl font-semibold mb-2 hover:text-blue-500"
                    >
                      {blog.title}
                    </a>
                    <p className="text-gray-700 mb-4">
                      {truncateContent(blog.content)}
                    </p>
                    <div className="flex justify-between items-center text-gray-600">
                      <div className="flex space-x-4">
                        <a href="#" className="flex items-center">
                          <FaHeart className="mr-2" /> 4 likes
                        </a>
                        <a href="#" className="flex items-center">
                          <FaComment className="mr-2" /> 06 Comments
                        </a>
                      </div>
                      <div className="flex space-x-4">
                        <a href="#">
                          <FaFacebook />
                        </a>
                        <a href="#">
                          <FaTwitter />
                        </a>
                        <a href="#">
                          <FaDribbble />
                        </a>
                        <a href="#">
                          <FaBehance />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
              <div className="bg-white lg:shadow-lg p-6 mb-8">
                <form className="relative">
                  <input
                    type="text"
                    className="w-full p-3 lg:border border-gray-300"
                    placeholder="Search Posts"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-3 text-gray-600"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              <div className="bg-white lg:shadow-lg p-6 mb-8 text-center">
                <img
                  src="img/blog/user2.jpg"
                  alt="User"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <a href="#" className="block text-xl font-semibold mb-2">
                  Adele Gonzalez
                </a>
                <p className="text-gray-600 mb-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaDribbble />
                  </a>
                  <a href="#">
                    <FaBehance />
                  </a>
                </div>
              </div>

              <div className="bg-white lg:shadow-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4">Post Categories</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Technology
                    </a>
                    <span>37</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Lifestyle
                    </a>
                    <span>24</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Fashion
                    </a>
                    <span>59</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Art
                    </a>
                    <span>29</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Food
                    </a>
                    <span>15</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Architecture
                    </a>
                    <span>09</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Adventure
                    </a>
                    <span>44</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white lg:shadow-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4">Recent Posts</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <img
                      src="img/blog/r1.jpg"
                      alt="Recent Post"
                      className="w-16 h-16 lg:mr-4"
                    />
                    <div>
                      <a
                        href="blog-single.html"
                        className="text-lg font-semibold hover:text-blue-500"
                      >
                        Home Audio Recording For Everyone
                      </a>
                      <p className="text-gray-500 text-sm">02 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white lg:shadow-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Post Archive</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Dec '17
                    </a>
                    <span>37</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Nov '17
                    </a>
                    <span>24</span>
                  </li>
                  <li className="flex justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Oct '17
                    </a>
                    <span>59</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPosts;
