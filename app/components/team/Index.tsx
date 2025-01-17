import React from "react";
import ProfessionalIntro from "./Introduction";
import TeamMembers from "./Members";
import ContactInfo from "./Contact";

const OurTeam: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfessionalIntro />
        <TeamMembers />
        <ContactInfo />
      </div>
    </section>
  );
};

export default OurTeam;
