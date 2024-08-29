import axios from "axios";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfile } from "../context/ProfileContext";

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
  const[uploading,setUploading]=useState(false)

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
    formDataToSend.append("categories", JSON.stringify(formData.categories)); // Convert categories to a JSON string
    formDataToSend.append("image", formData.image);
    setUploading(true);
    try {
      const url = "http://localhost:8080/submitblog";
      const response = await axios.post(url, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploading(false)
      console.log("Blog uploaded:", response.data);

      // Reset form fields
      setFormData({
        title: "",
        content: "",
        categories: [],
        image: null,
      });

      // Show success toast message
      toast.success("Blog uploaded successfully!");
    } catch (error) {
      console.error("Error uploading blog:", error.message);
      toast.error("Error uploading blog. Please try again.");
    }
  };

 return (
   <section className="py-16 bg-gray-100 px-14">
     <div className="container mx-auto">
       <h2 className="text-3xl font-bold mb-6">Upload New Blog Post</h2>
       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
         <div className="mb-4">
           <label htmlFor="title" className="block text-gray-700 mb-2">
             Title
           </label>
           <input
             type="text"
             id="title"
             name="title"
             value={formData.title}
             onChange={handleChange}
             className="w-full p-3 border border-gray-300 rounded"
             required
           />
         </div>
         <div className="mb-4">
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
         <div className="mb-4">
           <label htmlFor="content" className="block text-gray-700 mb-2">
             Content
           </label>
           <textarea
             id="content"
             name="content"
             value={formData.content}
             onChange={handleChange}
             className="w-full p-3 border border-gray-300 rounded"
             rows="6"
             required
           ></textarea>
         </div>
         <div className="mb-4">
           <label htmlFor="image" className="block text-gray-700 mb-2">
             Image
           </label>
           <input
             type="file"
             id="image"
             name="image"
             onChange={handleChange}
             className="w-full border border-gray-300 rounded"
             accept="image/*"
           />
         </div>
         <button
           type="submit"
           className="bg-blue-600 text-white py-2 px-4 rounded flex items-center"
         >
           <FaUpload className="mr-2" />
           {uploading ? <>Uploading</> : <>Upload</>}
         </button>
       </form>
     </div>
     <ToastContainer />
   </section>
 );

};

export default BlogUpload;