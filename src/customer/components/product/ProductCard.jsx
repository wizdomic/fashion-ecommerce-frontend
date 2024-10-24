import React from "react";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-full w-full object-cover object-left-top">
        <img
          src="https://m.media-amazon.com/images/I/81pTApNNpHL.jpg"
          alt="mens outfit"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 text-center">UniverSalOutfit</p>
          <p className="font-bold">Casual Stylish Shirt For Men</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold ">$18</p>
          <p className="line-through">$40</p>
          <p className="text-green-600 font-semibold">70% Off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
