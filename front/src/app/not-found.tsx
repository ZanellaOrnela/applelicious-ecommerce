'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-5 text-gray-900">
      <div className="container flex flex-col items-center justify-center">
        {/* Número 404 */}
        <div className="text-7xl text-gray-900 font-dark font-extrabold ">
          404
        </div>

        {/* Animación */}
        <div className="relative max-w-full px-4 overflow-hidden" style={{ maxHeight: 'calc(100% - 150px)' }}>
          <img
            src="https://i.imgur.com/kJhcyxP.gif"
            alt="Animación"
            className="w-full h-auto object-contain"
            style={{ marginTop: '-100px', marginBottom: '-100px' }}
          />
        </div>

        {/* Texto y enlace */}
        <div className="text-center">
          <h2 className="text-gray-900 font-bold text-2xl">
            Parece que has encontrado la puerta hacia la gran nada.
          </h2>
          <p className="my-2 mb-6 text-gray-900">
            ¡Lo sentimos! Por favor, visita nuestra página de inicio para llegar
            a donde necesitas ir.
          </p>

          <a
            href="/"
            className="px-5 inline py-3 text-sm font-bold leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-full focus:outline-none bg-custom-green active:bg-custom-pink hover:bg-custom-pink"
          >
            ¡Llévame allí!
          </a>
        </div>
      </div>
    </div>
  );
}
