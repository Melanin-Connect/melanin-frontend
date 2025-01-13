import React from "react";
import Team1 from "@/public/assets/avatar (1).png";
import Team2 from "@/public/assets/avatar.png"
import Team3 from "@/public/assets/avatar2.png";
import Team4 from "@/public/assets/_avatar.png";
import Image from "next/image";

const TeamMembers: React.FC = () => {
  const team = [
    {
      name: "Jhon Wick",
      role: "Product Designer",
      image: Team1,
    },
    {
      name: "Brenda Anlex",
      role: "Marketing",
      image: Team2,
    },
    {
      name: "Jonath Dark",
      role: "Support Desk",
      image: Team3,
    },
    {
      name: "Anna Jony",
      role: "Marketing",
      image: Team4,
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-orange-500 font-bold tracking-widest">
          Our Team
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Team Members</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-40 h-40 mx-auto rounded-[30%] overflow-hidden mb-4">
              <Image
                src={member.image.src}
                alt={member.name}
                className="object-cover w-full h-full"
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
