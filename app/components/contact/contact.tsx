import React from "react";

import Locations from "./Location";
import ContactDetails from "./contactDatails";
import MapSection from "./mapsection";
import ContactForm from "./form";

const Contact = () => {
  return (
    <div className="bg-gray-50">
 
      <Locations />
      <ContactDetails />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <MapSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
