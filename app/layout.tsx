import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "bellonimart",
  description: "Arte y obras de mi abuela",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Portafolio</h1>
            <div className="flex gap-4">
              <Link href="/">Inicio</Link>
              <Link href="/about">Biografía</Link>
              <Link href="/gallery">Galería</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </nav>
        </header>

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
