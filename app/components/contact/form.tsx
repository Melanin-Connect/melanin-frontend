const ContactForm = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-[#1F244C] mb-6">Send a Message</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Subject (Optional)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder="Here go your message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-bold rounded-3xl hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
  
  export default ContactForm;
  