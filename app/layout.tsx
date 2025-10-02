// app/layout.tsx
import "./globals.css";
import { Roboto } from 'next/font/google';
import Navbar from './components/Navbar'; // 💡 IMPORTAMOS EL NUEVO COMPONENTE NAVBAR

// Define la fuente con los estilos que necesites
const primaryFont = Roboto({
  weight: ['300', '400', '700'], // Define los grosores de fuente que usarás
  subsets: ['latin'],
  variable: '--font-roboto', // Asigna una variable CSS para usarla en Tailwind
});

export const metadata = {
  title: "bellonimart",
  description: "Arte y obras de María Teresa Belloni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${primaryFont.variable}`}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        
        {/* Navbar - Usamos el componente externo */}
        <Navbar />

        {/* Contenido dinámico */}
        <main className="flex-grow container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
          © {new Date().getFullYear()} bellonimart. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}