import React from "react";

const NavigationSection = () => {
    return (
      <div className="mt-12 flex justify-between items-center">
        <button className="text-gray-500 hover:text-orange-500">← Previous Post</button>
        <button className="text-gray-500 hover:text-orange-500">Next Post →</button>
      </div>
    );
  };
  
  export default NavigationSection;
  