import React from "react";
import Services from "./Services";
import WorkingProcess from "./WorkingProcess";
import Newsletter from "./Newsletter";


const ServicesPage: React.FC = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <Services />
      <WorkingProcess />
   
    </div>
       <Newsletter /> 
    </section>
  );
};

export default ServicesPage;
