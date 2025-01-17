import React from "react";
import Image from "next/image";
import imgMain from "@/public/assets/img.png";
import imgSmall from "@/public/assets/_image (1).png";

const RecentBlogPost: React.FC = () => (
  <section className="bg-[#F8F8FB] max-w-[1400px] py-12">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center mb-8">
        <p className="text-orange-500 text-sm uppercase font-semibold mb-2">
          Latest News
        </p>
        <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold">
          Recent blog post
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Post */}
        <div className=" w-[680px] lg:col-span-2">
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={imgMain}
                alt="Main Blog Post Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md px-4 py-2 text-center">
                <p className="text-sm font-bold text-[#1F244C]">17</p>
                <p className="text-sm text-gray-500 uppercase">Aug</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-orange-500 uppercase mb-2">
                Lifestyle • Admin • 0 Comment
              </p>
              <h3 className="text-2xl font-bold text-[#1F244C] mb-4">
                The Next Big Challenge for Content Marketer
              </h3>
              <p className="text-gray-500 mb-4">
                As a process transformation company, we rethink and rebuild
                processes for the digital age by combining the speed and insight
                of...
              </p>
              <button className="bg-[#FE7146] text-white text-sm lg:text-base py-2 px-6 rounded-full hover:bg-orange-600 transition">
                Read More →
              </button>
            </div>
          </div>
        </div>
        {/* Small Blog Posts */}
        <div className="w-[680px] space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-4 items-center">
              <div className="relative lg:w-28 lg:h-28">
                <Image
                  src={imgSmall}
                  alt={`Blog Post ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white rounded-lg shadow-md px-3 py-1 text-center">
                  <p className="text-xs font-bold text-[#1F244C]">17</p>
                  <p className="text-xs text-gray-500 uppercase">Aug</p>
                </div>
              </div>
              <div className="w-[440px]">
                <p className="text-sm text-orange-500 uppercase mb-1">
                  Lifestyle • Admin • 0 Comment
                </p>
                <h4 className="text-lg font-bold text-[#1F244C] mb-2">
                  The 7 Most Beautiful <br /> Boutique  Hotels in Singapore
                </h4>
                <button className="bg-[#FE7146] text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RecentBlogPost;
