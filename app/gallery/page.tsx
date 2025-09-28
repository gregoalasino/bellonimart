"use client"; // ¡Importante! Marca este componente como un Client Component para usar useState.

import React, { useState } from 'react';
import GalleryItem from '../components/galleryItem';
import Image from 'next/image'; // Para la imagen dentro del modal

// Aquí vas a poner la información real de las obras de tu abuela
const paintings = [
  // --- IMÁGENES 1 a 24 con "Descripción" ---
  { id: 3, src: '/images/galeria/ultimo/IMG_0760.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025', description: 'Serie Almafuerte 2024/2025' },
  { id: 4, src: '/images/galeria/ultimo/IMG_0755.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025', description: 'Serie Almafuerte 2024/2025' },
  { id: 5, src: '/images/galeria/ultimo/IMG_0745.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025', description: 'Serie Almafuerte 2024/2025' },
  { id: 6, src: '/images/galeria/ultimo/IMG_0741.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025', description: 'Serie Almafuerte 2024/2025' },
  //{ id: 8, src: '/images/galeria/ultimo/IMG_0722.jpg', alt: 'Almafuerte', title: 'Almafuerte 2025' },
  //{ id: 9, src: '/images/galeria/ultimo/IMG_0729 (1).jpg', alt: 'Caroya', title: 'Almafuerte 2025' },
  { id: 2, src: '/images/galeria/ultimo/IMG_1199.jpg', alt: 'Caroya', title: 'Nada dejó que no doliera II', description: 'Instalaciones Nada dejó que no doliera 2022/2023' },
  { id: 10, src: '/images/galeria/ultimo/caroya.JPG', alt: 'Caroya', title: 'Nada dejó que no doliera II', description: 'Instalaciones Nada dejó que no doliera 2022/2023' },
  { id: 11, src: '/images/galeria/ultimo/caroya3.JPG', alt: 'Buen Pastor', title: 'Nada dejó que no doliera I', description: 'Instalaciones Nada dejó que no doliera 2022/2023' },
  { id: 12, src: '/images/galeria/ultimo/caroya4.JPG', alt: 'Buen Pastor', title: 'Nada dejó que no doliera I', description: 'Instalaciones Nada dejó que no doliera 2022/2023' },
  //{ id: 13, src: '/images/galeria/ultimo/caroya (2).JPG', alt: 'Buen Pastor', title: 'Nada quedó que no doliera I' },
  { id: 14, src: '/images/galeria/ultimo/LF2.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018', description: 'Obras en vía pública Almafuerte 2018/2019' },
  { id: 15, src: '/images/galeria/ultimo/LF3.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018', description: 'Obras en vía pública Almafuerte 2018/2019' },
  { id: 16, src: '/images/galeria/ultimo/LF4.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018', description: 'Obras en vía pública Almafuerte 2018/2019' },
  { id: 17, src: '/images/galeria/ultimo/LF5.JPG', alt: 'Almafuerte', title: 'Almafuerte 2018', description: 'Obras en vía pública Almafuerte 2018/2019' },
  { id: 50, src: '/images/galeria/37x.jpg', alt: 'Instalación Cubos Buen Pastor', title: 'Instalación Cubos Buen Pastor', description: 'Instalaciones en espacios religiosos 2016/2017' },
  { id: 51, src: '/images/galeria/44x.jpg', alt: 'Instalación Cubos Buen Pastor', title: 'Instalación Cubos Buen Pastor', description: 'Instalaciones en espacios religiosos 2016/2017' },
  { id: 52, src: '/images/galeria/36x.jpg', alt: 'Instalación Cubos Buen Pastor', title: 'Instalación Cubos Buen Pastor', description: 'Instalaciones en espacios religiosos 2016/2017' },
  { id: 53, src: '/images/galeria/35x.jpg', alt: 'Instalación Cubos Buen Pastor', title: 'Instalación Cubos Buen Pastor', description: 'Instalaciones en espacios religiosos 2016/2017' },
  { id: 30, src: '/images/galeria/21(2).jpg', alt: 'Bandada', title: 'Bandada', description: 'Descripción' },
  { id: 31, src: '/images/galeria/25x.jpg', alt: 'Rojo', title: '"Rojo" - HolidayInn', description: 'Móviles 2000/2025' },
  { id: 32, src: '/images/galeria/29x.jpg', alt: 'Bandada', title: 'Equilibrio', description: 'Móviles 2000/2025' },
  { id: 33, src: '/images/galeria/33x.jpg', alt: 'Bandada', title: 'Osde', description: 'Móviles 2000/2025' },
  { id: 34, src: '/images/galeria/45x.jpg', alt: 'Navegando', title: 'Navegando', description: 'Serie Navegando 2006/2008' }, // Imagen 24
  // --- RESTO DE IMÁGENES sin "Descripción" (description: null) ---
  { id: 35, src: '/images/galeria/47x.jpg', alt: 'Navegando', title: 'Navegando', description: 'Serie Navegando 2006/2008' },
  //{ id: 36, src: '/images/galeria/49x.jpg', alt: 'Navegando', title: 'Navegando' },
  { id: 37, src: '/images/galeria/50x.jpg', alt: 'Navegando', title: 'Navegando', description: 'Serie Navegando 2006/2008' },
  //{ id: 38, src: '/images/galeria/52x.jpg', alt: 'Navegando', title: 'Navegando' },
  //{ id: 39, src: '/images/galeria/54x.jpg', alt: 'Navegando', title: 'Navegando' },
  //{ id: 40, src: '/images/galeria/57x.jpg', alt: 'Navegando', title: 'Navegando' },
  { id: 41, src: '/images/galeria/60x.jpg', alt: 'Navegando', title: 'Navegando', description: 'Serie Navegando 2006/2008' },
  { id: 18, src: '/images/galeria/2(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 19, src: '/images/galeria/4(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 20, src: '/images/galeria/3(1).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 21, src: '/images/galeria/5(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  //{ id: 22, src: '/images/galeria/6(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 23, src: '/images/galeria/8(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 24, src: '/images/galeria/11(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  //{ id: 25, src: '/images/galeria/13(2).jpg', alt: 'Móviles', title: 'Serie de los móviles' },
  { id: 26, src: '/images/galeria/14(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 27, src: '/images/galeria/15(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 28, src: '/images/galeria/17(2).jpg', alt: 'Móviles', title: 'Serie de los móviles', description: null },
  { id: 29, src: '/images/galeria/18(2).jpg', alt: 'Estable', title: 'Estable I', description: null },
  { id: 42, src: '/images/galeria/44.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles', description: null },
  //{ id: 43, src: '/images/galeria/50.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles' },
  //{ id: 44, src: '/images/galeria/51.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles' },
  { id: 45, src: '/images/galeria/42.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles', description: null },
  //{ id: 46, src: '/images/galeria/46.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles' },
  //{ id: 47, src: '/images/galeria/43.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles' },
  { id: 48, src: '/images/galeria/48.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles', description: null },
  { id: 49, src: '/images/galeria/41.jpg', alt: 'Serie de Corales', title: 'Serie de Corales - Seychelles', description: null },
  { id: 54, src: '/images/galeria/3.jpg', alt: 'Blindex', title: 'El arca', description: null },
  { id: 55, src: '/images/galeria/5(1).jpg', alt: 'Blindex', title: 'Ventanita al mar', description: null },
  { id: 56, src: '/images/galeria/10(1).jpg', alt: 'Blindex', title: 'Mariposa madre', description: null },
  { id: 57, src: '/images/galeria/4(1).jpg', alt: 'Blindex', title: 'El Arca de Orfeo ', description: null },
  { id: 58, src: '/images/galeria/18(1).jpg', alt: 'Blindex', title: 'El Alma', description: null },
  { id: 59, src: '/images/galeria/19(1).jpg', alt: 'Blindex', title: 'Conocimiento - 1° Premio Salón de Córdoba', description: null },
  { id: 60, src: '/images/galeria/20(1).jpg', alt: 'Blindex', title: 'Ligaduras', description: null },
  { id: 61, src: '/images/galeria/21(1).jpg', alt: 'Blindex', title: 'Ligaduras II - Gran Premio Salón de Córdoba', description: null },
  { id: 62, src: '/images/galeria/22(1).jpg', alt: 'Blindex', title: 'Partenogénesis', description: null },
  { id: 63, src: '/images/galeria/25(1).jpg', alt: 'Blindex', title: 'Ángel Azul II', description: null },
  { id: 64, src: '/images/galeria/26(1).jpg', alt: 'Blindex', title: 'Ángel Azul III', description: null },
  { id: 65, src: '/images/galeria/28(1).jpg', alt: 'Blindex', title: 'Ángel Azul IV', description: null },
  { id: 66, src: '/images/galeria/4.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 67, src: '/images/galeria/5.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 68, src: '/images/galeria/6.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 69, src: '/images/galeria/7.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 70, src: '/images/galeria/8.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 71, src: '/images/galeria/9.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 72, src: '/images/galeria/10.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 73, src: '/images/galeria/11.jpg', alt: 'Las Gordas', title: 'Las Gordas', description: null },
  { id: 74, src: '/images/galeria/13.jpg', alt: 'Serie de La Opresión', title: 'Serie de La Opresión', description: null },
  { id: 75, src: '/images/galeria/14.jpg', alt: 'Serie de La Opresión', title: 'Serie de La Opresión', description: null },
  { id: 76, src: '/images/galeria/15.jpg', alt: 'Serie de La Opresión', title: 'Serie de La Opresión', description: null },
  { id: 77, src: '/images/galeria/16.jpg', alt: 'Serie de La Opresión', title: 'Serie de La Opresión', description: null },
  { id: 78, src: '/images/galeria/21.jpg', alt: 'Construcciones', title: 'Construcción B-P 4', description: null },
  { id: 79, src: '/images/galeria/22.jpg', alt: 'Construcciones', title: 'Construcción P 5', description: null },
  { id: 80, src: '/images/galeria/23.jpg', alt: 'Construcciones', title: 'Construcción P 6', description: null },
  { id: 81, src: '/images/galeria/24.jpg', alt: 'Construcciones', title: 'Los Fantasmas del Abuelo', description: null },
  { id: 82, src: '/images/galeria/34.jpg', alt: 'Altar', title: 'El Altar', description: null },
  { id: 83, src: '/images/galeria/36.jpg', alt: 'Construcciones', title: 'Horizonte en Cusco', description: null },
  { id: 84, src: '/images/galeria/39.jpg', alt: 'Construcciones', title: 'Estallido', description: null },
  { id: 85, src: '/images/galeria/40.jpg', alt: 'Construcciones', title: 'Hijo...', description: null },
];

// Define el tipo para la imagen del modal
interface SelectedImage {
  src: string;
  alt: string;
  title: string;
  description: string | null;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const openModal = (src: string, alt: string, title: string, description: string | null) => {
    setSelectedImage({ src, alt, title, description });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Galería</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paintings.map((painting) => (
          <GalleryItem
            key={painting.id}
            src={painting.src}
            alt={painting.alt}
            title={painting.title}
            onClick={() => openModal(painting.src, painting.alt, painting.title, painting.description)} // Pasamos la función openModal
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Nota sobre la Colección:
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Esta selección fotográfica representa una muestra curada del vasto trabajo de la artista. Gran parte de las obras expuestas han sido adquiridas y forman parte de colecciones privadas y públicas en Argentina y el extranjero. Si bien esta galería web es un recorrido por las diferentes series, la producción completa de María Teresa Belloni es considerablemente más extensa que las piezas aquí mostradas. Para consultas sobre obras disponibles o la colección histórica, por favor, diríjase a la sección de Contacto.
        </p>
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
            
            {/* CONTENEDOR DE TEXTO DEL MODAL */}
            <div className="text-center mt-3">
                
                {/* MOSTRAR DESCRIPCIÓN SOLO SI EXISTE */}
                {selectedImage.description && (
                    <p className="text-sm text-gray-600 max-w-lg mx-auto mt-1">
                        {selectedImage.description}
                    </p>
                )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}