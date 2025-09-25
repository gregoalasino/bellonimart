import Image from 'next/image';
import HistoryItem from '../components/historyTime' // Importa el nuevo componente

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/images/7.jpg" // Asegúrate de colocar una foto de tu abuela en /public/images
            alt="Foto de la artista María Teresa Belloni"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-gray-700 max-w-prose text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Acerca de María Teresa Belloni</h1>
          <p className="mb-4 text-lg leading-relaxed">
            María Teresa Belloni, nacida en Córdoba, Argentina, es una artista plástica con una trayectoria que abarca más de cuatro décadas. Su obra, profundamente arraigada en la escultura, explora la relación entre la materia, el espacio y la emoción. Desde sus inicios, ha forjado un lenguaje visual único, utilizando materiales como el metal, la madera y la piedra para dar vida a formas que dialogan con el observador.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            A lo largo de su carrera, ha participado en numerosas exposiciones individuales y colectivas tanto en Argentina como en el extranjero, recibiendo importantes reconocimientos por su innovadora visión. Sus piezas se encuentran en colecciones privadas y públicas, consolidándola como una referente indiscutible del arte contemporáneo cordobés.
          </p>
          <p className="text-lg leading-relaxed">
            Este espacio es un recorrido por su legado, una invitación a descubrir la fuerza y la delicadeza de su creación artística.
          </p>
        </div>
      </div>

      {/* Sección de la línea de tiempo histórica */}
      <h2 className="text-4xl font-bold mb-10 mt-12 text-gray-800 text-center">Recorrido</h2>
      <div className="w-full max-w-4xl">
        <HistoryItem
          src="/images/9.jpg" // Cambia por la ruta de tu imagen
          alt="María Teresa Belloni joven en su estudio"
          year="Primeros Años (1970s)"
          description="Inicios en el mundo del arte, explorando diversas técnicas y materiales en los talleres de Córdoba. Esta época marcó el descubrimiento de su pasión por la escultura y el dibujo."
        />
        <HistoryItem
          src="/images/36.jpg" // Cambia por la ruta de tu imagen
          alt="María Teresa Belloni trabajando en su taller"
          year="Consolidación y Experimentación (1980s-1990s)"
          description="Periodo de intensa producción y experimentación con diferentes texturas y volúmenes. Sus obras comenzaron a ganar reconocimiento en exposiciones locales y nacionales."
          reverse // Para que esta imagen esté a la derecha y el texto a la izquierda
        />
        <HistoryItem
          src="/images/holidayinn.jpg" // Cambia por la ruta de tu imagen
          alt="María Teresa Belloni en una exposición"
          year="Reconocimiento Internacional (2000s en adelante)"
          description="Su obra trasciende las fronteras, participando en bienales y muestras en distintos países. Continúa explorando nuevas dimensiones en su lenguaje artístico, siempre fiel a sus raíces."
        />
        {/* Agrega más HistoryItems según necesites */}
      </div>
    </div>
  );
}