import React from "react";

const BlogList: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="rounded-lg  overflow-hidden">
          <div className="bg-gray-300 h-64"></div> {/* Placeholder for the image */}
          <div className="p-6 bg-white">
            <p className="text-sm text-orange-500 uppercase mb-2">Lifestyle • Admin • Comment</p>
            <h4 className="text-xl font-bold text-[#1F244C] mb-4">
              The Next Big Challenge for Content Marketer
            </h4>
            <p className="text-gray-500 mb-4">
              As a process transformation company, we rethink and rebuild processes for the digital age...
            </p>
            <button className="bg-[#FE7146] text-white text-[14px] lg:text-base py-2 lg:py-3 px-6 lg:px-14 rounded-full hover:bg-orange-600 transition w-full sm:w-auto whitespace-nowrap">
                Register Now
              </button>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default BlogList;
  