import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Team from "../common/team";
import Partners from "../common/partners";
import Applications from "./applications";

const index = () => {
  return (
    <div>
      <Breadcrumb title="About" />
      <Team />
      <Applications />
      <Partners />
    </div>
  );
};

export default index;
