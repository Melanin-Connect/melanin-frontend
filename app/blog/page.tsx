import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Blog from "../components/blog/blog";


const page = () => {
  return (
    <div>
      <Breadcrumb title="blog" />
      <Blog />
   
    </div>
  );
};

export default page;
