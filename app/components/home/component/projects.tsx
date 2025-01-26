import React from "react";
import Container from "@/public/assets/Container.png";
import Container1 from "@/public/assets/Container-1.png";
import Container2 from "@/public/assets/Container-2.png";
import Container3 from "@/public/assets/Container-3.png";
import Container4 from "@/public/assets/Container-4.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import heading from "@/public/assets/heading.png";

// Define the projects array with explicit types
type Project = {
  title: string;
  year: number;
  image: string | StaticImageData;
};

const projects: Project[] = [
  { title: "E-Commerce", year: 2023, image: Container },
  { title: "Blockchain Payment System", year: 2021, image: Container1 },
  { title: "Inventory Optimization", year: 2022, image: Container2 },
  { title: "Web 3.0 Community Platform", year: 2024, image: Container4 },
  { title: "Product Content for Online Retailer", year: 2023, image: Container3 },
  { title: "Social Networking Platform", year: 2024, image: Container2 },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center mb-12 px-4">
        <Image
          src={heading}
          width={40}
          height={78}
          alt="Heading Icon"
          className="mx-auto"
        />
        <h6 className="text-orange-500 text-sm md:text-base font-bold uppercase tracking-wide">
          Companies Projects
        </h6>
        <h1 className="mt-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Working With Over 300 Startups and Companies
        </h1>
      </header>

      {/* Projects Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 max-w-7xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
              index === 0 || index === 4 ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={
                typeof project.image === "string"
                  ? project.image
                  : project.image.src
              }
              alt={project.title}
              width={400}
              height={250}
              className="object-cover w-full h-56 sm:h-64 lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.year}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call-to-Action Button */}
      <div className="mt-12 mb-16">
        <button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 shadow-lg transition duration-300">
          View Our Services
        </button>
      </div>
    </div>
  );
};

export default Home;
