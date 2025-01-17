import React from "react";

const WorkingProcess = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "Our content strategy focuses on aggregation, storage, and distribution to digitize, acquire, and optimize.",
    },
    {
      title: "Analytics",
      description:
        "Are you ready to obliterate the status quo? Gone are the days of mundane desk jobs.",
    },
    {
      title: "Content Development",
      description:
        "We rethink the process and work together to streamline it, rebuild it, and deliver it smarter.",
    },
    {
      title: "Product Launch",
      description:
        "Extended periods of consulting to AFS, working closely with the internal team, and gaining a deep understanding.",
    },
  ];

  return (
    <section className="bg-white py-16">
       <p className="text-center text-orange-400 mb-2">
          Working progress
        </p>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          How does it work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-orange-200 text-4xl font-bold mb-4">
                {`0${index + 1}`}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
