import { Syringe, Sparkle, Wind, ShieldCheck, HeartPulse, Droplets } from 'lucide-react';

const services = [
  {
    id: 'botox',
    title: 'Toxina Botulínica (Botox)',
    description: 'Prevenção e tratamento de rugas dinâmicas, sorriso gengival e bruxismo, proporcionando um rosto mais descansado.',
    icon: Syringe,
  },
  {
    id: 'preenchimento',
    title: 'Preenchimento Labial e Facial',
    description: 'Restauração de volume, contorno e assimetrias utilizando ácido hialurônico de ponta para resultados naturais.',
    icon: Droplets,
  },
  {
    id: 'fios',
    title: 'Fios de Sustentação',
    description: 'Efeito lifting não cirúrgico e estímulo intenso de colágeno para combater a flacidez facial e do pescoço.',
    icon: Wind,
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores de Colágeno',
    description: 'Tratamento focado em restaurar a firmeza e qualidade da pele, estimulando a produção natural do próprio corpo.',
    icon: Sparkle,
  },
  {
    id: 'lipo',
    title: 'Lipo de Papada',
    description: 'Redução não cirúrgica da gordura submentoniana (papada) com enzimas, melhorando o contorno mandibular.',
    icon: ShieldCheck,
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    description: 'Hidratação profunda injetável que melhora a textura, viço e elasticidade da pele, suavizando linhas finas.',
    icon: HeartPulse,
  },
];

export default function Services() {
  return (
    <section id="procedimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-3">Nossos Procedimentos</h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6">Tratamentos Personalizados para Você</h3>
          <p className="text-lg text-stone-600">
            Na Harmonização Orofacial, cada rosto é único. Analisamos suas proporções para indicar o protocolo ideal, sempre buscando realçar sua beleza natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 border border-stone-100/50"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-700" />
                </div>
                <h4 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#contato" 
                  className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Saber mais
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
