import React from "react";
interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategoryChange }) => {
  const menuItems = [
    "Platform",
    "Partners",
    "Appointment and Session",
    "Payment",
    "Data Privacy",
    "Data Security",
    "Technical Issues",
  ];

  return (
    <div className="bg-[#F9F9F9] p-6 rounded-xl w-full md:w-[300px] shadow">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
              selectedCategory === item ? "text-white bg-orange-400" : "text-gray-700"
            }`}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
