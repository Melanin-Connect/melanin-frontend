import React from "react";

const Sidebar: React.FC = () => {
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
            className={`${
              index === 0 ? "text-white bg-orange-400" : "text-gray-700"
            } px-4 py-2 rounded-lg text-sm font-medium cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
