import React from "react";
import Image from "next/image";
import ChatIcon from "@/public/assets/chat.png";
import TweetIcon from "@/public/assets/twitte outline.png";
import EmailIcon from "@/public/assets/envelope.png";

const HelpContact: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md mt-8">
      <h4 className="text-lg font-semibold mb-4">Still Need Help</h4>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <Image
            src={ChatIcon}
            alt="Chat Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="font-semibold">Chat with us:</span>
        </li>
        <span className="block ml-8">9:00am - 5:00pm</span>
        <li className="flex items-center">
          <div className="text-orange-500">
            <Image
              src={TweetIcon}
              alt="Tweet Icon"
              width={24}
              height={24}
              className="mr-2"
            />
          </div>
          <span className="font-semibold">Send us a tweet:</span>
        </li>
        <span className="block ml-8">@melaninconnect</span>

        <li className="flex items-center">
          <Image
            src={EmailIcon}
            alt="Email Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="font-semibold">Email us:</span>
        </li>
        <span className="block ml-8">info@melaninconnect.xyz</span>
      </ul>
    </div>
  );
};

export default HelpContact;
