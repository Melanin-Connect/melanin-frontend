import React from "react";

const Breadcrumb = () => {
    return (
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          <span className="text-gray-800">Home</span> {" > "} Blog {" > "}
          <span className="font-medium text-gray-800">Marketing Strategy</span>
        </p>
      </div>
    );
  };
  
  export default Breadcrumb;
  