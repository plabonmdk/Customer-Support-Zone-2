import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
      
        <h1 className="text-2xl font-bold">
          CS — Ticket System
        </h1>

       
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Tickets
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            FAQ
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Changelog
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Download
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5] transition">
            Contact
          </a>

          <button className="bg-gradient-to-r from-[#422AD5] to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#422AD5]"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white border-t pt-4">
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Tickets
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            FAQ
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Changelog
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Download
          </a>
          <a href="#" className="text-gray-600 hover:text-[#422AD5]">
            Contact
          </a>

          <button className="bg-gradient-to-r from-[#422AD5] to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;