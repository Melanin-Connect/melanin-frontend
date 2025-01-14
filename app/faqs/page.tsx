import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import FAQS  from "../components/faqs/faq"


const page = () => {
  return (
    <div  className="bg-white">
      <Breadcrumb title="Frequently Asked Questions" />
      <FAQS />  
    
    </div>
  );
};

export default page;
