// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer: React.FC = () => {
    const LinkedIn ="https://res.cloudinary.com/ecosheane/image/upload/v1744531893/ticktok_faj76l.png"


    const  Youtube ="https://res.cloudinary.com/ecosheane/image/upload/v1744531894/youtube_wndigx.png"
    const Instagram ="https://res.cloudinary.com/ecosheane/image/upload/v1744531886/pintress_ajsuyj.png"
    const Facebook ="https://res.cloudinary.com/ecosheane/image/upload/v1744531870/facebook_od2rvv.png"
    const Twitter = "https://res.cloudinary.com/ecosheane/image/upload/v1744531894/x_fi90iv.png"
  return (
    <footer className="bg-[#303360] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Head Office</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531880/location_lsplav.png"
                  alt="Location"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="text-sm">71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Image
                  src=  "https://res.cloudinary.com/ecosheane/image/upload/v1744531870/envelope_ski8ed.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="text-sm">info@melaninconnect.xyz</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531865/clock_zrwjvf.png"
                  alt="Hours"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="text-sm">
                  Monday to Saturday: 9:00 am - 4:00 pm
                </span>
              </div>
            </div>
          </div>

          {/* About Section */}

          <div className="space-y-4">
            <h3 className="text-xl font-bold">About</h3>
            <ul className="space-y-2">
              {[
                { name: "Our Partners", link: "/about" },
                { name: "FAQ", link: "/faqs" },
                { name: "Careers", link: "/careers" },
                { name: "Our Services", link: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              {[
                {
                  name: "AI-Powered Virtual Assistants & Chatbot",
                  link: "/services",
                },
                {
                  name: "Predictive Analytics & Sales Forecasting",
                  link: "/services",
                },
                {
                  name: "AI-Powered Social Networking Platform",
                  link: "/services",
                },
                {
                  name: "Blockchain-Enabled Payment Systems",
                  link: "/services",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            {/* Phone Contact */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Have Any Questions?</p>
              <div className="flex items-center space-x-2">
                <Image
                  src= "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/call_y8lrpd.png"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <Link
                  href="tel:+233541386626"
                  className="text-lg font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  +233 000000
                </Link>
              </div>
            </div>

            {/* Email Contact */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Send us an email</p>
              <div className="flex items-center space-x-2">
                <Image
                  src= "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/chat_tyarcx.png"
                  alt="Support"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <Link
                  href="mailto:info@melaninconnect.net"
                  className="text-lg font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  info@melaninconnect.xyz
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Follow us on social media</p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, LinkedIn, Youtube].map(
                  (social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="transform hover:scale-110 transition-transform duration-200"
                    >
                      <Image src={social} alt="Social" width={24} height={24} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Melanin Connect. All Rights
                Reserved.
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531882/melanin_cbyyuk.png"
                  alt="Melanin Connect Logo"
                  width={150}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
            </div>

            <div className="text-center md:text-right">
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-white mr-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
