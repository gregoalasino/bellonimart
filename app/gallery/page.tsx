"use client"; // ¡Importante! Marca este componente como un Client Component para usar useState.

import React, { useState } from 'react';
import GalleryItem from '../components/galleryItem';
import Image from 'next/image'; // Para la imagen dentro del modal

// Aquí vas a poner la información real de las obras de tu abuela
const paintings = [
  { id: 3, src: '/images/galeria/ultimo/IMG_0760.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  { id: 4, src: '/images/galeria/ultimo/IMG_0755.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  { id: 5, src: '/images/galeria/ultimo/IMG_0745.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  { id: 6, src: '/images/galeria/ultimo/IMG_0741.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  //{ id: 8, src: '/images/galeria/ultimo/IMG_0722.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  //{ id: 9, src: '/images/galeria/ultimo/IMG_0729 (1).jpg', alt: 'Caroya', title: 'Almafuerte 2025' },
  { id: 2, src: '/images/galeria/ultimo/IMG_1199.jpg', alt: 'Caroya', title: 'Nada quedó que no doliera II' },
  { id: 10, src: '/images/galeria/ultimo/caroya.jpg', alt: 'Caroya', title: 'Nada quedó que no doliera II' },
  { id: 11, src: '/images/galeria/ultimo/caroya3.jpg', alt: 'Buen Pastor', title: 'Nada quedó que no doliera I' },
  { id: 12, src: '/images/galeria/ultimo/caroya4.jpg', alt: 'Buen Pastor', title: 'Nada quedó que no doliera I' },
  //{ id: 13, src: '/images/galeria/ultimo/caroya (2).JPG', alt: 'Buen Pastor', title: 'Nada quedó que no doliera I' },
  { id: 14, src: '/images/galeria/ultimo/LF2.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018' },
  { id: 15, src: '/images/galeria/ultimo/LF3.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018' },
  { id: 16, src: '/images/galeria/ultimo/LF4.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018' },
  { id: 17, src: '/images/galeria/ultimo/LF5.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018' },
  { id: 18, src: '/images/galeria/2(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 19, src: '/images/galeria/4(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 20, src: '/images/galeria/3(1).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 21, src: '/images/galeria/5(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 22, src: '/images/galeria/6(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 23, src: '/images/galeria/8(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 24, src: '/images/galeria/11(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 25, src: '/images/galeria/13(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 26, src: '/images/galeria/14(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 27, src: '/images/galeria/15(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 28, src: '/images/galeria/17(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 29, src: '/images/galeria/18(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 30, src: '/images/galeria/21(2).jpg', alt: 'Bandada', title: 'Bandada' },
  { id: 31, src: '/images/galeria/22(2).jpg', alt: 'Bandada', title: 'Bandada' },
  { id: 32, src: '/images/galeria/29x.jpg', alt: 'Bandada', title: 'Bandada' },
  { id: 33, src: '/images/galeria/33x.jpg', alt: 'Bandada', title: 'Osde' },

  
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