import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const benefits = [
    "Atendimento personalizado e humanizado",
    "Produtos de altíssima qualidade (Importados)",
    "Foco em resultados naturais e elegantes",
    "Biossegurança e ambiente acolhedor",
    "Análise facial detalhada antes de qualquer procedimento",
    "Acompanhamento pós-procedimento contínuo"
  ];

  return (
    <section id="sobre" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-amber-200 rounded-3xl translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1590611936760-eeb9bcabe615?q=80&w=2070&auto=format&fit=crop" 
              alt="Doutora em atendimento clínico" 
              className="relative rounded-3xl object-cover w-full h-[500px] shadow-lg grayscale-[20%]"
            />
          </div>
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-3">Sobre a Profissional</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6">Ciência, Arte e Odontologia em um só lugar.</h3>
            
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Como cirurgiã-dentista especializada em Harmonização Orofacial, meu objetivo é alinhar a estética com a função. A Odontologia nos dá um conhecimento profundo da anatomia da face, garantindo muito mais segurança em todos os procedimentos injetáveis.
            </p>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Acredito que o melhor resultado é aquele que não parece ter sido feito. Buscamos devolver o que o tempo levou, prevenindo o envelhecimento de forma elegante e respeitando seus traços originais.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 flex-shrink-0 mr-3" />
                  <span className="text-stone-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-stone-200">
              <p className="font-serif text-xl text-stone-900 mb-1">Dra. Rebeca Silva</p>
              <p className="text-stone-500">CRO-SP 123456 • Especialista em HOF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
