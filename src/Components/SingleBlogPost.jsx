import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Banner from "./Home/ui/Banner";

const BlogSingle = () => {
  const { id } = useParams(); // Get the blog ID from URL parameters
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [userP,setUserP]=useState({
    userName:"",
    userUrl:""
  })

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/singleblog/${id}`; // API endpoint
        const response = await axios.get(url); // Fetch data
        
        setBlog(response.data?.blog); // Set data to state
        setUserP({
          userName: response.data?.userName,
          userUrl: response.data?.userProfileImg,
        });
        
      } catch (error) {
        setError("Failed to fetch blog post");
        console.error(error); // Log error
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Banner Area */}
      <Banner page={"Blog Post "} />

      {/* Blog Posts Area */}
      <section className="py-16 bg-gray-100 px-14">
        <div className="container mx-auto flex flex-wrap">
          <div className="lg:w-2/3 w-full pr-4 lg:pr-8">
            <div className="bg-white p-6 lg:shadow-md mb-8">
              <img
                className="w-full h-[40vh] object-cover mb-4"
                src={blog.image || "https://via.placeholder.com/600x400"}
                alt="Blog Post"
              />
              <ul className="flex space-x-4 mb-4">
                {blog.categories && blog.categories.length > 0 ? (
                  blog.categories.map((category) => (
                    <li key={category._id}>
                      <a href="#" className="text-blue-600 hover:underline">
                        {category.value}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Category
                    </a>
                  </li>
                )}
              </ul>
              <a
                href="#"
                className="text-2xl font-bold text-gray-800 hover:underline"
              >
                {blog.title || "Blog Title"}
              </a>
              <div className="mt-4 text-gray-600">
                <p>{blog.content || "Content not available."}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <span className="mr-2">
                      <i className="fa fa-heart"></i>
                    </span>
                    {blog.likes || "0"} likes
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <span className="mr-2">
                      <i className="fa fa-comment"></i>
                    </span>
                    {blog.comments || "0"} Comments
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

            {/* Comment Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto">
                <h5 className="text-lg font-bold mb-6">
                  {blog.comments && blog.comments.length > 0
                    ? `${blog.comments.length} Comments`
                    : "No Comments"}
                </h5>
                <div className="mb-6">
                  {blog.comments && blog.comments.length > 0 ? (
                    blog.comments.map((comment) => (
                      <div key={comment._id} className="flex items-start mb-6">
                        <img
                          className="w-12 h-12 rounded-full mr-4"
                          src={
                            comment.avatar || "https://via.placeholder.com/48"
                          }
                          alt="Commenter"
                        />
                        <div>
                          <h5 className="font-bold text-gray-800">
                            <a href="#" className="hover:underline">
                              {comment.name || "Anonymous"}
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600">
                            {comment.date || "Date not available"}
                          </p>
                          <p className="text-gray-800 mt-2">
                            {comment.text || "No comment text available."}
                          </p>
                          <a href="#" className="text-blue-600 hover:underline">
                            reply
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No comments available.</p>
                  )}
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
                      name="subject"
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
                    <button className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 w-full pl-4 lg:pl-8">
            <div className="bg-white p-6 lg:shadow-md mb-8">
              <form className="flex items-center border border-gray-300 ">
                <input
                  type="text"
                  placeholder="Search Posts"
                  name="search2"
                  className="w-full p-3 border-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 ml-3"
                >
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="bg-white p-6 lg:shadow-md mb-8">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src={userP.userUrl || "https://via.placeholder.com/96"}
                alt="User"
              />
              <h4 className="font-bold text-gray-800 mb-2">
                <a href="#" className="hover:underline">
                  {userP.userName || "Author Name"}
                </a>
              </h4>
              <p className="text-gray-600 mb-4">
                {blog.authorBio || "Author bio not available."}
              </p>
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

            <div className="bg-white p-6 lg:shadow-md mb-8">
              <h4 className="font-bold text-gray-800 mb-4">Post Categories</h4>
              <ul>
                {blog.categories && blog.categories.length > 0 ? (
                  blog.categories.map((category) => (
                    <li
                      key={category._id}
                      className="flex justify-between mb-2"
                    >
                      <a href="#" className="text-blue-600 hover:underline">
                        {category.value}
                      </a>
                      <span className="text-gray-600">37</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No categories available.</li>
                )}
              </ul>
            </div>

            <div className="bg-white p-6 lg:shadow-md">
              <h4 className="font-bold text-gray-800 mb-4">Recent Posts</h4>
              <div className="space-y-4">{/* Add recent posts here */}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;