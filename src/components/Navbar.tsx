import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-medium ${
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-brevo-bg-light py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-1">
              <span className="text-[28px] font-display font-bold tracking-tight text-brevo-text">SwiftRoute</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px]">
              <a href="#funciones" className="hover:opacity-70 transition-opacity">Plataforma</a>
              <a href="#precios" className="hover:opacity-70 transition-opacity">Precios</a>
              <a href="#contacto" className="hover:opacity-70 transition-opacity">Contacto</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-[15px]">
            <a href="#" className="font-bold hover:opacity-70 cursor-pointer">Iniciar sesión</a>
            <a href="#contacto" className="bg-brevo-dark text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Hablar con ventas
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-bold">SwiftRoute</span>
              <button onClick={() => setMobileMenuOpen(false)}><X /></button>
            </div>
            <div className="flex flex-col gap-8 text-xl font-bold">
              <a href="#funciones" onClick={() => setMobileMenuOpen(false)}>Plataforma</a>
              <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
              <div className="h-px bg-gray-100 my-2"></div>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Iniciar sesión</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full bg-brevo-dark text-white py-4 rounded-xl text-center">Hablar con ventas</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
