// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/melanin.png';
import Call from '../../../public/assets/call.png';
import Support from '../../../public/assets/support.png';
import Clock from '../../../public/assets/clock.png';
import Email from '../../../public/assets/envelope.png';
import Location from '../../../public/assets/location.png';
import Facebook from '../../../public/assets/facebook.png';
import Instagram from '../../../public/assets/x.png';
import Twitter from '../../../public/assets/ticktok.png';
import LinkedIn from '../../../public/assets/pintress.png';
import Youtube from '../../../public/assets/youtube.png';

const Footer: React.FC = () => {
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
                <Image src={Location} alt="Location" width={20} height={20} className="flex-shrink-0" />
                <span className="text-sm">30 Onyankle Street</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Image src={Email} alt="Email" width={20} height={20} className="flex-shrink-0" />
                <span className="text-sm">info@melaninconnect.net</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Image src={Clock} alt="Hours" width={20} height={20} className="flex-shrink-0" />
                <span className="text-sm">Monday to Saturday: 9:00 am - 4:00 pm</span>
              </div>
            </div>
          </div>

          {/* About Section */}

          <div className="space-y-4">
            <h3 className="text-xl font-bold">About</h3>
            <ul className="space-y-2">
              {['Our Partners', 'FAQ', 'Careers', 'Our Services'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              {[
                'AI-Powered Virtual Assistants & Chatbot',
                'Predictive Analytics & Sales Forecasting',
                'AI-Powered Social Networking Platform',
                'Blockchain-Enabled Payment Systems'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
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
                <Image src={Call} alt="Phone" width={20} height={20} className="flex-shrink-0" />
                <Link 
                  href="tel:+233541386626" 
                  className="text-lg font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  +233 541 386 626
                </Link>
              </div>
            </div>

            {/* Email Contact */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Send us an email</p>
              <div className="flex items-center space-x-2">
                <Image src={Support} alt="Support" width={20} height={20} className="flex-shrink-0" />
                <Link 
                  href="mailto:info@melaninconnect.net" 
                  className="text-lg font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  info@melaninconnect.net
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Follow us on social media</p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, LinkedIn, Youtube].map((social, index) => (
                  <Link 
                    key={index} 
                    href="#" 
                    className="transform hover:scale-110 transition-transform duration-200"
                  >
                    <Image src={social} alt="Social" width={24} height={24} />
                  </Link>
                ))}
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
                &copy; {new Date().getFullYear()} Melanin Connect. All Rights Reserved.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Melanin Connect Logo"
                  width={150}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-white mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
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
