import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Definimos las props que acepta el componente
interface LayoutProps {
  children: React.ReactNode; // "children" es el contenido de cada página
}

// Creamos el Layout
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar siempre visible en la parte superior */}
      <Navbar />

      {/* Contenido dinámico de cada página */}
      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>

      {/* Footer siempre visible en la parte inferior */}
      <Footer />
    </div>
  );
};

export default Layout;
