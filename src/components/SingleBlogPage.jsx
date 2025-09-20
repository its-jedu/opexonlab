import React from "react";
import { useParams, Link } from "react-router-dom";


const posts = [];

const SingleBlogPage = () => {
  const { id } = useParams(); // get blog id from URL
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 font-roboto">
        <h2 className="text-xl font-semibold text-red-600">Post not found</h2>
        <Link
          to="/blog"
          className="text-green-600 hover:underline inline-block mt-3"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 font-roboto">
      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
      />

      {/* Title of Blog Jedu */}
      <h1 className="text-2xl md:text-3xl font-bold mb-3">{post.title}</h1>
      <h2 className="text-gray-600 text-lg mb-4">{post.subtitle}</h2>

      {/* Author name and Date Jedu */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>

      {/* Content Area Jedu Like Write Up / Stories */}
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        {post.content}
      </div>

      {/* Back link to Blog Page Jedu */}
      <Link
        to="/blog"
        className="mt-8 inline-block text-green-600 font-medium hover:underline"
      >
        ← Back to Blog
      </Link>
    </article>
  );
};

export default SingleBlogPage;
