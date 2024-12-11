// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Head Office Section */}
        <div>
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
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">AI-Powered Virtual Assistants & Chatbot</a></li>
            <li><a href="#" className="hover:text-orange-500">Predictive Analytics & Sales Forecasting</a></li>
            <li><a href="#" className="hover:text-orange-500">AI-Powered Social Networking Platform</a></li>
            <li><a href="#" className="hover:text-orange-500">Blockchain-Enabled Payment Systems</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Our Partners</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Our Services</a></li>
          </ul>
        </div>
      </div>
      

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">Copyright &copy; 2024. All Rights Reserved.</p>
        <img
          src="/footer-logo.png" // Replace with the path to your footer logo
          alt="Melanin Connect Logo"
          className="h-10 mx-auto mt-4"
        />
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
