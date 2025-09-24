"use client"; // ¡Importante! Marca este componente como un Client Component para usar useState.

import React, { useState } from 'react';
import GalleryItem from '../components/galleryItem';
import Image from 'next/image'; // Para la imagen dentro del modal

// Aquí vas a poner la información real de las obras de tu abuela
const paintings = [
  { id: 1, src: '/images/16.jpg', alt: 'Bronce y piedra', title: '...de la opresión' },
  { id: 2, src: '/images/19.jpg', alt: 'Retrato de un niño', title: 'Construcción M-P 2' },
  { id: 3, src: '/images/30.jpg', alt: 'Naturaleza muerta con flores', title: 'El último viaje' },
  { id: 4, src: '/images/40.jpg', alt: 'Vista de la ciudad de noche', title: 'Hijo...' },
  { id: 4, src: '/images/23.jpg', alt: 'Vista de la ciudad de noche', title: 'Construcción P 6' },
  // ¡Agrega todas las obras que necesites aquí!
  // { id: 5, src: '/images/50.jpg', alt: '...', title: '...' },
];

// Define el tipo para la imagen del modal
interface SelectedImage {
  src: string;
  alt: string;
  title: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const openModal = (src: string, alt: string, title: string) => {
    setSelectedImage({ src, alt, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Mi Galería</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paintings.map((painting) => (
          <GalleryItem
            key={painting.id}
            src={painting.src}
            alt={painting.alt}
            title={painting.title}
            onClick={openModal} // Pasamos la función openModal
          />
        ))}
      </div>

      {/* Modal para mostrar la imagen agrandada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Cierra el modal al hacer clic fuera de la imagen
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre el modal si se hace clic dentro del contenido
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-800 text-3xl font-bold p-2 leading-none hover:text-gray-600 z-10"
            >
              &times; {/* Símbolo de "cerrar" */}
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800} // Puedes ajustar el tamaño máximo deseado
              height={600} // Puedes ajustar el tamaño máximo deseado
              className="max-w-full max-h-[80vh] object-contain rounded-md"
            />
            {/* <p className="text-center text-lg font-semibold mt-2 text-gray-800">{selectedImage.title}</p>
            <p className="text-center text-sm text-gray-600">{selectedImage.alt}</p> */}
          </div>
        </div>
      )}
    </>
  );
}