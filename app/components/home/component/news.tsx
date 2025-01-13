import React from "react";
import heading from "@/public/assets/heading.png";
import Image from "next/image";
import Blog1 from "@/public/assets/blog-three-1.jpg.png"; // Replace with actual blog images
import Blog2 from "@/public/assets/blog-three-2.jpg.png"; // Example second blog image
import Blog3 from "@/public/assets/blog-three-3.jpg.png"; // Example third blog image
import LinkImage from "@/public/assets/Border.png";

const TipsAndAdvice: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Successful Startup",
      subtitle: "Branding - December 13, 2022",
      description:
        "Lorem ipsum estibulum blandit libero erisque in mauris ut malesuada. Ute lit ero at mauris condimmanec.",
      image: Blog1,
    },
    {
      id: 2,
      title: "10 Design Tips for Better Branding",
      subtitle: "Branding - December 13, 2022",
      description:
        "Lorem ipsum estibulum blandit libero erisque in mauris ut malesuada. Ute lit ero at mauris condimmanec.",
      image: Blog2,
    },
    {
      id: 3,
      title: "How to Master Digital Marketing",
      subtitle: "Branding - December 13, 2022",
      description:
        "Lorem ipsum estibulum blandit libero erisque in mauris ut malesuada. Ute lit ero at mauris condimmanec.",
      image: Blog3,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <Image
            src={heading}
            width={40}
            height={78}
            alt="Heading Icon"
            className="mx-auto"
          />
          <h6 className="text-orange-500 text-lg font-bold uppercase tracking-wider">
            Tips and Advice
          </h6>
        </div>

        {/* Blog Posts */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-800 pb-8"
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-64 h-40 object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-row ">
               <div className=" w-[336.22px] h-[67px]">
               <h2 className="text-black text-lg md:text-xl font-semibold">
                  {post.title}
                </h2>

                {/* Subtitle */}
                <h3 className="text-sm font-medium text-orange-500 mt-2">
                  {post.subtitle}
                </h3>

               </div>
               

               <div>
               <p className="text-gray-700 text-sm w-[337.5px] h-[90px] mt-3">
                  {post.description}
                </p>
               </div>
                
              </div>

              {/* Circle Icon */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 border-2 ml-20 border-orange-500 rounded-full flex items-center justify-center">
                  <Image src={LinkImage} alt="Link Icon" width={12} height={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:opacity-90 transition">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default TipsAndAdvice;
