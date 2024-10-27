import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product}) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="mens outfit"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 text-center">{product.brand}</p>
          <p className="font-bold">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold ">{product.discountedPrice}</p>
          <p className="line-through">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% Off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
