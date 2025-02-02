import { IProduct } from '@/types';
import React from 'react';
const Card: React.FC<IProduct> = ({
  name,
  price,
  description,
  image,
  stock,
}) => {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-3xl w-60 h-80 shadow-xl group hover:scale-105 transition-transform duration-300 ease-in-out">

    <div className="w-full h-1/2 overflow-hidden rounded-t-3xl flex items-center justify-center pt-4">
      <img
        className="w-full h-full object-contain transition-all duration-300 ease-in-out"
        src={image}
        alt={'image of the product ' + name}
      />
    </div>
  
    <div className="relative text-gray-900 px-6 pb-6 pt-4 h-1/2">
      <h2 className="font-semibold text-xl mb-2">{name}</h2>
      <p className="text-sm">
        Stock: <span className="font-semibold">{stock}</span>
      </p>
  
      <div className="absolute bottom-4 right-4 bg-custom-green text-gray-900 text-sm font-bold px-6 py-2.5 rounded-full flex items-center justify-center">
        ${price}
      </div>
    </div>

    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <p className="text-gray-900  text-center">
        {description}
      </p>
    </div>
  
  </div>
  



  

  );
};

export default Card;
