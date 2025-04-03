import React from "react";
import Breadcrumb from "../common/Breadcrumb";
// import Team from "../common/team";
import Partners from "../common/partners";
import TestimonialSection from "./TestimonialSection";
import BusinessModelSection from "./BusinessModelSection";
import BusinessStatsSection from "./BusinessStatsSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import Hero from "./hero";

const index = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
       <Breadcrumb title="About" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
        <BusinessModelSection />
        <Hero />
        {/* <Team /> */}
        <BusinessStatsSection />
        <FeaturesSection />
        <FAQSection />
        <TestimonialSection />
        <Partners />
      </div>
    </section>
  );
};

export default index;
