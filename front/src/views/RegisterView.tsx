'use client'
import React from 'react';
import { validateRegister } from '../helpers/validate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { register } from '@/helpers/authHelpers';
import { useRouter } from 'next/navigation';

const RegisterView = () => {
  const router = useRouter()
  
  return (
    <div>  
      <h1>Register to Applelicious</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          address: '',
          phone: '',
        }}
        onSubmit={async(values) => {
          await register(values)
          alert("Usuario registrado con exito")
          router.push("/login")
        }}
        validate={validateRegister}
      >
        {({ errors }) => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Johndoe@gmail.com"
          />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" placeholder="John Doe" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="address">Address:</label>
          <Field
            type="text"
            id="address"
            name="address"
            placeholder="Posadas, Misiones, Argentina"
          />
          <ErrorMessage name="address" component="div" />

          <label htmlFor="phone">Phone:</label>
          <Field
            type="text"
            id="phone"
            name="phone"
            placeholder="+543765757575"
          />
          <ErrorMessage name="phone" component="div" />

          <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              Submit
            </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterView;
