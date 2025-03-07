'use client';
import React, { useState } from 'react';
import MobileMenu from './mobileView';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/melanin.png'; 
import Call from '@/public/assets/call.png';
import Menu from '@/public/assets/Menu.png';
import Close from '@/public/assets/close.png';
import Search from '@/public/assets/search.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mock data for the website pages. Replace this with a real data source (e.g., CMS, API).
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: 'about' },
    { title: 'Services', url: 'services' },
    { title: 'Our Team', url: 'team' },
    { title: 'FAQs', url: 'faqs' },
    { title: 'Blog', url: 'blog' },
    { title: 'Contact', url: 'contact' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filter pages that match the query (case-insensitive).
    const results = pages.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results.map((result) => result.url));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container flex items-center justify-between p-4">
          {/* Logo Section */}
          <div className="cursor-pointer flex items-start">
            <Link href="/">
              <Image alt="Melanin Logo" src={Logo} width={120} height={120} />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex sm:flex sm:text-sm md:text-sm lg:text-base space-x-4 lg:space-x-6 font-medium text-gray-700">
            {pages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="hover:text-orange-500 transition"
              >
                {page.title}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block relative">
            <div className="flex items-center bg-orange-100 rounded-full p-2">
              <Image
                src={Search}
                alt="search"
                width={20}
                height={20}
                className="mr-2"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="bg-transparent w-full text-black outline-none"
              />
            </div>
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-md w-full z-50">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result}
                    onClick={clearSearch}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                  >
                    {result}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Call Button */}
          <Link
            href="tel:+2330000000000"
            className="hidden md:flex bg-orange-500 text-white rounded-full px-4 py-2 items-center space-x-2 hover:bg-orange-600 transition text-sm lg:text-base"
          >
            {/* <Image
              className="brightness-0 invert"
              src={Call}
              alt="call"
              width={20}
              height={20}
            /> */}
            <span>Join Wishlist</span>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isMenuOpen ? (
              <Image
                src={Close}
                alt="Close"
                width={40}
                height={40}
                style={{
                  filter:
                    'invert(50%) sepia(100%) saturate(5000%) hue-rotate(360deg) brightness(90%) contrast(100%)',
                }}
              />
            ) : (
              <Image src={Menu} alt="Menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
