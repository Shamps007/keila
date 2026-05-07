import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative flex flex-col sm:block min-h-[100svh] overflow-hidden bg-stone-900 pt-20 sm:pt-0"
    >
      <div className="w-full sm:absolute sm:inset-0 sm:h-full sm:w-full z-0 relative flex sm:block items-center justify-center bg-stone-900">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto sm:h-full object-contain sm:object-cover sm:object-center opacity-90 sm:opacity-40"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="hidden sm:block absolute inset-0 bg-stone-900/50 sm:bg-stone-900/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 pb-16 sm:py-32 flex-grow flex flex-col justify-start sm:justify-center">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center mb-6">
            <span className="text-[10px] sm:text-xs font-light text-stone-300 tracking-[0.25em] uppercase border-l border-gold pl-3">
              Harmonização Orofacial com Naturalidade, Sofisticação e Segurança
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 font-light tracking-wide drop-shadow-md">
            Realce a <span className="text-gold italic block mt-1 font-normal">Sua Melhor Versão</span>
          </h1>
          
          <p className="text-base sm:text-xl text-stone-200 mb-8 max-w-lg leading-relaxed font-light drop-shadow-md">
            Sua beleza não precisa mudar quem você é. <br className="hidden sm:block" />
            Ela precisa apenas ser valorizada da forma certa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5547996230592" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold text-white bg-wine hover:bg-wine-light transition-colors uppercase tracking-wider"
            >
              Agende sua Avaliação
            </a>
            <a 
              href="#resultados" 
              className="inline-flex justify-center items-center px-8 py-4 border border-stone-400 text-base font-bold text-white bg-transparent hover:bg-white hover:text-stone-900 transition-colors uppercase tracking-wider"
            >
              Ver Resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
