'use client'

import { useAuth } from '@/context/authContext'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { createOrder } from '@/helpers/ordersHelper'

const CartView = () => {
  const { userData } = useAuth();
  const [cart, setCart]= useState<IProduct[]>([])
  const [total,setTotal]=useState<number>(0)
  const router = useRouter();

  useEffect(() => {
    !userData && router.push("/login")
  }, [userData])

  useEffect(() => {
    if (!userData) {
      // Redirigir al login si no hay usuario logueado
      router.push('/login');
    } else {
      // Obtener el carrito del localStorage
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (storedCart) {
        let totalCart = 0;
        storedCart.map((item: IProduct) => {
          totalCart += item.price;
        });
        setTotal(totalCart);
        setCart(storedCart);
      }
    }
  }, [userData]); // Aseguramos que este efecto se ejecute solo cuando cambia el userData
  

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id)
    if(userData?.token){
      await createOrder(idProducts, userData?.token)
      setTotal(0)
      setCart([])
      localStorage.setItem("cart", "[]")
    }
  }

  return (
  <section className=" py-4 relative">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
    <h1 className="text-2xl text-gray-700 font-bold mb-4">Carrito de compras</h1>

      // Lista de productos en el carrito 
      {cart.length ? (
        cart.map((item: IProduct) => (
          <div
            key={item.id}
            className="rounded-3xl  drop-shadow-lg p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-white"
          >
            // Imagen del producto 
            <div className="col-span-12 lg:col-span-2 img box">
              <img
                src={item.image || "https://via.placeholder.com/180"}
                alt={item.name}
                className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
              />
            </div>

            // Detalles del producto 
            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
              <div className="flex items-center justify-between w-full mb-4">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  {item.name}
                </h5>
                <button className="rounded-full group flex items-center justify-center focus:outline-none">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                      cx="17"
                      cy="17"
                      r="17"
                    />
                    <path
                      className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                      d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                      stroke="#EF4444"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>


              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button className="group rounded-full border-2 border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-white hover:bg-gray-50 focus:outline-none transition-all duration-500">
                    <svg
                      className="stroke-gray-900 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5H13.5"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="number"
                    className="border-2 border-gray-300 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                    placeholder="1"
                    defaultValue="1"
                  />
                  <button className="group rounded-full border-2 border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-white hover:bg-gray-50 focus:outline-none transition-all duration-500">
                    <svg
                      className="stroke-gray-900 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 9.5H14.25M9 14.75V4.25"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
                  ${item.price}
                </h6>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">
          No hay productos en tu carrito 
        </div>
      )}

      // Sección de resumen y Checkout 
      <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
        <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
          Subtotal
        </h5>

        <div className="flex items-center justify-between gap-5">
          
          <h6 className="font-manrope font-bold text-3xl leading-10 text-custom-pink">
            ${total}
          </h6>
        </div>
      </div>
      <div className="max-lg:max-w-lg max-lg:mx-auto">
        <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
        Envío, impuestos y descuentos calculados al finalizar la compra.
        </p>
        <button
          onClick={handleCheckout}
          className="rounded-full py-4 px-6 bg-custom-green text-gray-900 font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 focus:outline-none"
        >
          Checkout
        </button>
      </div>
    </div>
  </section>
);

  
  };
  
  

export default CartView
