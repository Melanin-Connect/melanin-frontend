import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Index from "../components/services/index";


const page = () => {
  return (
    <div className="bg-white">
      <Breadcrumb title="Services" />
      <Index />
    </div>
  );
};

export default page;
