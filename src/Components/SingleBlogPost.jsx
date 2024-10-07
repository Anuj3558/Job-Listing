import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaSearch, FaHeart, FaComment, FaFacebook, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import Banner from "./Home/ui/Banner";
import SkeletonSidebar from "./SkeletonSidebar";
import CommentSection from "./CommentSection";
import Cookies from "js-cookie";

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const userId = Cookies.get("_id");
  const [likeCount, setLikeCount] = useState(0);
  const [userP, setUserP] = useState({ userName: "", userUrl: "" });
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/singleblog/${id}`;
        const response = await axios.get(url);
        setBlog(response.data?.blog);
        setUserP({
          userName: response.data?.userName,
          userUrl: response.data?.userProfileImg,
        });
        const userLiked = response.data.blog.likes.some(like => like.userId === userId);
        setIsLiked(userLiked);
      } catch (error) {
        setError("Failed to fetch blog post");
        console.error(error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id, userId]);

  useEffect(() => {
    if (blog?.likes && Array.isArray(blog.likes)) {
      setIsLiked(blog.likes.some(like => like === userId));
      setLikeCount(blog.likes.length);
    } else {
      setLikeCount(0);
    }
  }, [blog, userId]);

  const handleLike = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/like/${id}`;
      const response = await axios.post(url, { userId });
      setBlog(prev => ({ ...prev, likes: response.data.likes }));
      setIsLiked(!isLiked);
      setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  if (error) {
    return <div className="text-center text-red-600 py-8 text-xl">{error}</div>;
  }

  if (!blog) {
    return (
      <>
        <Banner page="Blog Post" />
        <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-wrap">
            <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-pulse">
                <div className="w-full h-64 bg-gray-300 mb-4 rounded"></div>
                <div className="h-6 bg-gray-300 mb-4 rounded"></div>
                <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                <div className="h-4 bg-gray-300 mb-4 rounded"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-6 bg-gray-300 mb-6 rounded"></div>
                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
              </div>
            </div>
            <SkeletonSidebar />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Banner page="Blog Post" />
      <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <article className="bg-white p-6 rounded-lg shadow-md mb-8">
              <img
                className="w-full h-64 object-cover mb-6 rounded-lg"
                src={blog.image || "/placeholder.svg?height=400&width=600"}
                alt={blog.title}
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.categories && blog.categories.length > 0 ? (
                  blog.categories.map((category) => (
                    <span key={category._id} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {category.value}
                    </span>
                  ))
                ) : (
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Uncategorized
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {blog.title || "Untitled Blog Post"}
              </h1>
              <div
                className="prose max-w-none mb-6"
                dangerouslySetInnerHTML={{
                  __html: blog.content.slice(7) || "Content not available.",
                }}
              />
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-1 ${
                      isLiked ? "text-red-600" : "text-gray-600"
                    } hover:text-red-600 transition-colors duration-200`}
                    aria-label={isLiked ? "Unlike post" : "Like post"}
                  >
                    <FaHeart />
                    <span>{likeCount}</span>
                  </button>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaComment />
                    <span>{blog.comments.length || "0"} Comments</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <FaFacebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                  <FaDribbble className="text-pink-500 hover:text-pink-600 cursor-pointer" />
                  <FaBehance className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </article>
            <CommentSection blogId={id} />
          </div>
          <aside className="w-full lg:w-1/3 pl-0 lg:pl-8">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Search Posts"
                  className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Search"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src={userP.userUrl || "/placeholder.svg?height=96&width=96"}
                alt={userP.userName || "Author"}
              />
              <h2 className="font-bold text-xl text-gray-800 mb-2">
                {userP.userName || "Author Name"}
              </h2>
              <p className="text-gray-600 mb-4">
                Author bio goes here. This is a brief description of the author.
              </p>
              <div className="flex justify-center space-x-4">
                <FaFacebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
                <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                <FaDribbble className="text-pink-500 hover:text-pink-600 cursor-pointer" />
                <FaBehance className="text-blue-500 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-bold text-xl text-gray-800 mb-4">Post Categories</h3>
              <ul className="space-y-2">
                {blog.categories && blog.categories.length > 0 ? (
                  blog.categories.map((category) => (
                    <li key={category._id} className="flex justify-between items-center">
                      <a href="#" className="text-blue-600 hover:underline">
                        {category.value}
                      </a>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        37
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No categories available.</li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;