import React from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blogData from "../data/blogData";
import Header from "../components/Header";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  const comments = [
    {
      id: 1,
      name: "Mubashir",
      text: "Great article! Bohat achha likha.",
    },
    {
      id: 2,
      name: "Hina",
      text: "Very insightful, keep posting like this.",
    },
  ];

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800">
      <Header
                    PageName={"Blog Details"}
                    PageDetail={"Home / Blog Details"}
                    Honed={"News Insights"}
                  />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Left Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{blog.category}</h1>
              <p className="text-gray-500">
                {blog.date} • by <span className="font-semibold">admin</span>
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {blog.content}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between border-y py-4 mb-10">
              <button className="flex items-center gap-2 text-red-600 font-semibold hover:underline">
                <FaArrowLeft /> Prev Post
              </button>
              <button className="flex items-center gap-2 text-red-600 font-semibold hover:underline">
                Next Post <FaArrowRight />
              </button>
            </div>

            {/* Comments */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">
                {comments.length} Comments
              </h3>
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-start gap-4 mb-6 bg-gray-50 p-4 rounded-md"
                >
                  <div className="bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    <FaUser />
                  </div>
                  <div>
                    <p className="font-semibold">{comment.name}</p>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded"
                />
                <textarea
                  rows="5"
                  placeholder="Comment"
                  className="w-full border border-gray-300 p-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Search</h4>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 outline-none"
                />
                <div className="bg-red-500 text-white p-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Recent Posts</h4>
              <ul className="space-y-2 text-red-600 font-medium">
                <li>Exploring Food & Wine</li>
                <li>Interior Café Design</li>
                <li>Modern Barista Tools</li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Categories</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Food</li>
                <li>Poorts</li>
                <li>Design</li>
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {["Coffee", "Pizza", "Drinks", "Wine", "Tips"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
