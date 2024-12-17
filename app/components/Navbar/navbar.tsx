'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/Logo.jpg'; 
import Call from '../assets/call.png';
import Menu from '../assets/Menu.png';
import Close from '../assets/close.png';
import Search from '../assets/search.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container flex items-center justify-between p-4">
          {/* Logo Section */}
          <div className="cursor-pointer flex items-start">
            <Link href="/">
              <Image alt="Melanin Logo" src={Logo} width={120} height={120} priority />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex sm:flex sm:text-sm md:text-sm lg:text-base space-x-4 lg:space-x-6 font-medium text-gray-700">
            <Link href="/" className="text-[#FE7146]">Home</Link>
            <Link href="#about" className="hover:text-orange-500 transition">About Us</Link>
            <Link href="#services" className="hover:text-orange-500 transition">Services</Link>
            <Link href="#team" className="hover:text-orange-500 transition">Our Team</Link>
            <Link href="#faqs" className="hover:text-orange-500 transition">FAQs</Link>
            <Link href="#blog" className="hover:text-orange-500 transition">Blog</Link>
            <Link href="#contact" className="hover:text-orange-500 transition">Contact</Link>
          </nav>

          {/* Call Button and Search Icon */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Icon */}
            <div className="hidden md:block bg-orange-100 rounded-full p-2">
              <Image src={Search} alt="search" width={20} height={20} className="mr-2 ml-2" />  
            </div>

            {/* Phone Button */}
            <Link
              href="tel:+2330000000000"
              className="hidden md:flex bg-orange-500 text-white sm:text-[2] md:text-sm rounded-full px-3 lg:px-4 py-2 items-center space-x-1 lg:space-x-2 hover:bg-orange-600 transition text-sm lg:text-base"
            >
              <Image
                className="brightness-0 invert lg:w-[20px] lg:h-[20px]"
                src={Call}
                alt="call"
                width={16}
                height={16}
              />
              <span>+233 000 000 0000</span>
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
              {isMenuOpen ? (
                <Image 
                  src={Close} 
                  alt="Close" 
                  width={40} 
                  height={40} 
                  style={{ filter: 'invert(50%) sepia(100%) saturate(5000%) hue-rotate(360deg) brightness(90%) contrast(100%)' }} 
                />
              ) : (
                <Image src={Menu} alt="Menu" width={24} height={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between p-4">
            <nav className="flex flex-col space-y-4 p-4 w-full">
              <div className="flex items-center bg-orange-100 rounded-full p-2 w-full">
                <Image src={Search} alt="search" width={20} height={20} className="mr-2 ml-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent w-full outline-none"
                />
              </div>
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-500 transition">About Us</Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</Link>
              <Link href="#team" className="text-gray-700 hover:text-orange-500 transition">Our Team</Link>
              <Link href="#faqs" className="text-gray-700 hover:text-orange-500 transition">FAQs</Link>
              <Link href="#blog" className="text-gray-700 hover:text-orange-500 transition">Blog</Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact</Link>
              <Link
                href="tel:+2330000000000"
                className="flex bg-orange-500 text-white rounded-full px-4 py-2 items-center space-x-2 hover:bg-orange-600 transition"
              >
                <Image
                  className="brightness-0 invert"
                  src={Call}
                  alt="call"
                  width={20}
                  height={20}
                />
                <span>+233 000 000 0000</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
