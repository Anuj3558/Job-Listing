import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import Banner from "./Home/ui/Banner";
import SkeletonSidebar from "./SkeletonSidebar"; // Import the SkeletonSidebar component
import CommentSection from "./CommentSection";
import Cookies from "js-cookie";

const BlogSingle = () => {
  const { id } = useParams(); // Get the blog ID from URL parameters
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const userId = Cookies.get("_id");
  const [likeCount, setLikeCount] = useState();

  const [userP, setUserP] = useState({
    userName: "",
    userUrl: "",
  });
  const [isLiked, setIsLiked] = useState(false); // Track if the blog is liked

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/singleblog/${id}`; // API endpoint
        const response = await axios.get(url); // Fetch data
        setBlog(response.data?.blog); // Set data to state
        setUserP({
          userName: response.data?.userName,
          userUrl: response.data?.userProfileImg,
        });

        // Check if the user has already liked the blog
        const userLiked = response.data.blog.likes.some(
          (like) => like.userId === userId
        );
        setIsLiked(userLiked); // Update isLiked state
      } catch (error) {
        setError("Failed to fetch blog post");
        console.error(error); // Log error
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id, userId]); // Add userId to dependency array to re-fetch if it changes
  useEffect(() => {
    console.log("likes->", blog?.likes);

    if (blog?.likes && Array.isArray(blog.likes)) {
      // Check if the user has liked the blog
      blog.likes.forEach((like) => {
        if (like === userId) {
          setIsLiked(true);
        }
      });
      // Set the like count
      setLikeCount(blog.likes.length);
    } else {
      // Default to 0 if likes is undefined or not an array
      setLikeCount(0);
    }
  }, [blog, isLiked]);

  const handleLike = async () => {
    const userId = Cookies.get("_id");
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/like/${id}`; // API endpoint for liking the blog
      const response = await axios.post(url, { userId }); // Send userId as an object

      // Assuming response.data.likes returns the updated like count
      setBlog((prev) => ({ ...prev, likes: response.data.likes })); // Update state with new like count
      setIsLiked(true); // Update local like state to true
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return (
      <>
        {/* Banner Area */}
        <Banner page={"Blog Post "} />

        {/* Blog Posts Area */}
        <section className="py-16 bg-gray-100 px-14">
          <div className="container mx-auto flex flex-wrap">
            <div className="lg:w-2/3 w-full pr-4 lg:pr-8">
              <div className="bg-white p-6 lg:shadow-md mb-8">
                <div className="w-full h-[40vh] bg-gray-300 mb-4"></div>
                <div className="h-6 bg-gray-300 mb-4"></div>
                <div className="h-4 bg-gray-300 mb-4"></div>
                <div className="h-4 bg-gray-300 mb-6"></div>
                <div className="h-4 bg-gray-300 mb-4"></div>
                <div className="h-4 bg-gray-300 mb-4"></div>
              </div>

              {/* Comment Section */}
              <section className="py-16 bg-white">
                <div className="container mx-auto">
                  <div className="h-6 bg-gray-300 mb-6"></div>
                  <div className="h-4 bg-gray-300 mb-6"></div>
                </div>
              </section>

              {/* Comment Form Area */}
              <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                  <div className="h-6 bg-gray-300 mb-6"></div>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 pr-4">
                      <div className="h-4 bg-gray-300 mb-4"></div>
                      <div className="h-4 bg-gray-300 mb-4"></div>
                      <div className="h-4 bg-gray-300 mb-4"></div>
                    </div>
                    <div className="w-full lg:w-2/3 pl-4">
                      <div className="h-4 bg-gray-300 mb-4"></div>
                      <div className="h-6 bg-gray-300 mb-4"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Sidebar */}
            <SkeletonSidebar /> {/* Show skeleton loading */}
          </div>
        </section>
      </>
    );
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
                      <a href="#" className="text-red-600 hover:underline">
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

              <div
                className="border-none"
                dangerouslySetInnerHTML={{
                  __html: blog.content.slice(7) || "Content not available.",
                }}
              />

              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <FaHeart
                    onClick={() => {
                      setIsLiked(!isLiked);

                      if (!isLiked) {
                        setLikeCount(likeCount + 2);
                        handleLike();
                      } else {
                        setLikeCount(likeCount - 1);
                        handleLike();
                      }
                    }}
                    className={`mr-2 ${
                      isLiked ? "text-red-600" : "text-gray-400"
                    }`}
                  />
                  <span>{likeCount}</span> {/* Show like count */}
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <span className="mr-2">
                      <i className="fa fa-comment"></i>
                    </span>
                    {blog.comments.length || "0"} Comments
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
            <CommentSection blogId={id} />
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

            
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
