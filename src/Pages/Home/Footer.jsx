import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit p-5 flex flex-col bg-zinc-700 gap-2 justify-center items-center">
      <h1 className="text-5xl text-white font-bold">Ecart</h1>
      <div className="my-4 w-1/2 h-8 flex border-b-4 items-center border-orange-600 border-solid">
        <input
          placeholder="Type Your Email"
          type="text"
          className="bg-transparent outline-none w-full max-sm:w-40"
        />
        <span className="text-lg font-bold text-white max-sm:text-sm">
          Subscriber
        </span>
      </div>
      <div>
        <ul className="flex gap-8 mb-8 cursor-pointer text-orange-500 text-center text-lg font-bold max-sm:flex-col">
          <li>Best Sellers</li>
          <li>Gift Ideas</li>
          <li>New Releases</li>
          <li>Today Deals</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <h1 className="text-white text-center">
        © 2023 All Rights Reserved. Design by Free html Templates
      </h1>
    </div>
  );
};

export default Footer;
