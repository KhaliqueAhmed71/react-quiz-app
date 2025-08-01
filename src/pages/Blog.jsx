import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div> 
      <Header
              PageName={"Latest News"}
              PageDetail={"Home / Latest News"}
              Honed={"News Insights"}
            />
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Blog Post 1 */}
      <article className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ICONIC ESTABLISHMENTS ARE REINVENTING</h2>
        <p className="text-gray-700 mb-6">
          Efficiently reinvent installed base opportunities after team driven quality vectors...
        </p>
        <button
          className="text-red-500 font-bold flex items-center cursor-pointer"
          onClick={() => navigate('/blog/poort-1')}
        >
          READ DETAILS <span className="ml-1">❤️</span>
        </button>

      </article>

      {/* Blog Post 2 */}
      <div className="mb-6 mt-12">
        <h1 className="text-4xl font-bold mb-2">FOODIES</h1>
        <div className="text-gray-500">
          <span>24 Feb, 2024</span> • <span>by admin</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">EXPLORING THE WORLD OF FOOD AND WINE</h2>
      <p className="text-gray-700 mb-6">
        Efficiently reinvent installed base opportunities...
      </p>

      <button
        className="text-red-500 font-bold flex items-center cursor-pointer"
        onClick={() => navigate('/blog/foodie-2')}
      >
        READ DETAILS <span className="ml-1">❤️</span>
      </button>

    </div>
    </div>
  );
};

export default Blog;
