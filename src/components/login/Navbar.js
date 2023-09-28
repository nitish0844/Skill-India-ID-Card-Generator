// src/NavBar.js
import React from "react";
import Logo from "../../assets/Images/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {" "}
        <img src={Logo} alt="Company Logo" className="h-26 w-32" />
        <p className="text-white text-lg font-semibold">Company Name</p>
      </div>
      <div className="space-x-2">
        {" "}
        {/* Decreased space-x value */}
        <button className="bg-white font-semibold font-LoginFont text-#191D2F px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
          Contact
        </button>
        <button className="bg-white font-semibold font-LoginFont text-#191D2F px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
          Help ?
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
