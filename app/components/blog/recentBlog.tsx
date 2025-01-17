import React from "react";
import Image from "next/image";
import img from "@/public/assets/img.png"
import img2 from "@/public/assets/blog (1).png"

const RecentBlogPost: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      <div className="lg:col-span-2">
        <div className="relative overflow-hidden rounded-lg">
          <Image src={img} alt="Blog Post Image" layout="fill" objectFit="cover" className="bg-gray-300 h-64" />
          <div className="p-6 bg-white">
            <p className="text-sm text-orange-500 uppercase mb-2">Lifestyle • Admin • Comment</p>
            <h3 className="text-2xl font-bold text-[#1F244C] mb-4">
              The Next Big Challenge for Content Marketer
            </h3>
            <p className="text-gray-500 mb-4">
              As a process transformation company, we rethink and rebuild processes for the digital age...
            </p>
            <button className="bg-[#FE7146] text-white text-[14px] lg:text-base py-2 lg:py-3 px-6 lg:px-14 rounded-full hover:bg-orange-600 transition w-full sm:w-auto whitespace-nowrap">
                Read More
              </button>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-4">
            <Image src={img2} alt="Blog Post Image" width={80} height={30} className="rounded-lg" />
            <div>
              <p className="text-sm text-orange-500 uppercase mb-1">Lifestyle • Admin • Comment</p>
              <h4 className="text-lg font-bold text-[#1F244C]">
                The 7 Most Beautiful Boutique Hotels in Singapore Worth Traveling
              </h4>
              <button className="bg-[#FE7146] text-white text-[14px] lg:text-base py-2 lg:py-3 px-6 lg:px-14 rounded-full hover:bg-orange-600 transition w-full sm:w-auto whitespace-nowrap">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default RecentBlogPost;
  