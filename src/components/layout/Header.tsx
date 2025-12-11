// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContest";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Fotografías', href: '/photography' },
  { label: 'Fotoensayos', href: '/photoessay' },
  { label: 'Curadurías', href: '/curatorship' },
  { label: 'Ezki&Nori', href: '/ezkinori' },
  { label: 'Biografía', href: '/about' },
  { label: 'Contacto', href: '/contact' },
  // Shop se añadirá después
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-transparent backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5 md:py-6'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white-900 hover:text-gray-700 transition-colors"
          >
            Ainhoa Güemes
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium hover:text-gray-400 transition-colors relative py-2',
                    isActive 
                      ? 'text-white-900 font-semibold' 
                      : 'text-white-600 hover:text-white-900'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-white-900 rounded-full" />
                  )}
                </Link>
              );
            })}
             <button
              onClick={toggleTheme}
              className="text-black dark:text-white hover:text-gray-400 p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Botón Menú Móvil */}
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white-600 hover:text-white-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t mt-4">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'py-2.5 px-4 rounded-lg text-base font-medium transition-colors',
                      isActive
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-white-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
              onClick={toggleTheme}
              className="px-4 text-black dark:text-white hover:text-gray-400 p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;