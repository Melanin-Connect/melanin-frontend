import React from "react";
import Image from "next/image";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const TeamMembers = () => {
  const member = {
    name: "Edward Owusu",
    role: "CEO & Founder",
    description:
      "A highly skilled digital media strategist with extensive experience in advertising, social media management, mobile applications, content creation, and graphic design. Adept at crafting and executing effective advertising strategies that drive engagement and brand growth. Experienced in managing the full project lifecycle—from strategic planning and team resourcing to performance monitoring and the timely delivery of high-quality outputs. Possesses excellent communication skills, fostering strong leadership among colleagues and building valuable relationships with clients and stakeholders across all professional levels.",
    x: "https://twitter.com/jhanwick",
    facebook: "https://facebook.com/jhanwick",
    instagram: "https://instagram.com/jhanwick",
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-blue-600 font-semibold uppercase tracking-wider mb-2">Leadership</h6>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left side: Photo with backdrop */}
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              {/* Decorative elements */}
            
              {/* Main image */}
              <div className="relative z-10 bg-white rounded-lg  p-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/ecosheane/image/upload/v1744531881/mate3_rkwrhq.jpg"
                    alt={member.name}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Social links on image */}
                <div className="flex justify-center mt-4 space-x-4 py-3">
                  <a 
                    href={member.x} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FaXTwitter className="text-xl text-gray-800" />
                  </a>
                  <a 
                    href={member.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FaFacebookF className="text-xl text-gray-800" />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FaInstagram className="text-xl text-gray-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Text content */}
          <div className="w-full lg:w-3/5 bg-white rounded-lg  p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              {member.description.split('.').filter(Boolean).map((sentence, idx) => (
                <p key={idx}>{sentence.trim()}.</p>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Media Strategy", "Advertising", "Social Media", "Content Creation", "Leadership"].map((skill, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;