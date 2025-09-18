import React from "react";
import { Link } from "react-router-dom";

const post = {}
const Insights = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 font-roboto">
      {/*Our Blog page Title/ header*/}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Latest Insights from{" "}
          <span className="text-green-600">Our Experts</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Stay Updated with the latest trends, insights and innovation in
          technology, fintech, edtech, healthtech industries.
        </p>
      </div>

      {/* Blog Card */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {post.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span> {post.author}</span>
              <span>{post.date}</span>
            </div>
            <Link
              to={`/blog/${post.id}`}
              className="text-green-600 font-medium hover:underline mt-2 md:mt-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
