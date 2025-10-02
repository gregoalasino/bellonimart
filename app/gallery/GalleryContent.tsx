// app/gallery/GalleryContent.tsx
"use client";

import React, { useState } from 'react';
import GalleryItem from '@/app/components/galleryItem'; // Asumimos esta ruta
import Image from 'next/image';
import { motion } from 'framer-motion';

// Tipos de datos
interface Painting {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string | null;
}
interface SelectedImage {
    src: string;
    alt: string;
    title: string;
    description: string | null;
}
interface GalleryContentProps {
    title: string;
    paintings: Painting[];
}

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};


export default function GalleryContent({ title, paintings }: GalleryContentProps) {
    const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

    const openModal = (src: string, alt: string, title: string, description: string | null) => {
        setSelectedImage({ src, alt, title, description });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="p-4"> 
            <h2 className="text-3xl font-bold mb-8 mt-0 pt-0 text-center">{title}</h2>
            
            {/* CUADRÍCULA ANIMADA */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {paintings.map((painting) => (
                    <motion.div key={painting.id} variants={itemVariants}>
                        <GalleryItem
                            src={painting.src}
                            alt={painting.alt}
                            title={painting.title}
                            onClick={() => openModal(painting.src, painting.alt, painting.title, painting.description)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* NOTA SOBRE LA COLECCIÓN */}
            <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Nota sobre la Colección:
                </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Esta selección fotográfica representa una muestra curada del vasto trabajo de la artista. Gran parte de las obras expuestas han sido adquiridas y forman parte de colecciones privadas y públicas en Argentina y el extranjero. Si bien esta galería web es un recorrido por las diferentes series, la producción completa de María Teresa Belloni es considerablemente más extensa que las piezas aquí mostradas. Para consultas sobre obras disponibles o la colección histórica, por favor, diríjase a la sección de Contacto. 
                    </p>
                <div>
                    <a 
                        href="https://drive.google.com/drive/folders/1Mup_3A4yTuowi2WBgMZCVNJd2phisMC7?usp=drive_link" 
                        target="_blank" // Abre el enlace en una nueva pestaña
                        rel="noopener noreferrer" // Mejora la seguridad y el rendimiento
                        className="text-blue-600 hover:text-blue-800 underline font-semibold" // Estilos Tailwind para enlaces
                    >
                        Google Drive con biografía, esculturas, joyas y pinturas
                    </a>.
                </div>
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-800 text-3xl font-bold p-2 leading-none hover:text-gray-600 z-10"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={800} // Puedes ajustar estos valores
                            height={600} // Puedes ajustar estos valores
                            className="max-w-full max-h-[80vh] object-contain rounded-md"
                        />
                        <div className="text-center mt-3">
                            <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-base text-gray-700 max-w-lg mx-auto mt-1">
                                    {selectedImage.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}