// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png'
import Call from '../../../public/assets/call.png'
import Support from '../../../public/assets/support.png'
import Clock from '../../../public/assets/clock.png'
import Email from '../../../public/assets/envelope.png'
import Location from '../../../public/assets/location.png'
import Facebook from '../../../public/assets/facebook.png'
import Instagram from '../../../public/assets/x.png'
import Twitter from '../../../public/assets/ticktok.png'
import LinkedIn from '../../../public/assets/pintress.png'
import Youtube from '../../../public/assets/youtube.png'


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#303360] text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="ml-10 mr-10">
          <h3 className="text-lg font-bold mb-4">Head Office</h3>
          <p className="flex items-center space-x-2 mb-3">
            <Image src={Location} alt="Location Icon" width={20} height={20} />
            <span>30 Onyankle Street</span>
          </p>
          <p className="flex items-center space-x-2 mb-3">
            <Image src={Email} alt="Email Icon" width={20} height={20} />
            <span>info@melaninconnect.net</span>
          </p>
          <p className="flex items-center space-x-2">
            <Image src={Clock} alt="Clock Icon" width={20} height={20} />
            <span>Monday to Saturday: 9.00 am to 4:00 pm</span>
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
            <h2 className="flex items-center gap-2">
              <Image src={Call} alt="Phone Icon" width={20} height={20} />
              <a href="tel:+233541386626" className="text-lg text-orange-500 font-bold hover:text-orange-600">
                +233 541 386 626
              </a>
            </h2>
          </div>

          {/* Email Section */}
          <div>
            <p className="text-sm">Send us an email</p>
            <h2 className="flex items-center gap-2">
              <Image src={Support} alt="Support Icon" width={20} height={20} />
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
