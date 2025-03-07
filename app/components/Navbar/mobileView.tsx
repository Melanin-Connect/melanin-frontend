import Image from 'next/image';
import Link from 'next/link';
import Search from '@/public/assets/search.png';
import Call from '@/public/assets/call.png';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void; // Function to toggle the menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex flex-col space-y-4 p-4 w-full">
          {/* Search Input */}
          <div className="flex items-center bg-orange-100 rounded-full p-2 w-full">
            <Image
              src={Search}
              alt="search"
              width={20}
              height={20}
              className="mr-2 ml-2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full text-black outline-none"
            />
          </div>

          {/* Menu Links */}
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            Services
          </Link>
          <Link
            href="/team"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            Our Team
          </Link>
          <Link
            href="/faqs"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            FAQs
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={toggleMenu} // Close menu on click
          >
            Contact
          </Link>

          {/* Call Button */}
          <Link
            href="https://apps.apple.com/"
            className="flex bg-orange-500 text-white rounded-full px-4 py-2 items-center space-x-2 hover:bg-orange-600 transition"
            onClick={toggleMenu} // Close menu on click
          >
            {/* <Image
              className="brightness-0 invert"
              src={Call}
              alt="call"
              width={20}
              height={20}
            /> */}
            <span>Download App</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
