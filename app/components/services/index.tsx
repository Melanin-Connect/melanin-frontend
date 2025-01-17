import React from "react";
import Services from "./Services";
import WorkingProcess from "./WorkingProcess";
import Newsletter from "./Newsletter";


const ServicesPage: React.FC = () => {
  return (
    <main className=" text-black">
      
      <Services />
      <WorkingProcess />
      <Newsletter />
    </main>
  );
};

export default ServicesPage;
