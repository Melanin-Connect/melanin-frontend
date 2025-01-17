import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Index from "../components/services/index";


const page = () => {
  return (
    <div className="mt-2 bg-white">
      <Breadcrumb title="AI-Powered Virtual Assistants & Chatbots" />
      <Index />
    </div>
  );
};

export default page;
