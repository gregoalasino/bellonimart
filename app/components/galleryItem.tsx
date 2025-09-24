import React from 'react';
import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  // Añadimos una prop para la función que se ejecutará al hacer clic
  onClick: (src: string, alt: string, title: string) => void;
}

const GalleryItem = ({ src, alt, title, onClick }: GalleryItemProps) => {
  return (
    // Hacemos todo el div clickeable
    <div
      className="relative overflow-hidden group cursor-pointer" // Añadimos cursor-pointer
      onClick={() => onClick(src, alt, title)} // Llamamos a la función onClick con la info de la imagen
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="transform transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" // Añadimos object-cover y full height/width
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-bold">{title}</p>
      </div>
    </div>
  );
};

export default GalleryItem;