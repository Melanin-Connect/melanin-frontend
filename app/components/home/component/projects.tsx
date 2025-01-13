import React from "react";
import Container from "@/public/assets/Container.png";
import Container1 from "@/public/assets/Container-1.png";
import Container2 from "@/public/assets/Container-2.png";
import Container3 from "@/public/assets/Container-3.png";
import Container4 from "@/public/assets/Container-4.png";
import { StaticImageData } from "next/image";
import Image from "next/image"
import heading from "@/public/assets/heading.png";

// Define projects array with explicit types
type Project = {
  title: string;
  year: number;
  image: string | StaticImageData;
};

const projects: Project[] = [
  {
    title: "E-Commerce",
    year: 2023,
    image: Container,
  },
  {
    title: "Blockchain Payment System",
    year: 2021,
    image: Container1,
  },
  {
    title: "Inventory Optimization",
    year: 2022,
    image: Container2,
  },
  {
    title: "Web 3.0 Community Platform",
    year: 2024,
    image: Container4,
  },
  {
    title: "Product Content for Online Retailer",
    year: 2023,
    image: Container3,
  },
  {
    title: "Social Networking Platform",
    year: 2024,
    image: Container2,
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen  flex flex-col items-center">
      <div className="text-center mb-8 md:mb-12">
        <Image
          src={heading}
          width={40}
          height={78}
          alt="Heading Icon"
          className="mx-auto"
        />
        <h6 className="text-orange-500 text-lg md:text-sm font-bold uppercase">
        Companies projects
        </h6>
        <p className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-2xl md:text-[24] lg:text-[30] font-epilogue">
        Working With Over 300 Startups and
        <br />
        Companies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative bg-black text-white rounded-lg overflow-hidden shadow-md ${
              index === 0 || index === 4 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={typeof project.image === "string" ? project.image : project.image.src}
              alt={project.title}
              className="object-cover w-full h-full scale-110"
            />
            <div className="absolute inset-0 "></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm">{project.year}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 mb-20 bg-orange-500 text-white py-2 px-6 rounded-3xl hover:bg-orange-600 transition duration-300">
        View Our Services
      </button>
    </div>
  );
};

export default Home;
