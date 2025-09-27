import Image from 'next/image';
import HistoryItem from '../components/historyTime'; 

// =======================================================
// DATOS: ETAPAS HISTÓRICAS CON CARRUSEL DE FOTOS (SE MANTIENEN IGUAL)
// =======================================================
const historyStages = [
  {
    year: "Primeros Años",
    description: "Inicios en el mundo del arte, explorando diversas técnicas y materiales en los talleres de Córdoba y Carrara, Italia. Esta época marcó el descubrimiento de su pasión por la escultura.",
    photos: [
      "/images/1981/Primeros años/1.jpg",
      "/images/1981/Primeros años/2.jpg", 
      "/images/1981/Primeros años/4.jpg", 
      "/images/1981/Primeros años/7.jpg", 
      "/images/1981/Primeros años/8.jpg", 
    ],
    reverse: false,
  },
  {
    year: "Experimentación",
    description: "Periodo de intensa producción y experimentación con diferentes texturas y volúmenes. Sus obras comenzaron a ganar reconocimiento en exposiciones nacionales e internacionales.",
    photos: [
      "/images/1991-2000/Experimentación/1.jpg",
      "/images/1991-2000/Experimentación/2.jpg",
      "/images/1991-2000/Experimentación/3.jpg",
      "/images/1991-2000/Experimentación/4.jpg",
      "/images/1991-2000/Experimentación/9.jpg",
      "/images/1991-2000/Experimentación/10.jpg",
      "/images/1991-2000/Experimentación/11.jpg",
      "/images/1991-2000/Experimentación/18.jpg",
      "/images/1991-2000/Experimentación/20.jpg",
      "/images/1991-2000/Experimentación/21.jpg",
      "/images/1991-2000/Experimentación/22.jpg",
      "/images/1991-2000/Experimentación/23 (1).jpg",
      "/images/1991-2000/Experimentación/35.jpg",
    ],
    reverse: true,
  },
  {
    year: "Consolidación",
    description: "Su obra, habiendo trascendido las fronteras, logró participar en bienales y muestras en distintos países. Continúa explorando nuevas dimensiones en su lenguaje artístico, siempre fiel a sus raíces.",
    photos: [
      "/images/2001-2010/Consolidación/2.jpg", 
      "/images/2001-2010/Consolidación/5.jpg",
      "/images/2001-2010/Consolidación/11.jpg",
      "/images/2001-2010/Consolidación/12.jpg",
      "/images/2001-2010/Consolidación/18.jpg",
      "/images/2001-2010/Consolidación/19 (1).jpg",
      "/images/2001-2010/Consolidación/21.jpg",
      "/images/2001-2010/Consolidación/23 (1).jpg",
      "/images/2001-2010/Consolidación/29.jpg",
      "/images/2001-2010/Consolidación/45.jpg",
    ],
    reverse: false,
  },
];

// =======================================================
// COMPONENTE PRINCIPAL
// =======================================================
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8">
      
      {/* 1. BIOGRAFÍA INTRODUCTORIA - FOTO Y TEXTO APILADOS Y CENTRADOS */}
      {/* Se usa 'flex-col items-center' para mantener la foto arriba y el texto centrado debajo en TODAS las resoluciones. */}
      <div className="flex flex-col items-center space-y-8 mb-12">
        
        {/* FOTO - Siempre centrada y arriba */}
        <div className="flex-shrink-0">
          <Image
            src="/images/7.jpg" 
            alt="Foto de la artista María Teresa Belloni"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        
        {/* TEXTO - Centrado debajo de la foto, usando un ancho máximo. */}
        <div className="text-gray-700 max-w-3xl text-center"> 
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Acerca de María Teresa Belloni</h1>
          
          <p className="mb-4 text-lg leading-relaxed">
            María Teresa Belloni, nacida en Córdoba, Argentina, es una artista plástica con una trayectoria que abarca más de cinco décadas. Su obra, profundamente arraigada en la escultura, pintura y joyas, explora la relación entre la materia, el espacio y la emoción. Desde sus inicios, ha forjado un lenguaje visual único, utilizando diversos materiales como el metal, la madera, la piedra, el bronce, plásticos, telas, luces, entre otros, para dar vida a formas que dialogan con el observador.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            A lo largo de su carrera, ha participado en numerosas exposiciones individuales y colectivas tanto en Argentina como en el extranjero, recibiendo importantes reconocimientos por su innovadora visión. Sus piezas se encuentran en colecciones privadas y públicas, consolidándola como una referente indiscutible del arte contemporáneo.
          </p>
          <p className="text-lg leading-relaxed">
            Este espacio es un recorrido por su legado, una invitación a descubrir la fuerza y la delicadeza de su creación artística.
          </p>
          
        </div>
      </div>
      
      {/* SECCIÓN DE CITAS (Si la necesitas, re-inclúyela aquí) */}
      {/* NOTA: Las citas no estaban en tu último código, así que no las incluí por defecto. */}
      
      {/* 3. LÍNEA DE TIEMPO HISTÓRICA ("Recorrido") */}
      <h2 className="text-4xl font-bold mb-10 mt-12 text-gray-800 text-center">Recorrido</h2>
      <div className="w-full max-w-4xl">
        {historyStages.map((stage, index) => (
          <HistoryItem
            key={index}
            year={stage.year}
            description={stage.description}
            photos={stage.photos} 
            reverse={stage.reverse}
          />
        ))}
      </div>
    </div>
  );
}