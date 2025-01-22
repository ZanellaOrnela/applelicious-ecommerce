'use client';

import { useAuth } from '@/context/authContext';
import { IProduct } from '@/types';
import React from 'react';

const ProductDetail: React.FC<IProduct> = ({
  name,
  image,
  description,
  stock,
  price,
  id,
  categoryId,
}) => {
  const { userData } = useAuth();

  const handleAddToCart = () => {
    debugger;
    if (!userData?.token) {
      alert('Tienes que estar logueado para agregar productos');
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem('cart')||"[]")
      const productExist = cart.some((item: IProduct) => {
        if(item.id === id) return true;
        return false
      })
      if (productExist){
        alert('Este producto ya esta en tu carrito');
      }else {
        cart.push({name,image,id,description,stock,price,categoryId})
        localStorage.setItem("cart", JSON.stringify(cart))
        alert('Se agregó el producto a tu carrito');
      }
      }
      
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`${name} - product image`} />
      <p>{description}</p>
      <p>Stock: {stock}</p>
      <p>Price: ${price}</p>
      <button
        onClick={handleAddToCart}
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        disabled={stock <= 0}
      >
        {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductDetail;
