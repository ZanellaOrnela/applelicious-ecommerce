'use client';
import * as React from 'react';
import { validateLogin } from '../helpers/validate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useAuth } from '@/context/authContext';
import { login } from '@/helpers/authHelpers';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const { setUserData } = useAuth();
  const router = useRouter();

  return (
    <div className="min-h-52 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-lg rounded-3xl flex flex-col lg:flex-row w-full">
        {/* Lado izquierdo: centrado vertical y horizontal */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">
            Logueate a Applelicious
          </h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={validateLogin}
            onSubmit={async (
              values: { email: string; password: string },

              { setSubmitting, setErrors }
            ) => {
              try {
                const response = await login(values);
                const { token, user } = response;

                setUserData({ token, user });
                router.push('/');
              } catch (error: any) {
                setErrors({ email: error.message });
              } finally {
                setSubmitting(false);
              }
            }}
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

                  <span className="ml-3">Iniciar Sesion</span>
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
};

export default LoginView;
