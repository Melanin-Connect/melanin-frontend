import React from "react";
import RecentBlogPost from "./recentBlog";
import BlogList from "./blogList";
import LoadMoreButton from "./loadMore";

const Blog = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <div className="bg-gray-50">
    
      <div className="container mx-auto px-4 py-16">
        <RecentBlogPost />
        <BlogList />
        <LoadMoreButton />
      </div>
    </div>
    </div>
    </section>
  );
};

export default Blog;
