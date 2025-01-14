import React from "react";


const VisitUsSection = () => {
  return (
    <section className="bg-[#FAFAFF] relative">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[50%]"></div>

      <div className="  container mx-auto px-4 py-16 relative z-10">
        <div className=" items-start justify-start text-start mb-12">
          <h4 className="text-orange-500 font-semibold text-sm uppercase mb-2">
            Solve Your Business Issues
          </h4>
          <h2 className="text-3xl font-bold text-[#1F244C] mb-4">
            Visit us Anytime
          </h2>
          <p className="text-gray-500 text-sm">
            Keeping your eye on the ball while performing a deep dive on the
            <br />
            start-up mentality to derive convergence.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-sm rounded-xl p-6 text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-lg font-bold text-[#1F244C] mb-2">
              Physical Address
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              30 Onyanklle Street
              <br />
              Accra - Ghana
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm rounded-xl p-6 text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-lg font-bold text-[#1F244C] mb-2">Work Hours</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Monday to Friday:
              <br />
              09:00 am – 05:00 pm
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-sm rounded-xl p-6 text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-lg font-bold text-[#1F244C] mb-2">
              Email Address
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              info@melaninconnect.net
              <br />
              contact@melaninconnect.net
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-sm rounded-xl p-6 text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-lg font-bold text-[#1F244C] mb-2">
              Phone Numbers
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              +233 541 386 626
              <br />
              +233 000 000 000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
