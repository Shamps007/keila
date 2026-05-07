import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-900 border-b border-stone-800 shadow-md py-0' : 'bg-transparent border-b border-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-white flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight">Dra. Keila</span>
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Demétrio</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-stone-300 hover:text-wine transition-colors text-sm uppercase tracking-widest">Início</a>
            <a href="#sobre" className="text-stone-300 hover:text-wine transition-colors text-sm uppercase tracking-widest">Sobre</a>
            <a href="#resultados" className="text-stone-300 hover:text-wine transition-colors text-sm uppercase tracking-widest">Resultados</a>
            <a 
              href="#contato" 
              className="bg-wine text-white px-6 py-2.5 hover:bg-wine-light transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Agendar Avaliação
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-300 hover:text-wine hover:bg-stone-800 uppercase tracking-widest text-sm">Início</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-300 hover:text-wine hover:bg-stone-800 uppercase tracking-widest text-sm">Sobre</a>
            <a href="#resultados" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-300 hover:text-wine hover:bg-stone-800 uppercase tracking-widest text-sm">Resultados</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-wine font-bold hover:bg-stone-800 uppercase tracking-widest text-sm">Agendar Avaliação</a>
          </div>
        </div>
      )}
    </header>
  );
}
