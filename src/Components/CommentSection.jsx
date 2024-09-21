import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// Utility function to convert timestamp to "time ago" format
const timeAgo = (timestamp) => {
  const now = new Date();
  const commentDate = new Date(timestamp);
  const secondsAgo = Math.floor((now - commentDate) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hours ago`;
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) return `${daysAgo} days ago`;
  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) return `${weeksAgo} weeks ago`;
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} months ago`;
  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} years ago`;
};

const CommentSection = ({ blogId }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const userId = Cookies.get("_id");
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    fetchComments(); // Fetch comments when the component mounts or blogId changes
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/comments/${blogId}`;
      const response = await axios.get(url);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      // Redirect to login page if user is not logged in
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blog/comment`,
        {
          blogId,
          userId,
          content,
        }
      );
      console.log("Comment submitted:", response.data);
      setComments([...comments, response.data]); // Update comments state
      setContent(""); // Clear the input field
    } catch (error) {
      console.error(
        "Error adding comment:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-6">Comments</h3>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="flex items-center mb-6">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment"
            required
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        {/* Comments List */}
        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="flex items-start mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={comment.userProfile || "https://via.placeholder.com/48"}
                  alt="Commenter"
                />
                <div>
                  <h5 className="font-bold text-gray-800">
                    <a href="#" className="hover:underline">
                      {comment.name || "Anonymous"}
                    </a>
                  </h5>
                  <p className="text-sm text-gray-600">
                    {timeAgo(comment.createdAt) || "Date not available"}
                  </p>
                  <p className="text-gray-800 mt-2">
                    {comment.content || "No comment text available."}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
