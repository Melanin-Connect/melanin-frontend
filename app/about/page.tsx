import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Team from "../components/common/team"
import Partners from "../components/common/partners";


const page = () => {
  return (
    <div>
      <Breadcrumb title="About" />
      <Team />
      <Partners />
     
    </div>
  );
};

export default page;
