import React from "react";
import Team1 from "@/public/assets/mate3.jpg";
import Team2 from "@/public/assets/mate.jpg"
import Team3 from "@/public/assets/mate.jpg";
import Team4 from "@/public/assets/mate.jpg"
import Image from "next/image";

const TeamMembers: React.FC = () => {
  const team = [
    {
      name: "Edward Owusu",
      role: "CEO & Founder",
      image: Team1,
    },
    {
      name: "Brenda Anlex",
      role: "Marketing",
      image: Team2,
    },
    {
      name: "Alex Njoya",
      role: "Software Developer",
      image: Team3,
    },
    {
      name: "Godfred Tenkorang",
      role: "Backend Developer",
      image: Team4,
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-orange-500 mb-2 font-bold tracking-widest">
          Our Team
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Meet the Founder</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-40 h-40 mx-auto rounded-[30%] overflow-hidden mb-4">
              <Image
                src={member.image.src}
                alt={member.name}
                width={160}
                height={160}
                className=" "
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
