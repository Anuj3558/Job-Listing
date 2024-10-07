import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaSearch,
  FaHeart,
  FaComment,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Banner from "./Home/ui/Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Cookies from "js-cookie";

const BlogPosts = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(2);
  const navigate = useNavigate();

  
  const touppercase = (text) => {
    return text ? text.toUpperCase() : "";
  };

  const handleAllBlogs = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/handleblogs`;
      const response = await axios.get(url);
      setBlogs(response.data || []);
    } catch (error) {
      setError((error ).message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAllBlogs();
  }, [Cookies.get("_id")]);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBlog = currentPage * pageSize;
  const indexOfFirstBlog = indexOfLastBlog - pageSize;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  const LoadingSkeleton = () => (
    <div className="w-full lg:w-2/3">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg mb-8">
          <Skeleton height={200} />
          <div className="px-6 py-4">
            <Skeleton width={150} />
            <Skeleton count={3} />
          </div>
        </div>
      ))}
    </div>
  );

  const BlogCard = ({ blog }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      onClick={() => handleBlogClick(blog._id)}
      className="bg-white shadow-lg rounded-lg mb-8 cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={blog.image}
        alt={blog.title}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.categories.map((category, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {touppercase(category.name)}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">
          {blog.title}
        </h2>
        <p className="text-gray-700 mb-4">
          <div
            dangerouslySetInnerHTML={{
              __html: truncateContent(blog.content.slice(7)) || "Content not available.",
            }}
          />
        </p>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex space-x-4">
            <span className="flex items-center">
              <FaHeart className="mr-2 text-red-500" /> 4 likes
            </span>
            <span className="flex items-center">
              <FaComment className="mr-2 text-blue-500" /> 06 Comments
            </span>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaDribbble className="hover:text-pink-600 cursor-pointer" />
            <FaBehance className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const Sidebar = () => (
    <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <form className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search Posts"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-3 text-gray-600 hover:text-blue-500"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
        <img
          src="/placeholder.svg?height=96&width=96"
          alt="Adele Gonzalez"
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Adele Gonzalez</h3>
        <p className="text-gray-600 mb-4">
          MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get.
        </p>
        <div className="flex justify-center space-x-4">
          <FaFacebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
          <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer" />
          <FaDribbble className="text-pink-600 hover:text-pink-700 cursor-pointer" />
          <FaBehance className="text-blue-700 hover:text-blue-800 cursor-pointer" />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Post Categories</h4>
        <ul className="space-y-2">
          <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <a href="#" className="text-gray-700 hover:text-blue-500">Technology</a>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">37</span>
          </li>
          <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded transition-colors duration-300">
            <a href="#" className="text-gray-700 hover:text-blue-500">Lifestyle</a>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">24</span>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Recent Posts</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg?height=64&width=64"
              alt="Recent Post"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <a href="#" className="text-lg font-semibold hover:text-blue-500 transition-colors duration-300">
                Home Audio Recording For Everyone
              </a>
              <p className="text-gray-600 text-sm">02 Hours ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h4 className="text-xl font-semibold mb-4">Tags</h4>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="bg-gray-200 px-3 py-1 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Technology
          </a>
          <a href="#" className="bg-gray-200 px-3 py-1 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Lifestyle
          </a>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div>
        <Banner page="Blog" />
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-wrap">
            <LoadingSkeleton />
            <Sidebar />
          </div>
        </section>
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center py-8">Error: {error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Banner page="Blog" />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4">
              <AnimatePresence>
                {filteredBlogs.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-gray-600 py-8"
                  >
                    No blog posts available
                  </motion.p>
                ) : (
                  currentBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
                )}
              </AnimatePresence>
              {filteredBlogs.length > pageSize && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white">
                    {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="ml-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPosts;