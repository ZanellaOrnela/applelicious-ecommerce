'use client'

import React from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Navbar = () => {
  const { userData, setUserData } = useAuth();
  const router = useRouter();
  

const logout = () => {
  
  Cookies.remove('token');
  

  localStorage.removeItem('userSession');
  
  
  
};
  const handleLogout = () => {
    
    setUserData(null);

    logout();

    
    router.push('/login');
  };

  return (
    <>
      <div
        onClick={() => router.push('/')}
        className="flex justify-center flex-1 h-10 my-8 sm:hidden"
      >
        <img
          src="https://i.ibb.co/chxtZtJT/Recurso-4.png"
          alt="Logo"
          className="block lg:hidden"
        />
      </div>

      <nav className="bg-white flex my-4 sm:my-8 mx-14 rounded-full p-3 items-center drop-shadow-lg">
        

        {/* Logo en el centro */}
        <div
          onClick={() => router.push('/')}
          className="flex justify-center flex-1 h-10"
        >
          <img
            src="https://i.ibb.co/zHQYztxz/Recurso-3.png"
            alt="Logo"
            className="hidden lg:block"
          />
          <img
            src="https://i.ibb.co/chxtZtJT/Recurso-4.png"
            alt="Logo"
            className="hidden sm:block lg:hidden"
          />
        </div>

        {/* Sección derecha */}
        <div className="flex items-center space-x-4 ml-auto">
          {userData && userData.token ? (
            <>
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="bg-custom-green text-gray-900 text-sm font-bold px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-center"
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span className="hidden lg:block">Mi Perfil</span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="bg-custom-pink text-white text-sm font-bold px-4 sm:px-6 py-2.5 rounded-full"
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
              <button
            type="button"
            onClick={() => router.push('/cart')}
            className=" text-gray-900 text-sm font-bold pr-4 py-2.5 rounded-full"
          >
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
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="bg-custom-pink text-white text-sm font-bold px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block lg:hidden w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
                <span className="hidden lg:block">Iniciar Sesión</span>
              </button>

              <button
                type="button"
                onClick={() => router.push('/register')}
                className="bg-custom-green text-gray-900 text-sm font-bold px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block lg:hidden w-6 h-6 "
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
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
