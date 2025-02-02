'use client';

import { useAuth } from '@/context/authContext';
import { IProduct } from '@/types';
import React from 'react';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tienes que estar logueado para agregar productos",
        confirmButtonText: '<span class="px-6 py-3  text-white rounded-3xl">OK</span>',
        customClass: {
          popup: "bg-gray-100 border border-gray-300 rounded-3xl shadow-lg", 
          title: "text-lg font-bold text-gray-900",
          icon: "swal2-icon",
          confirmButton: "bg-custom-pink text-white rounded-3xl px-6 py-3",
        }
      });
      
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem('cart')||"[]")
      const productExist = cart.some((item: IProduct) => {
        if(item.id === id) return true;
        return false
      })
      if (productExist){
        Swal.fire({
        icon: "warning",
        title: "Cuidado!",
        text: "Este producto ya esta en tu carrito",
        confirmButtonText: '<span class="px-6 py-3  text-white rounded-3xl">OK</span>',
        customClass: {
          popup: "bg-gray-100 border border-gray-300 rounded-3xl shadow-lg", 
          title: "text-lg font-bold text-gray-900",
          icon: "swal2-icon", 
          confirmButton: "bg-orange-200 text-white rounded-3xl px-6 py-3", 
        }
      });
        
      }else {
        cart.push({name,image,id,description,stock,price,categoryId})
        localStorage.setItem("cart", JSON.stringify(cart))
        Swal.fire({
          icon: "success",
          title: "Listo!",
          text: "Se agregó el producto a tu carrito",
          confirmButtonText: '<span class="px-6 py-3  text-white rounded-3xl">OK</span>',
          customClass: {
            popup: "bg-gray-100 border border-gray-300 rounded-3xl shadow-lg", 
            title: "text-lg font-bold text-gray-900",
            icon: "swal2-icon", 
            confirmButton: "bg-custom-green text-white rounded-3xl px-6 py-3", 
          }
        });
        
      }
      }
      
  };

  return (
    <div className="max-w-5xl mx-auto p-6  bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-lg">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      
      {/* Imagen del producto */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={`${name} - product image`}
          className="w-full h-auto rounded-3xl object-cover shadow-lg transition-transform duration-300 "
        />
      </div>
  
      {/* Información del producto */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-4xl text-custom-pink font-extrabold">{name}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <p className="text-xs text-gray-400 font-medium">Stock: {stock}</p>
        <p className="text-2xl font-semibold text-gray-800">Price: ${price}</p>
  
        {/* Botón Agregar al Carrito */}
        <button
          onClick={handleAddToCart}
          disabled={stock <= 0}
          className={`bg-custom-pink text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md ${
            stock <= 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  </div>
  
  );
  
  
};

export default ProductDetail;
