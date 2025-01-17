import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Contact from "../components/contact/contact";

const page = () => {
  return (
    <div className="bg-[#F5F5FD]">
      <Breadcrumb title="contact" />
      <Contact />
    
    </div>
  );
};

export default page;
