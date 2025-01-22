`use client`

import React from "react";
import { useAuth } from "@/context/authContext";

const Navbar = () => {
  const { userData, setUserData } = useAuth();

  const handleLogout = () => {
    setUserData(null); // Limpia los datos del usuario
    // Aquí podrías redirigir al usuario a la página de inicio de sesión
  };

  return (
    <nav className="bg-white flex my-8 mx-14 rounded-full p-3 items-center">
      {/* Sección izquierda */}
      <div className="flex items-center space-x-6 drop-shadow">
        <button className="text-gray-900 text-sm font-bold px-6 py-2.5">
          Categorías
        </button>
        <input
          type="text"
          placeholder="Buscar productos"
          className="bg-white rounded-full p-2 text-gray-900 text-sm border-2 border-custom-green focus:ring-2 focus:ring-custom-green focus:border-custom-green focus:outline-none shadow-sm transition duration-200 ease-in-out"
        />
      </div>

      {/* Logo en el centro */}
      <div className="flex justify-center flex-1">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Sección derecha */}
      <div className="flex items-center space-x-2 ml-auto">
        {userData && userData.token ? (
          <>
            {/* Elementos para usuarios autenticados */}
            <button
              className="bg-custom-green text-white text-sm font-bold px-8 py-2.5 rounded-full"
            >
              Mi Perfil
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white text-sm font-bold px-8 py-2.5 rounded-full"
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            {/* Elementos para usuarios no autenticados */}
            <button
              className="bg-custom-pink text-white text-sm font-bold px-8 py-2.5 rounded-full"
            >
              Iniciar Sesión
            </button>
            <button
              className="bg-custom-green text-gray-900 text-sm font-bold px-8 py-2.5 rounded-full"
            >
              Registrarse
            </button>
          </>
        )}
        <button className="bg-custom-yellow text-gray-900 text-sm font-bold px-8 py-2.5 rounded-full">
          Carrito
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



