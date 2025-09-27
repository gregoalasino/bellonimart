// Asegúrate de que no haya nada antes de esta línea, excepto importaciones.
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
        Contacto
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
        
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex flex-col space-y-4">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Correo Electrónico
            </h3>
            <p className="text-gray-700 break-words">
              bellonimart@hotmail.com
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Teléfono
            </h3>
            <p className="text-gray-700">
              +54 9 351 665 4113
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}