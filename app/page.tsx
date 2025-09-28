"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// =======================================================
// DATOS: OBRAS DESTACADAS DEL CARRUSEL
// =======================================================
const featuredWorks = [
  {
    id: 10,
    src: '/images/obras_destacadas/jorge.png',
    title: 'Jorge Newbery',
    year: '1981',
    text: 'Maqueta para el aeropuerto Jorge Newbery. Quedó entre los finalistas en el concurso organizado por Aerolíneas Argentinas en 1981. El ganador fue Pollesello.',
  },
  {
    id: 9,
    src: '/images/obras_destacadas/TercerMundo.jpeg',
    title: 'Templo para el Tercer Mundo',
    year: '1986',
    text: 'Obra realizada y emplazada en mármol de 4 metros en Carrara, Italia',
  },
  {
    id: 1,
    src: '/images/obras_destacadas/Renault.jpeg',
    title: 'Renault',
    year: '1990',
    text: 'Esta obra fue encargada por la empresa Renault en el año 1990 para el Museo del Automóvil.',
  },
  {
    id: 2,
    src: '/images/obras_destacadas/OlimpiadasBarcelona.jpeg',
    title: 'Trofeo Olimpiadas Barcelona',
    year: '1992',
    text: 'Ésta obra fue seleccionada entre 5 finalistas para el trofeo de las Olimpiadas de 1992 en Barcelona, España',
  },
  {
    id: 3,
    src: '/images/obras_destacadas/29(1).jpg',
    title: 'Saludo al sol',
    year: '1992',
    text: 'Obra de 8 metros de altura. Unión de dos árboles sobre granito, realizada y emplazada en Austria',
  },
  {
    id: 4,
    src: '/images/obras_destacadas/PuntoDeEncuentro.jpeg',
    title: 'Punto de encuentro',
    year: '1994',
    text: 'Obra de 10 metros de altura. Realizada y emplazada en Alemania',
  },
  {
    id: 5,
    src: '/images/obras_destacadas/Maternidad.jpeg',
    title: 'Maternidad',
    year: '1995',
    text: 'Obra de 6 metros realizada en madera policromada. Austria',
  },
  {
    id: 6,
    src: '/images/obras_destacadas/Tunel14.jpeg',
    title: 'Tunel de la 14',
    year: '1999',
    text: '" Elaboré el diseño artístico de un importante túnel de mi ciudad natal, tiene 190 metros de largo por 5 metros de altura. "',
  },
  {
    id: 7,
    src: '/images/obras_destacadas/HolidayInnPrize.jpeg',
    title: 'Rojos',
    year: '2006',
    text: '" Contratada por el Hotel Holiday Inn, realicé la obra " Rojos " de 18 metros, en el marco del encuentro de Mercosur con presidentes latinoamericanos. "',
  },
  {
    id: 8,
    src: '/images/obras_destacadas/OsdeReflexion.jpeg',
    title: 'Reflexión',
    year: '2009',
    text: 'Ganadora del concurso. Osde realiza el móvil llamado "Reflexión" de 13 metros de altura.',
  },
];

// =======================================================
// DATOS: CITAS DE REFERENCIA
// =======================================================
const quoteBeinkofer = {
  text: '... A menudo se afirma, que la naturaleza y el arte están en contraposición, pero seguramente ello no es cierto. Ambos se inspiran en las mismas profundidades. Esto queda especialmente de manifiesto al observar las obras de María Teresa Belloni, la cual extrae de la naturaleza los más variados materiales y les confiere nuevas dimensiones espirituales; casi podría decirse que descascara dichas dimensiones (de su elemento primario) Y ocurre así que uno se asombra y se admira cuando descubre lo que se esconde detrás de las cosas cotidianas, lo cual nunca habíamos imaginado. Esta artista posee la virtud, de lograr que nuestra visión se abra a nuevas relaciones y de conducirnos y movilizarnos a seguir pensando. No es ésta la más bella e importante misión del arte, que basándose en la vida misma llega a descubrir nuevas dimensiones, con lo cual nuestras vidas se tornan más comprensibles? A Maria Teresa Belloni debemos estarle agradecidos por ello…',
  author: 'Dr. Norbert Beinkofer',
};

const quoteGarcia = {
  text: '…Como si soñara con ser una de esas antiguas cesteras que contaban solo con sus manos para construir las trenzas en que habitaban los primitivos espíritus. Como si procurara disimular las puertas que construía para que las almas no quedaran prisioneras. Supo que las pausas eran decisivas lo que la llevó a honrar las piedras. Conjeturó que solitaria y viajera el alma no debe negarse a asumir lo gravoso de su destino. Dijo Yo soy. Desdeñó el esplendor de los juramentos, apreció aquello que era amargo y la mantuvo en vilo. María Teresa Belloni, sin pretenderlo, sólo allí entraste enteramente en ese nombre que es el tuyo…',
  author: 'Gerardo Máximo García',
  title: 'Un óceano sin fin', // Nuevo título
};

// =======================================================
// COMPONENTE PRINCIPAL
// =======================================================
export default function HomePage() {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const activeWork = featuredWorks[activeWorkIndex];
  const totalWorks = featuredWorks.length;

  const nextWork = () => {
    setActiveWorkIndex((prevIndex) => (prevIndex + 1) % totalWorks);
  };

  const prevWork = () => {
    setActiveWorkIndex((prevIndex) => (prevIndex - 1 + totalWorks) % totalWorks);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 md:px-8">
      {/* Título Principal */}
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-8 animate-fadeIn">
        María Teresa Belloni
      </h1>
      
      {/* 1. CITAS - PRIMERA CITA (Beinkofer) */}
      <div className="max-w-4xl w-full mb-16 px-4">
        <blockquote className="italic text-lg text-gray-700 leading-relaxed text-left font-serif">
          “{quoteBeinkofer.text}”
        </blockquote>
        <p className="font-semibold text-gray-800 text-right mt-4 text-md">
          — {quoteBeinkofer.author}
        </p>
      </div>

      {/* -------------------- SECCIÓN CARRUSEL CON BOTONES -------------------- */}
      <h3 className="text-3xl font-bold text-gray-800 mb-8 mt-12">Obras Destacadas</h3>

      <div className="flex flex-col lg:flex-row max-w-6xl w-full bg-gray-50 rounded-lg shadow-xl overflow-hidden">

        {/* PANEL IZQUIERDO: IMAGEN GRANDE con Controles */}
        <div className="lg:w-1/2 relative">
          <Link key={activeWork.id + '-link'} href="/gallery" className="block"> 
            <Image
              key={activeWork.id}
              src={activeWork.src}
              alt={activeWork.title}
              width={700}
              height={700}
              className="object-cover w-full h-full aspect-square transition-opacity duration-500 ease-in-out cursor-pointer"
            />
          </Link>
          
          {/* Botones de Navegación */}
          <button
            onClick={prevWork}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Obra Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextWork}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Obra Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de posición */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {featuredWorks.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${activeWorkIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'} cursor-pointer`}
                onClick={() => setActiveWorkIndex(index)}
                aria-label={`Ir a la obra ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* PANEL DERECHO: Texto de la obra activa */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center text-left">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">{activeWork.year}</h4>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeWork.title}</h3>
          <p className="text-lg text-gray-700 italic leading-relaxed">
            {activeWork.text}
          </p>
          <div className="mt-8">
             <Link href="/gallery" className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-md hover:bg-gray-900 transition duration-300">
               Ver la Galería Completa
             </Link>
          </div>
        </div>
      </div>

      {/* Botón de galería (Fuera del carrusel) */}
      {/* <div className="mt-16">
        <Link href="/gallery" className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-900 transition duration-300 shadow-lg">
          Ver la Galería Completa
        </Link>
      </div> */}

      {/* 2. CITAS - SEGUNDA CITA (García) - AÑADIDO TÍTULO */}
      <div className="max-w-4xl w-full mt-20 mb-8 px-4">
        {/* Título alineado a la izquierda (donde comienza el texto) */}
        <h4 className="text-2xl font-serif font-bold text-gray-800 mb-4 text-center md:text-left">
          {quoteGarcia.title}
        </h4>
        <blockquote className="italic text-lg md:text-xl text-gray-600 leading-relaxed text-center md:text-left">
          “{quoteGarcia.text}”
        </blockquote>
        <p className="font-semibold text-gray-800 text-center mt-4 text-md md:text-right">
          — {quoteGarcia.author}
        </p>
      </div>
    </div>
  );
}