import React from "react";
import Blog from "../components/Blog"
import Header from "../components/Header"
import Pagination from "../components/Pagination";

const BlogPage = () => {
  return (
    <div>
    <Header />
    <Blog />
    <Pagination />
    </div>
  );
};

export default BlogPage;
