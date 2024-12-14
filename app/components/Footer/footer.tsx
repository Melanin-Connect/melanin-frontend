// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png'
import Call from '../../../public/assets/call.png'
import Email from '../../../public/assets/email.png'
import Location from '../../../public/assets/location.png'
import Facebook from '../../../public/assets/Frame (1).png'
import Instagram from '../../../public/assets/Frame (2).png'
import Twitter from '../../../public/assets/Frame (3).png'
import LinkedIn from '../../../public/assets/Frame (4).png'
import Youtube from '../../../public/assets/Frame.png'


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#303360] text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Head Office Section */}
        <div className="ml-10 mr-10">
          <h3 className="text-lg font-bold mb-4">Head Office</h3>
          <p className="flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13 21l-4.657-4.343C6.929 15.657 5.778 14.637 5.778 12.778a6.778 6.778 0 1113.556 0c0 1.859-1.151 2.88-1.677 3.879z"
                />
              </svg>
            </span>
            <span>30 Onyankle Street</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.318 16.318a4 4 0 01-5.636 0L6.75 12.75a6 6 0 018.485-8.485l3.182 3.182a4 4 0 010 5.636l-3.182 3.182z"
                />
              </svg>
            </span>
            <span>info@melaninconnect.net</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2m-9 2a7.978 7.978 0 001.757 3.935m12.01-12.01A8.003 8.003 0 0112 20.937"
                />
              </svg>
            </span>
            <span>Monday to Saturday: 9:00 am to 4:00 pm</span>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Our Partners</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Our Services</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="-ml-8">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">AI-Powered Virtual Assistants & Chatbot</a></li>
            <li><a href="#" className="hover:text-orange-500">Predictive Analytics & Sales Forecasting</a></li>
            <li><a href="#" className="hover:text-orange-500">AI-Powered Social Networking Platform</a></li>
            <li><a href="#" className="hover:text-orange-500">Blockchain-Enabled Payment Systems</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          {/* Contact Section */}
          <div>
            <p className="text-sm">Have Any Questions?</p>
            <h2>
              <a href="tel:+233541386626" className="text-lg text-orange-500 font-bold hover:text-orange-600">
                +233 541 386 626
              </a>
            </h2>
          </div>

          {/* Email Section */}
          <div>
            <p className="text-sm">Send us an email</p>
            <h2>
              <a href="mailto:info@melaninconnect.net" className="text-lg text-orange-500 font-bold hover:text-orange-600">
                info@melaninconnect.net
              </a>
            </h2>
          </div>

          {/* Social Media Section */}
          <div>
            <p className="text-sm mb-3">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image src={Instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image src={Twitter} alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image src={Youtube} alt="Youtube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-700 mt-10 pt-6">
        <div className="grid grid-cols-3 items-center justify-center gap-4">
          
        <div className="text-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Melanin Connect. All Rights Reserved.
            </p>
          </div>
         
          
          <div className="flex justify-center">
            <Image 
              alt='Melanin Connect Logo'
              src={Logo}
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300">
              Privacy Policy | Terms of Service
            </p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
