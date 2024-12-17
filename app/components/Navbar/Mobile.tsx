'use client';

import Image from 'next/image';
import Link from 'next/link';
import Search from '@/public/assets/search.png';
import Call from '@/public/assets/call.png';


interface MobileMenuProps {
  isOpen: boolean;  
  ToggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen , ToggleMenu}) => {


  if (!isOpen) return null;

  return (
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
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-orange-500 transition">
            About Us
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-orange-500 transition">
            Services
          </Link>
          <Link href="#team" className="text-gray-700 hover:text-orange-500 transition">
            Our Team
          </Link>
          <Link href="#faqs" className="text-gray-700 hover:text-orange-500 transition">
            FAQs
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-orange-500 transition">
            Blog
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-orange-500 transition">
            Contact
          </Link>
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
  );
};

export default MobileMenu;
