import React from "react";
import "../../index.css";
const Topbar = () => {
  return (
    <div className="w-3/4 bg-gray-900 polygon flex items-center justify-center max-md:hidden ">
      <ul className="flex flex-row items-center text-white text-[1.3rem] font-medium gap-3 px-5 py-3 cursor-pointer">
        <li>Best Sellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today Deals</li>
        <li>Customer Service</li>
      </ul>
    </div>
  );
};

export default Topbar;
