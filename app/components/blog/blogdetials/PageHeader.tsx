import React from "react";
const PageHeader = () => {
    return (
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">Marketing Strategy</h1>
        <p className="text-sm font-semibold text-orange-500 mb-6">
          BUSINESS, DEVELOPMENT
        </p>
        <div className="flex items-center justify-center gap-4 text-gray-400">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    );
  };
  
  export default PageHeader;
  