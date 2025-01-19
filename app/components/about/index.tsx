import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Team from "../common/team";
import Partners from "../common/partners";
import TestimonialSection from "./TestimonialSection";
import BusinessModelSection from "./BusinessModelSection";
import BusinessStatsSection from "./BusinessStatsSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import Hero from "./hero"

const index = () => {
  return (
    <div>
      <Breadcrumb title="About" />
      <BusinessModelSection />
      <Hero />
      
      <Team />
      <BusinessStatsSection />
      <FeaturesSection />
      <FAQSection />


    <TestimonialSection />
      <Partners />
    </div>
  );
};

export default index;


