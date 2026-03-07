import React from "react";

function ProductBoxCard({ prod }) {
  return (
    <div className="w-20 p-2 shrink-0 shadow-md shadow-gray-600">
      <img src={prod.image} alt={prod.name} className="h-20 mx-auto" />
      <figcaption className="flex flex-col">
        <p className="text-[0.6rem] leading-3 line-clamp-3 ">{prod.name}</p>
      </figcaption>
    </div>
  );
}

export default ProductBoxCard;
