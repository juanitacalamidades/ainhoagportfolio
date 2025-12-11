// components/layout/Footer.tsx
import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-grey border-t-1 border-t mt-auto">
      <div className="container mx-auto px-4 py-4">

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Marca y derechos */}
          <div className="text-center md:text-left">
            <p className="text-xs font-sans font-light text-white-900">
              © Ainhoa Güemes {currentYear}
            </p>

          </div>

          {/* Enlaces legales */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/aviso-legal"
              className="text-xs text-white-600 hover:text-white-900 transition-colors"
            >
              Aviso Legal
            </Link>
            <Link
              href="/politica-privacidad"
              className="text-xs text-white-600 hover:text-white-900 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white-600 hover:text-white-900 transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white-600 hover:text-white-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contacto@ainhoaguemes.com"
              className="p-2 text-white-600 hover:text-white-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;