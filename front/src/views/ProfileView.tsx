'use client'

import React from 'react';
import { useAuth } from '@/context/authContext';
import Link from 'next/link';

const ProfileView = () => {
  const userData = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-3xl">
          Bienvenido a tu perfil
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          <span className="font-semibold">Tu correo:</span>{' '}
          {userData?.userData?.user.email}
        </p>
        <p className="text-gray-600 text-base md:text-lg mt-4">
          <span className="font-semibold">Tu usuario:</span>{' '}
          {userData?.userData?.user.name}
        </p>
      </div>
      <div className="mt-6 flex justify-center">
          <Link
            href="/dashboard/orders"
            className="bg-custom-green text-gray-900 text-sm font-bold px-6 py-2.5 rounded-full flex items-center justify-center"
          >
            Mis Pedidos
          </Link>
        </div>
    </div>
  );
};

export default ProfileView;
