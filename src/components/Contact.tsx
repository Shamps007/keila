import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="bg-stone-50 border border-stone-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 leading-tight mb-6">
                <span className="text-stone-500 text-sm font-sans uppercase tracking-widest block mb-3 border-l-4 border-wine pl-3">
                  Atendimento
                </span>
                Sua beleza merece um atendimento personalizado
              </h3>
              
              <div className="text-stone-600 mb-8 space-y-4">
                <p>
                  Cada rosto possui características únicas. Por isso, cada protocolo é desenvolvido de forma individualizada, considerando:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Anatomia facial</li>
                  <li>Objetivos estéticos</li>
                  <li>Naturalidade dos resultados</li>
                  <li>Segurança do procedimento</li>
                  <li>Harmonia facial completa</li>
                </ul>
                <p className="font-serif italic text-xl text-stone-800 mt-6 border-l-2 border-gold pl-4 py-1">
                  "O objetivo não é transformar você em outra pessoa. É revelar a sua melhor versão."
                </p>
              </div>

              
              <div className="mt-8 pt-8 border-t border-stone-200">
                 <h4 className="font-serif text-2xl text-stone-900 mb-4">Agende sua avaliação</h4>
                 <p className="text-sm text-stone-600 mb-6">
                    Descubra quais protocolos são ideais para valorizar sua beleza com naturalidade e sofisticação.
                 </p>
                 <div className="flex flex-col gap-4 text-stone-700 mb-8">
                    <div className="flex items-center gap-3">
                       <MapPin className="text-wine w-5 h-5 flex-shrink-0" />
                       <span className="text-sm"><strong>Atendimento em:</strong> Petrolândia, Ituporanga e Chapadão do Lageado</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Phone className="text-wine w-5 h-5 flex-shrink-0" />
                       <span className="text-sm"><strong>WhatsApp:</strong> (47) 99623-0592</span>
                    </div>
                 </div>

                 <a 
                    href="https://wa.me/5547996230592" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block bg-wine text-white font-bold uppercase tracking-widest px-8 py-4 text-center hover:bg-wine-light transition-colors text-sm w-full sm:w-auto"
                  >
                    Agendar Avaliação
                  </a>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/3 -translate-y-1/3 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
              alt="Clínica estrutura e equipamentos" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
