// src/components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Check Up Osteopatico",
      duration: "60 min",
      desc: "Un'analisi approfondita della tua storia clinica, test posturali e mobilità articolare, seguiti dal primo trattamento mirato."
    },
    {
      title: "Trattamenti Osteopatici Personalizzati",
      duration: "45-60 min",
      desc: "Sedute successive focalizzate sulla risoluzione di disfunzioni specifiche, riequilibrio strutturale e rilascio miofasciale."
    }
  ];

  return (
    <section className="bg-studio-dark text-studio-bg py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-start text-left">
        
        {/* Left-Aligned Header Block */}
        <div className="space-y-3 mb-16 w-full">
          <span className="font-montserrat text-xs font-semibold tracking-[0.2em] text-studio-accent uppercase block">
            Servizi & Trattamenti
          </span>
          <h2 className="font-cormorant text-4xl md:text-6xl text-studio-bg font-light leading-tight">
            Percorsi di Cura Personalizzati
          </h2>
          <p className="font-montserrat text-sm text-studio-bg/75 leading-relaxed max-w-2xl pt-4">
            Ogni seduta è strutturata per rispondere alle reali necessità del tuo corpo. Non utilizziamo protocolli standardizzati, ma creiamo un percorso terapeutico su misura per te.
          </p>
        </div>

        {/* Full-Width Service List */}
        <div className="space-y-10 w-full">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group border-b border-studio-bg/10 pb-8 last:border-0 last:pb-0"
            >
              {/* Title & Duration Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
                <h3 className="font-montserrat font-medium text-xl text-studio-bg tracking-wide group-hover:text-studio-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Dotted connector line */}
                <div className="hidden sm:block flex-grow mx-6 border-b border-dotted border-studio-bg/20" />
                
                <span className="font-montserrat text-sm tracking-widest uppercase text-studio-accent shrink-0">
                  {service.duration}
                </span>
              </div>

              {/* Service Description*/}
              <p className="font-montserrat text-sm text-studio-bg/70 leading-relaxed max-w-3xl">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action
        <div className="mt-16 self-center">
          <a href="#contatti" className="inline-block bg-studio-accent text-studio-dark font-montserrat text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-studio-bg transition-colors duration-300 shadow-md">
            Prenota una prima visita
          </a>
        </div>*/}

      </div>
    </section>
  );
};

export default Services;