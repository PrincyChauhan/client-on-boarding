import React from "react";
import logo from "../assets/Logomark.png";
import bell from "../assets/Button.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 border border-[#EAECF0] bg-white rounded-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-lg font-semibold text-gray-800">Untitled UI</h1>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-md">
          <img src={bell} alt="Bell" className="w-8 h-8 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
