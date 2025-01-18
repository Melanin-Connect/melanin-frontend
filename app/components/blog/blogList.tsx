import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/_image (1).png"
import Link from "next/link";

const BlogList: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="rounded-lg overflow-hidden">
          <Image src={image1} alt="Placeholder" width={200} height={200} className="w-full h-64 object-cover" />
          <div className="p-6 bg-white">
            <p className="text-sm text-orange-500 uppercase mb-2">Lifestyle • Admin • Comment</p>
            <h4 className="text-xl font-bold text-[#1F244C] mb-4">
              The Next Big Challenge for Content Marketer
            </h4>
            <p className="text-gray-500 mb-4">
              As a process transformation company, we rethink and rebuild processes for the digital age...
            </p>
            <Link href="/blogdetials">
                <button className="bg-[#FE7146] text-white text-sm lg:text-base py-2 px-6 rounded-full hover:bg-orange-600 transition">
                  Read More →
                </button>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default BlogList;
  