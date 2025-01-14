import React from "react";

const HelpContact: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] p-6 rounded-xl shadow mt-8">
      <h4 className="text-lg font-semibold mb-4">Still Need Help</h4>
      <ul className="space-y-4 text-sm">
        <li>
          <span className="font-semibold">Chat with us:</span> 9:00am - 5:00pm
        </li>
        <li>
          <span className="font-semibold">Send us a tweet:</span>{" "}
          @melaninconnect
        </li>
        <li>
          <span className="font-semibold">Email us:</span>{" "}
          info@melaninconnect.net
        </li>
      </ul>
    </div>
  );
};

export default HelpContact;
