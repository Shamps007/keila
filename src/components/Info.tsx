import { useState, useEffect } from 'react';

export default function Info() {
  const images = [
    { src: "/foto-1.jpeg", alt: "Dra. Keila Demétrio" },
    { src: "/foto-2.jpeg", alt: "Dra. Keila em atendimento" },
    { src: "/foto-3.jpeg", alt: "Trabalho da Dra. Keila" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="sobre" className="py-24 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-wine/10 translate-x-4 translate-y-4 rounded-2xl"></div>
            <div className="relative z-10 w-full aspect-[3/4] sm:aspect-[4/5] bg-stone-100 rounded-2xl shadow-xl overflow-hidden">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img.src} 
                  alt={img.alt} 
                  className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-wine w-6' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ir para a foto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10">
              <span className="text-wine font-medium tracking-widest uppercase text-sm block mb-3">
                Sobre a Dra. Keila Demétrio
              </span>
              <h3 className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight">
                Dra. Keila Demétrio
              </h3>
              <p className="text-stone-500 mt-2 font-medium">Cirurgiã-Dentista • CRO-SC 19694</p>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                Através de protocolos avançados de Harmonização Orofacial, a Dra. Keila Demétrio entrega resultados elegantes, naturais e personalizados, respeitando a individualidade de cada paciente e valorizando os traços que tornam você única.
              </p>
              
              <p>
                Especialista em HOF, a Dra. Keila atua com foco em rejuvenescimento facial, definição de contornos, equilíbrio estético e melhora da autoestima, sempre priorizando segurança, naturalidade e excelência técnica em cada procedimento.
              </p>
              
              <p>
                Formada pela Unifacvest e pós-graduada em Harmonização Facial pela Univali, a Dra. Keila atua nas cidades de Petrolândia, Ituporanga e Chapadão do Lageado com foco em estética facial avançada. Seu trabalho combina técnica, sensibilidade estética e protocolos modernos para entregar resultados sofisticados, naturais e seguros.
              </p>

              <blockquote className="border-l-4 border-wine pl-6 mt-8 py-2 italic text-stone-800 font-serif text-2xl font-light">
                “Atendimento humanizado, excelência técnica e naturalidade em cada detalhe.”
              </blockquote>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/5547996230592" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block bg-wine text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-wine-light transition-colors shadow-lg"
              >
                Agendar minha consulta
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

