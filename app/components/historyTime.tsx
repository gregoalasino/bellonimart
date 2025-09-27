"use client"; // Importante para usar useState y los botones

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

interface HistoryItemProps {
  // Asegúrate de que 'photos' esté aquí declarado como un array de strings
  photos: string[]; 
  year: string; 
  description: string; 
  reverse?: boolean;
}

const HistoryItem = ({ photos, year, description, reverse = false }: HistoryItemProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const totalPhotos = photos.length;

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  return (
    <div className={`flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md mb-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* CARRUSEL DE IMAGEN (OCUPA 1/3) */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 relative w-full aspect-square"> 
        {totalPhotos > 0 && (
          <>
            <Image
              key={photos[currentPhotoIndex]} 
              src={photos[currentPhotoIndex]}
              alt={`Foto de ${year} (${currentPhotoIndex + 1} de ${totalPhotos})`}
              fill={true} 
              className="rounded-md object-cover transition-opacity duration-500 ease-in-out"
            />

            {/* Botones de Navegación (Solo si hay más de una foto) */}
            {totalPhotos > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-75 transition z-10"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-75 transition z-10"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Indicadores de posición (puntos) */}
            {totalPhotos > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
                {photos.map((_, index) => (
                    <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentPhotoIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'} cursor-pointer`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    aria-label={`Ir a la foto ${index + 1}`}
                    />
                ))}
                </div>
            )}

          </>
        )}
      </div>

      {/* TEXTO (OCUPA 2/3) */}
      <div className={`md:w-2/3 ${reverse ? 'md:pr-8' : 'md:pl-8'} text-gray-700`}> 
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{year}</h3>
        <p className="text-base leading-relaxed">{description}</p>
        <p className='mt-2 text-sm text-gray-500'>
            {totalPhotos > 1 && `(Foto ${currentPhotoIndex + 1} de ${totalPhotos})`}
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;