import React from "react";

const posts = [
  {
    imgSrc: "img/p1.png",
    title: "Creative Designer",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.",
  },
  {
    imgSrc: "img/p2.png",
    title: "Creative Designer",
    location: "Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.",
  },
  // Add more posts as needed
];

const PostArea = () => {
  return (
    <section className="popular-post-area pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="carousel w-full flex space-x-4 overflow-x-auto">
            {posts.map((post, index) => (
              <div
                key={index}
                className="single-popular-post flex flex-row bg-white border rounded-lg shadow-md overflow-hidden"
              >
                <div className="thumb relative">
                  <img
                    className="w-64 h-40 object-cover"
                    src={post.imgSrc}
                    alt={post.title}
                  />
                  <a
                    className="btns absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-center py-2 uppercase"
                    href="#"
                  >
                    View Job Post
                  </a>
                </div>
                <div className="details p-4">
                  <a href="#">
                    <h4 className="text-xl font-semibold mb-1">{post.title}</h4>
                  </a>
                  <h6 className="text-gray-600 mb-2">{post.location}</h6>
                  <p className="text-gray-700">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostArea;
