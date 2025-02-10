'use client';



export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-5 text-gray-900">
      <div className="container flex flex-col items-center justify-center">
        
        <h1 className="text-7xl font-extrabold">404</h1>

        
        <div className="relative max-w-full px-4 overflow-hidden" style={{ maxHeight: 'calc(100% - 150px)' }}>
          <img
            src="https://i.imgur.com/kJhcyxP.gif"
            alt="Animación de error 404"
            className="w-full h-auto object-contain mt-[-100px] mb-[-100px]"
          />
        </div>

        
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">
            Parece que has encontrado la puerta hacia la gran nada.
          </h2>
          <p className="my-2 mb-6">
            ¡Lo sentimos! Por favor, visita nuestra página de inicio para llegar a donde necesitas ir.
          </p>

          <a
            href="/"
            className="px-5 py-3 text-sm font-bold leading-5 text-white transition-all duration-400 rounded-full shadow-2xl focus:outline-none bg-custom-green active:bg-custom-pink hover:bg-custom-pink"
          >
            ¡Llévame allí!
          </a>
        </div>
      </div>
    </div>
  );
}
