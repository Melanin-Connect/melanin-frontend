import React from "react";
import RecentBlogPost from "./recentBlog";
import BlogList from "./blogList";
import LoadMoreButton from "./loadMore";

const Blog = () => {
  return (
    <div className="bg-gray-50">
    
      <div className="container mx-auto px-4 py-16">
        <RecentBlogPost />
        <BlogList />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default Blog;
