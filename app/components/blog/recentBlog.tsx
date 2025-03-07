import React from "react";
import Image from "next/image";
import imgMain from "@/public/assets/img.png";
import imgSmall from "@/public/assets/_image (1).png";
import Link from "next/link";


const RecentBlogPost: React.FC = () => (
  <section className="bg-[#F8F8FB] max-w-[1400px] py-12">
    <div className="container mx-auto px-4 lg:px-5">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-orange-500 text-sm uppercase font-semibold mb-2">
          Latest News
        </p>
        <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold">
          Recent blog post
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Post */}
        <div className="w-full lg:col-span-2">
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={imgMain}
                alt="Main Blog Post Image"
                fill
                className="object-cover"
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
                processes for the digital age by combining the speed and
                insight of...
              </p>
              <Link href="/blogdetials">
                <button className="bg-[#FE7146] text-white text-sm lg:text-base py-2 px-6 rounded-full hover:bg-orange-600 transition">
                  Read More →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Small Blog Posts */}
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-28 h-28">
                <Image
                  src={imgSmall}
                  alt={`Blog Post ${item}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white rounded-lg shadow-md px-3 py-1 text-center">
                  <p className="text-xs font-bold text-[#1F244C]">17</p>
                  <p className="text-xs text-gray-500 uppercase">Aug</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-orange-500 uppercase mb-1">
                  Lifestyle • Admin • 0 Comment
                </p>
                <h4 className="text-lg font-bold text-[#1F244C] mb-2">
                  The 7 Most Beautiful <br /> Boutique Hotels in Singapore
                </h4>
                <Link href="/blogdetails">
                  <button className="bg-[#FE7146] text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RecentBlogPost;