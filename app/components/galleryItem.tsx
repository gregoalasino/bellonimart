// app/components/GalleryItem.tsx
import React from 'react';
import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  // Ajustamos la prop para que reciba la descripción (si la usas en el modal)
  onClick: (src: string, alt: string, title: string, description: string | null) => void;
  description?: string | null; // Añadimos description como opcional
}

const GalleryItem = ({ src, alt, title, onClick, description }: GalleryItemProps) => {
  return (
    // Contenedor principal
    <div
      className="relative overflow-hidden group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      // Llamamos a la función onClick con la info necesaria
      onClick={() => onClick(src, alt, title, description || null)}
    >
      
      {/* 💡 CLAVE: DIV CONTENEDOR DE IMAGEN */}
      {/* Añadimos 'w-full' y 'aspect-square' para forzar la proporción 1:1 */}
      <div className="w-full aspect-square relative bg-gray-100"> 
        <Image
          src={src}
          alt={alt}
          // Usamos 'fill' en lugar de 'width'/'height' si queremos que llene el contenedor
          // Si usas width/height aquí, el "aspect-square" del padre ya maneja la proporción
          width={500} 
          height={500}
          
          // La imagen debe usar 'object-cover' para llenar el cuadrado.
          className="object-cover transform transition-transform duration-300 group-hover:scale-105 w-full h-full"
        />
      </div>

      {/* Overlay con el título */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-bold">{title}</p>
      </div>
    </div>
  );
};

export default GalleryItem;