// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Navbar() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 💡 NUEVO ESTADO para el menú lateral
    
    // Lista de enlaces principales (incluyendo la Galería como un placeholder)
    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Biografía" },
        { href: "/contact", label: "Contacto" },
    ];
    
    // Lista de enlaces de la galería
    const galleryLinks = [
        { href: "/gallery", label: "Esculturas" },
        { href: "/gallery/pinturas", label: "Pinturas" },
        { href: "/gallery/joyas", label: "Joyas" },
    ];

    // Función para cerrar el dropdown o el menú lateral después de un clic
    const handleLinkClick = () => {
        setIsGalleryOpen(false);
        setIsMenuOpen(false); // Cierra el menú lateral en móvil
    };

    return (
        <header className="bg-white shadow-md z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Portafolio</h1>
                
                {/* 1. BOTÓN DE HAMBURGUESA (VISIBLE SOLO EN MÓVIL) */}
                <button 
                    className="lg:hidden text-2xl p-2 z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? '✕' : '☰'} 
                </button>

                {/* 2. MENÚ PRINCIPAL (VISIBLE SOLO EN PANTALLAS GRANDES) */}
                <div className="hidden lg:flex gap-4 items-center">
                    
                    {/* Enlaces principales */}
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-red-600 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    
                    {/* BOTÓN GALERÍA CON DROPDOWN (Solo en escritorio) */}
                    <div 
                        className="relative" 
                        onMouseEnter={() => setIsGalleryOpen(true)}
                        onMouseLeave={() => setIsGalleryOpen(false)}
                    >
                        <button
                            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                            className="flex items-center hover:text-red-600 transition-colors"
                        >
                            Obras
                            <span className={`ml-1 text-sm transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : 'rotate-0'}`}>
                                ▼
                            </span>
                        </button>

                        {/* Dropdown del menú Galería */}
                        {isGalleryOpen && (
                            <div className="absolute right-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                                {galleryLinks.map((link) => (
                                    <Link 
                                        key={link.href}
                                        href={link.href} 
                                        onClick={handleLinkClick} 
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* 3. MENÚ LATERAL (SIDEBAR/DRAWER - VISIBLE EN MÓVIL AL HACER CLIC) */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-40 lg:hidden 
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 pt-16 flex flex-col space-y-4">
                    
                    {/* Enlaces principales */}
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            onClick={handleLinkClick} 
                            className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b pb-2"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* TÍTULO DE GALERÍA Y SU SUBMENÚ */}
                    <h4 className="pt-2 text-lg font-semibold text-gray-500 border-t mt-4">Obras</h4>
                    {galleryLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            onClick={handleLinkClick} 
                            className="text-base pl-4 text-gray-700 hover:text-red-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Overlay para cerrar el menú lateral al hacer clic fuera */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" 
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
}