import React from "react";
import { Link } from "react-router-dom";
import Blogu from "../assets/blog.jpg";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.png";

import {
    User,
    Calendar,
} from "lucide-react";


const posts = [
    {
        id:1,
        image:Blogu,
        title: "The Future of FinTech:AI-Powered Banking Solutions",
        subtitle:"Exploring how artificial intelligence is revolutionizing the financial services industry and creating new opportunities for innovation",
        author:"John Doe",
        date:"10/10/2004"
    },
    {
        id:2,
        image:Blog1,
        title: "The Future of FinTech:AI-Powered Banking Solutions",
        subtitle:"Exploring how artificial intelligence is revolutionizing the financial services industry and creating new opportunities for innovation",
        author:"John Doe",
        date:"10/10/2004"
    },
    {
        id:3,
        image:Blog2,
        title: "The Future of FinTech:AI-Powered Banking Solutions",
        subtitle:"Exploring how artificial intelligence is revolutionizing the financial services industry and creating new opportunities for innovation",
        author:"John Doe",
        date:"10/10/2004"
    },
    {
        id:4,
        image:Blog3,
        title: "The Future of FinTech:AI-Powered Banking Solutions",
        subtitle:"Exploring how artificial intelligence is revolutionizing the financial services industry and creating new opportunities for innovation",
        author:"John Doe",
        date:"10/10/2004"
    },
  
]
const Insights = () => {
  return (  
    <section className="max-w-5xl mx-auto px-4 py-12 font-roboto">
      {/*Our Blog page Title/ header*/}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Latest Insights from{" "}
          <span className="text-green-600">Our Experts</span>
        </h1>
        <p className="text-black text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Stay Updated with the latest trends, insights and innovation in
          technology, fintech, edtech, healthtech industries.
        </p>
      </div>

      {/* Blog Card */}
       {posts.map((post) => (
      <div className="bg-white shadow-md rounded-xl overflow-hidden " key={post.id} >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2" >
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {post.subtitle}
          </p>
         
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-2"> <User className="w-4 h-4"></User> {post.author}</span>
              <span className="flex items-center gap-2"> <Calendar className="w-4 h-4"></Calendar>{post.date}</span>
            </div>
            <Link
              to={`/blog/${post.id}`}
              className="text-green-600 font-medium hover:underline mt-2 md:mt-0"
            >
              Read More
            </Link>
    
        </div>
      </div>
       ))}
    </section>
  );
};

export default Insights;
