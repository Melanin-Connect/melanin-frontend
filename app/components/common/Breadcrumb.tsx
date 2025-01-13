import React from "react";
import Image from "next/image";
import BreadcrumbBg from "@/public/assets/Breadcrumb.png"

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <div className="relative  h-[300px] bg-cover bg-center">
      <Image 
        src={BreadcrumbBg} 
        alt="Breadcrumb Background" 
        layout="fill" 
        objectFit="cover" 
        className="z-0" 
      />
      <div className="relative z-10 text-center text-white flex justify-center items-center h-full flex-col">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm">
          Home <span className="text-orange-400 mx-1">{">"}</span> {title}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
