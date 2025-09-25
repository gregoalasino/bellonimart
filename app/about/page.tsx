import Image from 'next/image';

// Es crucial que el componente se exporte por defecto
export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
      <div className="flex-shrink-0">
        <Image
          src="/images/7.jpg"
          alt="Foto de la artista"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="text-gray-700 max-w-prose">
        <h1 className="text-3xl font-bold mb-4">Acerca de María Teresa Belloni</h1>
        <p className="mb-4">
          María Teresa Belloni, una artista plástica con una trayectoria de más de 30 años. Su pasión por el arte comenzó desde muy joven, explorando diversas técnicas como la acuarela, el óleo y la pintura acrílica.
        </p>
        <p className="mb-4">
          Sus obras se caracterizan por el uso vibrante del color y la representación de paisajes, retratos y escenas de la vida cotidiana. Ha participado en diversas exposiciones locales y sus piezas se encuentran en colecciones privadas.
        </p>
        <p>
          Para ella, el arte es una forma de expresión y una manera de compartir la belleza que encuentra en el mundo.
        </p>
      </div>
    </div>
  );
}