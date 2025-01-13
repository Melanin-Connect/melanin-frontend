import React from "react";
import Image from 'next/image'
import Container from "@/public/assets/Container.png";
import Container1 from "@/public/assets/Container-1.png";
import Container2 from "@/public/assets/Container-2.png";
import Container3 from "@/public/assets/Container-3.png";
import Container4 from "@/public/assets/Container-4.png";
import Container5 from "@/public/assets/Container (2).png"
import Heading from "@/public/assets/heading.png"
import { StaticImageData } from "next/image";

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
    image: Container5,
  },
  {
    title: "Inventory Optimization",
    year: 2022,
    image: Container1,
  },
  {
    title: "Web 3.0 Community Platform",
    year: 2024,
    image: Container2,
  },
  {
    title: "Product Content for Online Retailer",
    year: 2023,
    image:  Container3,
  },
  {
    title: "Social Networking Platform",
    year: 2024,
    image: Container4,
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-center flex flex-col items-center">
      <Image
        src={Heading}
        alt="l"
      />
      <h1 className="text-xl md:text-sm font-bold text-red-600 mt-12 ">
        COMPANIES PROJECTS
      </h1>
      <h1 className="text-xl md:text-3xl font-bold text-black mt-12 mb-8">
      Working With Over 300 Startups and
      <br />
      Companies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group bg-black text-white rounded-2xl overflow-hidden shadow-md ${
              index === 0 || index === 4 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={typeof project.image === "string" ? project.image : project.image.src}
              alt={project.title}
              className="object-cover w-full h-full scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-sm">{project.year}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-orange-500 text-white py-2 px-6 m-60 rounded-3xl hover:bg-orange-600 transition duration-300">
        View Our Services
      </button>
    </div>
  );
};

export default Home;
