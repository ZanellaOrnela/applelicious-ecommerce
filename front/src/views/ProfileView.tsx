'use client'
import React from 'react'
import { useAuth } from '@/context/authContext'

const ProfileView = () => {
  const userData = useAuth()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
  <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-3xl">
      Bienvenido a tu perfil
    </h1>
    <p className="text-gray-600 text-base md:text-lg">
      <span className="font-semibold">Tu correo:</span> {userData?.userData?.user.email}
    </p>
    <p className="text-gray-600 text-base md:text-lg mt-4">
      <span className="font-semibold">Tu usuario:</span> {userData?.userData?.user.name}
    </p>
  </div>
</div>

  )
}

export default ProfileView
