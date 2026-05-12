import { Syringe, Droplets } from 'lucide-react';

export default function Procedures() {
  const procedures = [
    {
      name: "Toxina Botulínica (Botox)",
      description: "Suavize rugas e linhas de expressão, previna marcas do envelhecimento e conquiste um aspecto mais leve, descansado e elegante. Indicado também para: Bruxismo, Sorriso gengival, Linhas da testa, Pés de galinha, Rugas entre as sobrancelhas.",
      icon: <Syringe className="w-8 h-8 text-wine-light" />,
      video: "/video 2.mp4"
    },
    {
      name: "Preenchimento Facial",
      description: "Harmonize os traços do rosto com equilíbrio e sofisticação. Protocolos personalizados para: Lábios, Mandíbula, Mento, Malar, Bigode chinês, Linhas de marionete. Resultados que valorizam sua beleza sem exageros.",
      icon: <Droplets className="w-8 h-8 text-wine-light" />,
      video: "/video 3.mp4"
    }
  ];

  return (
    <section id="procedimentos" className="py-24 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <h3 className="text-3xl sm:text-4xl font-serif leading-tight">
            <span className="text-stone-400 text-sm uppercase tracking-widest block mb-3 font-sans border-l-4 border-wine pl-3">
              Tratamentos Exclusivos
            </span>
            Procedimentos que <span className="text-wine-light italic">elevam sua autoestima</span> com naturalidade
          </h3>
          
          <a 
            href="https://wa.me/5547996230592" 
            target="_blank" rel="noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 bg-wine text-white font-bold uppercase tracking-wider hover:bg-wine-light transition-colors text-sm"
          >
            Agendar Avaliação
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group/list align-stretch">
          {procedures.map((proc, index) => (
            <div key={index} className="flex flex-col bg-stone-800 p-8 border border-stone-700/50">
              <div className="mb-6 bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center border border-stone-700 flex-shrink-0">
                 {proc.icon}
              </div>
              <h4 className="text-xl font-serif mb-4 text-white leading-snug">{proc.name}</h4>
              <p className={`text-stone-400 text-sm leading-relaxed ${proc.video ? 'mb-8' : ''}`}>
                {proc.description}
              </p>
              {proc.video && (
                <div className="mt-auto mt-6 rounded-lg overflow-hidden">
                  <video 
                    src={proc.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
