import * as React from 'react';
import { validateLogin } from '../helpers/validate';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useAuth } from '@/context/authContext';
import { login } from '@/helpers/authHelpers';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const { setUserData } = useAuth();
  const router = useRouter()
  return (
    <div>
      <h1>Login to Applelicious</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validateLogin} // Validador personalizado
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            // Llamar a la API para autenticar
            const response = await login(values);
            const { token, user } = response;

            // Guardar los datos en el contexto
            setUserData({ token, user });
            alert("Login successful!");
            router.push("/")
          } catch (error) {
            // Manejar errores del servidor y mostrarlos en el formulario
            setErrors({ email: "Error de autenticación. Verifica tus datos." });
          } finally {
            setSubmitting(false);
          }
        }}
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

export default LoginView;
