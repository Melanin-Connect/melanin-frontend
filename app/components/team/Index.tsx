import React from "react";
import ProfessionalIntro from "./Introduction";
import TeamMembers from "./Members";
import ContactInfo from "./Contact";

const OurTeam: React.FC = () => {
  return (
    <main className="text-black">
    
      <ProfessionalIntro />
      <TeamMembers />
      <ContactInfo />
    </main>
  );
};

export default OurTeam;
