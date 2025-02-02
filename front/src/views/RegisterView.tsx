'use client';
import React from 'react';
import { validateRegister } from '../helpers/validate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { register } from '@/helpers/authHelpers';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const RegisterView = () => {
  const router = useRouter();

  return (
    <div className="min-h-52 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-lg rounded-3xl flex flex-col lg:flex-row w-full">
        {/* Lado izquierdo: centrado vertical y horizontal */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">
            Register to Applelicious
          </h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              address: '',
              phone: '',
            }}
            onSubmit={async (values) => {
              await register(values);
              Swal.fire({
                title: "Usuario creado con éxito!",
                icon: "success",
                confirmButtonText: '<span class="px-6 py-3 text-white rounded-3xl">OK</span>',
                customClass: {
                  popup: "bg-gray-100 border border-gray-300 rounded-3xl shadow-lg", 
                  title: "text-lg font-bold text-gray-900",
                  icon: "swal2-icon", 
                  confirmButton: "bg-custom-green text-white rounded-3xl px-6 py-3", 
                }
              });
              
              router.push('/login');
            }}
            validate={validateRegister}
          >
            {({ errors }) => (
              <Form className="mx-auto max-w-xs">
                <label
                  className="block mb-2 text-custom-pink font-bold"
                  htmlFor="email"
                >
                  Email:
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Johndoe@gmail.com"
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
  
                <label
                  className="block mb-2 text-custom-pink font-bold"
                  htmlFor="password"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
  
                <label
                  className="block mb-2 text-custom-pink font-bold"
                  htmlFor="name"
                >
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
  
                <label
                  className="block mb-2 text-custom-pink font-bold"
                  htmlFor="address"
                >
                  Address:
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Posadas, Misiones, Argentina"
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
  
                <label
                  className="block mb-2 text-custom-pink font-bold"
                  htmlFor="phone"
                >
                  Phone:
                </label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+543765757575"
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
  
                <button
                  type="submit"
                  disabled={Object.keys(errors).length > 0}
                  className="mt-5 tracking-wide font-semibold bg-custom-pink text-white w-full py-4 rounded-full hover:bg-custom-green hover:text-gray-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
  
                  <span className="ml-3">Register</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex-1 bg-lime-100 text-center hidden rounded-r-3xl lg:flex">
          <div className="lg:flex-1 relative hidden lg:block">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-bottom bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/Untitled-1.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterView