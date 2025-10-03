// app/contact/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Datos de contacto separados
const artistaData = {
    title: "Contacto | María Teresa Belloni",
    phone: "54 9 351 665 4113",
    email1: "bellonimart@hotmail.com",
    email2: "mariatbelloni@gmail.com",
    bgImage: "/images/pinturas/2001/48.jpg", // Usa tu pintura rojiza (ejemplo: 48.jpg)
    hoverColor: "text-red-400", // Color para el efecto hover
};

const galeriaData = {
    title: "Galería Dragón y Rosas",
    email: "gmarcantini@gmail.com",
    // Usaremos una imagen de la galería como fondo (ejemplo: image_09062e.jpg)
    bgImage: "/images/dr_rs.png", // 🚨 ASEGÚRATE DE USAR TU RUTA REAL 🚨
    hoverColor: "text-amber-400", // Color diferente para el efecto hover
};

// Componente Tarjeta Reutilizable
interface ContactCardProps {
    title: string;
    bgImage: string;
    hoverColor: string;
    children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, bgImage, hoverColor, children }) => (
    <div className="relative w-full lg:w-1/2 min-h-[450px] overflow-hidden rounded-xl shadow-xl 
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
        <Image
            src={bgImage}
            alt={`Fondo artístico para ${title}`}
            layout="fill"
            objectFit="cover"
            quality={90}
            className="z-10"
        />
        {/* Overlay semi-transparente para legibilidad, más claro para la galería */}
        <div className="absolute inset-0 bg-black/60 z-20"></div> 

        <div className={`relative z-30 p-8 md:p-12 h-full flex flex-col justify-center text-white 
                         transition-colors duration-300 ${hoverColor}`}>
            
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 drop-shadow-lg transition-colors duration-300 ${hoverColor}`}>
                {title}
            </h2>
            
            <div className="space-y-4">
                {children}
            </div>
        </div>
    </div>
);


export default function ContactPage() {
    return (
        <div className="flex justify-center items-stretch py-12 px-4 md:px-8 min-h-[calc(100vh-150px)]"> 
            
            {/* Contenedor de las dos tarjetas */}
            <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-8">
                
                {/* 1. TARJETA: ARTISTA */}
                <ContactCard 
                    title={artistaData.title} 
                    bgImage={artistaData.bgImage} 
                    hoverColor={artistaData.hoverColor}
                >
                    {/* Datos de la artista */}
                    <h3 className="text-2xl font-semibold mb-3 drop-shadow">Datos Personales</h3>
                    
                    <div className="flex items-center text-lg drop-shadow">
                        📞 <span className="ml-3 font-semibold">{artistaData.phone}</span>
                    </div>
                    <div className="flex items-center text-lg drop-shadow">
                        ✉️ <span className="ml-3">{artistaData.email1}</span>
                    </div>
                    <div className="flex items-center text-lg drop-shadow">
                        ✉️ <span className="ml-3">{artistaData.email2}</span>
                    </div>
                </ContactCard>

                {/* 2. TARJETA: GALERÍA */}
                <ContactCard 
                    title={galeriaData.title} 
                    bgImage={galeriaData.bgImage} 
                    hoverColor={galeriaData.hoverColor}
                >
                    {/* Datos de la galería */}
                    <h3 className="text-2xl font-semibold mb-3 drop-shadow">Contacto y Consultas</h3>
                    
                    <div className="space-y-2">
                        <div className="flex items-center text-lg drop-shadow">
                            ✉️ <span className="ml-3">{galeriaData.email}</span>
                        </div>
                        <p className="pt-4 text-base leading-relaxed drop-shadow">
                            Para consultas sobre ventas, exhibiciones o disponibilidad de obras, por favor, dirija su email a la galería.
                        </p>
                    </div>
                </ContactCard>
            </div>
        </div>
    );
}