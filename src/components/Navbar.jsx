
import React from "react";
import pic from "../assets/house.png"; 
const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/house-pic-1.jpg')" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={pic} alt="Logo" className="h-20" />
        <ul className="hidden md:flex gap-7 text-white-500  ">
          <a href="#Header" className="cursor-pointer hover:text-red-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-red-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-red-400 ">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-red-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-green-500  hover:bg-green-700 hover:text-gray-100 px-8 py-2 rounded-full">
        Sign up

        </button>
      </div>
    </div>
  );
};

export default Navbar;

