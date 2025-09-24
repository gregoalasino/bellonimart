import Link from 'next/link';
import Image from 'next/image';

const featuredPaintings = [
  { id: 1, src: '/images/16.jpg', alt: 'Obra destacada 1', title: 'Título de la obra 1' },
  { id: 2, src: '/images/23.jpg', alt: 'Obra destacada 2', title: 'Título de la obra 2' },
  { id: 3, src: '/images/30.jpg', alt: 'Obra destacada 3', title: 'Título de la obra 3' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-4 animate-fadeIn">
        María Teresa Belloni
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
        El diálogo entre la forma y el espacio
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
        María Teresa Belloni, una figura destacada en el arte plástico de Córdoba, Argentina, ha dedicado su vida a explorar la relación entre la materia y el entorno. Su obra, anclada en la escultura, el dibujo y la pintura, es un reflejo de su pasión por la creación y su profunda conexión con su tierra natal. A través de sus manos, el metal, la piedra y la madera cobran vida, revelando un lenguaje propio que invita a la reflexión.
      </p>

      {/* Sección de obras destacadas */}
      <h3 className="text-3xl font-bold text-gray-800 mb-8 mt-12">Obras Destacadas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {featuredPaintings.map((painting) => (
          <div key={painting.id} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src={painting.src}
              alt={painting.alt}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">{painting.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link href="/gallery" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-lg">
          Ver la Galería Completa
        </Link>
      </div>
    </div>
  );
}