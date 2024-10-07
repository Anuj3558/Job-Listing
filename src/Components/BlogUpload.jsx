import axios from "axios";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfile } from "../context/ProfileContext";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";

const categoryOptions = [
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "education", label: "Education" },
];

const BlogUpload = () => {
  const { name } = useProfile();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categories: [],
    image: null,
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      categories: selectedOptions || [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("categories", JSON.stringify(formData.categories));
    formDataToSend.append("image", formData.image);
    setUploading(true);
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/submitblog`;
      const userId = Cookies.get("_id");
      formDataToSend.append("userId", userId);
      const response = await axios.post(url, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploading(false);
      console.log("Blog uploaded:", response.data);

      setFormData({
        title: "",
        content: "",
        categories: [],
        image: null,
      });

      toast.success("Blog uploaded successfully!");
    } catch (error) {
      console.error("Error uploading blog:", error.message);
      toast.error("Error uploading blog. Please try again.");
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6">Upload New Blog Post</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="categories" className="block text-gray-700 mb-2">
                Categories
              </label>
              <Select
                id="categories"
                isMulti
                options={categoryOptions}
                value={formData.categories}
                onChange={handleSelectChange}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <ClipLoader size={20} color={"#ffffff"} loading={uploading} />
                  <span className="ml-2">Uploading...</span>
                </>
              ) : (
                <>
                  <FaUpload className="mr-2" />
                  Upload
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogUpload;