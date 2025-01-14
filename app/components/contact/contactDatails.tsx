const ContactDetails = () => (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          icon: "fas fa-map-marker-alt",
          title: "Physical Address",
          description: "30 Onyanklle Street, Accra - Ghana",
        },
        {
          icon: "fas fa-clock",
          title: "Work Hours",
          description: "Monday to Friday: 09:00 am – 05:00 pm",
        },
        {
          icon: "fas fa-envelope",
          title: "Email Address",
          description:
            "info@melaninconnect.net\ncontact@melaninconnect.net",
        },
        {
          icon: "fas fa-phone-alt",
          title: "Phone Numbers",
          description: "+233 541 386 626\n+233 000 000 000",
        },
      ].map((detail, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 text-center"
        >
          <div className="text-orange-500 text-3xl mb-4">
            <i className={detail.icon}></i>
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">{detail.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
            {detail.description}
          </p>
        </div>
      ))}
    </div>
  );
  
  export default ContactDetails;
  