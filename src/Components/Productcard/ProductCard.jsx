import React from "react";

const ProductCard = ({ img, ProductTitle }) => {
  return (
    <div className="w-[350px] h-[500px] p-4 flex flex-col items-center shadow-lg">
      <h1 className="text-lg font-bold text-zinc-800">{ProductTitle}</h1>
      <span className="text-orange-500 inline font-semibold ">
        Price <span className="text-zinc-800 inline">$30</span>
      </span>

      <img src={img} alt="image" className="w-[320px] h-[350px] mt-4" />
      <div className="flex gap-10 w-full px-3 justify-between">
        <a role="button" className="text-orange-500 text-lg font-bold">
          Buy Now
        </a>
        <a role="button" className="text-zinc-800">
          See More
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
