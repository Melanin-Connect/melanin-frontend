import React from "react";
import Locations from "./Location";
import ContactDetails from "./contactDatails";
import MapSection from "./mapsection";
import ContactForm from "./form";

const Contact = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="bg-gray-50">
 
      <Locations />
      <ContactDetails />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <MapSection />
        <ContactForm />
      </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;
