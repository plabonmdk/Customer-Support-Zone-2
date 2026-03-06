import React from "react";
import vectorImg from "../assets/vector1.png"; 

const StatCard = ({ title, count, gradientFrom, gradientTo }) => (
  <div className="relative rounded-lg overflow-hidden text-white p-10 flex flex-col items-center justify-center">
    {/* Gradient background */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>

    {/* Left image */}
    <img
      src={vectorImg}
      alt=""
      className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20 w-32 h-32 object-contain"
    />

    {/* Right image */}
    <img
      src={vectorImg}
      alt=""
      className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 w-32 h-32 object-contain"
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
          gradientFrom="from-purple-600"
          gradientTo="to-indigo-600"
        />
        <StatCard
          title="Resolved"
          count={resolvedCount}
          gradientFrom="from-green-400"
          gradientTo="to-emerald-600"
        />
      </div>
    </div>
  );
};

export default Banner;