import React from 'react';
import Image from 'next/image';

interface HistoryItemProps {
  src: string;
  alt: string;
  year: string; // Año o período de la foto
  description: string; // Reseña histórica
  reverse?: boolean; // Para alternar la posición de la imagen y el texto
}

const HistoryItem = ({ src, alt, year, description, reverse = false }: HistoryItemProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md mb-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3"> {/* Imagen a 1/3 del ancho */}
        <Image
          src={src}
          alt={alt}
          width={300} // Puedes ajustar el tamaño base de la imagen
          height={200}
          layout="responsive" // Hace que la imagen se ajuste al contenedor
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
      <div className={`md:w-2/3 ${reverse ? 'md:pr-8' : 'md:pl-8'} text-gray-700`}> {/* Texto a 2/3 del ancho */}
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{year}</h3>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HistoryItem;