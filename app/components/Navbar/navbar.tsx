// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.jpg'
import Call from "../../../public/assets/call.png"
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mt-2">
          <Image
            alt='Melanin Logo'
            src={Logo}
            width={200}
            height={200}
          />

        </div>

       
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="#" className="text-[#FE7146]">
            Home
          </Link>
          <Link href="#about" className="hover:text-orange-500">
            About Us
          </Link>
          <Link href="#services" className="hover:text-orange-500">
            Services
          </Link>
          <Link href="#team" className="hover:text-orange-">
            Our Team
          </Link>
          <Link href="#faqs" className="hover:text-orange-500">
            FAQs
          </Link>
          <Link href="#blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Search and Contact */}
        <div className="flex items-center mr-4 space-x-4">
          {/* Search Icon */}
          <div className="hidden md:block bg-orange-100 rounded-full p-2">
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
                d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </div>

          {/* Phone Button */}
          <Link
            href="tel:+2330000000000"
            className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-orange-600"
          >
            <Image 
              className="brightness-0 invert"
              src={Call}
              alt='call'
              width={20}
              height={20}
            />
            <span>+233 000 000 0000</span>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
