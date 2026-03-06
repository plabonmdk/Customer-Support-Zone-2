import React from "react";
import vectorImg from "../assets/vector1.png"; 

const StatCard = ({ title, count, gradientFrom, gradientTo }) => (
  <div className="relative rounded-lg overflow-hidden text-white p-10 flex flex-col items-center justify-center">
    
    {/* Gradient background */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>

    {/* Left image - top left */}
    <img
      src={vectorImg}
      alt=""
      className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 opacity-100 w-55 h-55 object-contain"
    />

    {/* Right image - bottom right */}
    <img
      src={vectorImg}
      alt=""
      className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-100 w-55 h-55 object-contain"
    />

    {/* Content */}
    <div className="relative z-10 text-center">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-5xl font-bold">{count}</p>
    </div>
  </div>
);

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <StatCard
          title="In-Progress"
          count={inProgressCount}
          gradientFrom="from-purple-400"
          gradientTo="to-indigo-400"
        />
        <StatCard
          title="Resolved"
          count={resolvedCount}
          gradientFrom="from-green-400"
          gradientTo="to-emerald-400"
        />
      </div>
    </div>
  );
};

export default Banner;