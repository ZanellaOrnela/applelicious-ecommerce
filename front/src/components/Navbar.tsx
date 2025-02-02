'use client';

import React from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { userData, setUserData } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    setUserData(null);
    router.push('/login');
  };

  return (
    <nav className="bg-white flex my-8 mx-14 rounded-full p-3 items-center drop-shadow-lg">
      <div className="flex items-center px-4 drop-shadow">
        <input
          type="text"
          placeholder="Buscar productos"
          className="hidden md:block bg-white rounded-full py-2 px-4 text-gray-900 text-sm border-2 border-custom-green focus:ring-2 focus:ring-custom-green focus:border-custom-green focus:outline-none shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="block md:hidden w-6 h-6 font-bold text-custom-green hover:text-custom-pink transition-colors duration-300 ease-in-out transform hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {/* Logo en el centro */}
      <div className="flex justify-center flex-1 h-10">
        <img src="/logo.png" alt="Logo" className="hidden lg:block" />
        <img src="/apple.png" alt="Logo" className="block lg:hidden" />
      </div>

      {/* Sección derecha */}
      <div className="flex items-center space-x-4 ml-auto">
        {userData && userData.token ? (
          <>
            <button className="bg-custom-green text-gray-900 text-sm font-bold px-6 py-2.5 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block lg:hidden w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span className="hidden lg:block">Mi Perfil</span>
            </button>

            <button
              onClick={handleLogout}
              className="bg-custom-pink text-white text-sm font-bold px-6 py-2.5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block lg:hidden w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span className="hidden lg:block">Cerrar Sesión</span>
            </button>
          </>
        ) : (
          <>
            <button className="bg-custom-pink text-white text-sm font-bold px-6 py-2.5 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block lg:hidden w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
              <span className="hidden lg:block">Iniciar Sesión</span>
            </button>

            <button className="bg-custom-green text-gray-900 text-sm font-bold px-6 py-2.5 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block lg:hidden w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <span className="hidden lg:block">Registrarse</span>
            </button>
          </>
        )}
        <button className=" text-gray-900 text-sm font-bold pr-4 py-2.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
