import React from "react";

const Breadcrumb = () => {
    return (
      <div className="mb-6 bg-gray-100 p-3 w-full">
        <p className="text-sm text-gray-600">
          <span className="text-gray-800">Home</span> {" > "} Blog {" > "}
          <span className="font-medium text-gray-800">Marketing Strategy</span>
        </p>
      </div>
    );
  };
  
  export default Breadcrumb;
  