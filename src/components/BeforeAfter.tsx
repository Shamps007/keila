import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/img 1 (2).jpg",
    "/img 1 (3).jpg",
    "/img 1 (4).jpg",
    "/img 1 (5).jpg",
    "/img 1 (6).jpg",
    "/img 1 (7).jpg",
  ];

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="resultados" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight mb-6">
              <span className="text-stone-500 text-sm font-sans uppercase tracking-widest block mb-3 border-l-4 border-wine pl-3 font-medium">
                Sua beleza valorizada
              </span>
              Resultados Reais, Elegantes e Naturais
            </h3>
            
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-6 font-light">
              A Harmonização Orofacial vai além da estética. Ela impacta diretamente na sua autoestima, confiança, bem-estar, segurança ao sorrir e imagem pessoal.
            </p>
            <p className="text-lg text-stone-800 leading-relaxed max-w-xl mb-8 font-medium">
              Pequenos ajustes podem transformar a forma como você se sente ao se olhar no espelho.
            </p>
            <a href="https://www.instagram.com/keila_demetrio" target="_blank" rel="noreferrer" className="text-wine font-bold uppercase tracking-widest text-sm hover:text-wine-light transition-colors inline-flex items-center">
              Acompanhe no Instagram
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-stone-600 hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          >
            {images.map((img, index) => (
              <div key={index} className="w-64 sm:w-80 flex-shrink-0 snap-center bg-white p-2 border border-stone-200 shadow-sm">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Antes e depois ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-stone-600 hover:text-gold transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
