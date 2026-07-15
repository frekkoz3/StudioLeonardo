// src/components/Services.tsx
import React from 'react';
import servicesBg from '../assets/images/facial-massage.jpeg'

const Services: React.FC = () => {
  // The primary clinical services offered at Studio Leonardo
  const servicesList = [
    {
      title: "Valutazione Osteopatica Iniziale",
      duration: "60 min",
      desc: "Un'analisi approfondita della tua storia clinica, test posturali e mobilità articolare, seguiti dal primo trattamento mirato."
    },
    {
      title: "Trattamento Osteopatico Correttivo",
      duration: "45 min",
      desc: "Sedute successive focalizzate sulla risoluzione di disfunzioni specifiche, riequilibrio strutturale e rilascio miofasciale."
    },
    {
      title: "Osteopatia Pediatrica e Gravidanza",
      duration: "45 min",
      desc: "Trattamenti dolci per accompagnare il corpo durante la maternità e supportare la crescita armoniosa dei più piccoli."
    }
  ];

  return (
    <section className="bg-studio-dark text-studio-bg py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Services list & Description (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
          
          {/* Header Block */}
          <div className="space-y-3">
            <span className="font-montserrat text-xs font-semibold tracking-[0.2em] text-studio-accent uppercase block">
              Servizi & Trattamenti
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-studio-bg font-light leading-tight">
              Percorsi di Cura <br />Personalizzati
            </h2>
            <p className="font-montserrat text-sm text-studio-bg/75 max-w-xl leading-relaxed">
              Ogni seduta è strutturata per rispondere alle reali necessità del tuo corpo. Non utilizziamo protocolli standardizzati, ma creiamo un percorso terapeutico su misura.
            </p>
          </div>

          {/* Elegant Price/Service List */}
          <div className="space-y-8">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="group border-b border-studio-bg/10 pb-6 last:border-0 last:pb-0"
              >
                {/* Title & Duration Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-montserrat font-medium text-lg text-studio-bg tracking-wide group-hover:text-studio-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Subtle dotted connector line on desktop */}
                  <div className="hidden sm:block flex-grow mx-4 border-b border-dotted border-studio-bg/20" />
                  
                  <span className="font-montserrat text-xs tracking-wider uppercase text-studio-accent shrink-0">
                    {service.duration}
                  </span>
                </div>

                {/* Service Description */}
                <p className="font-montserrat text-xs md:text-sm text-studio-bg/65 leading-relaxed max-w-2xl">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: High-End Image with Dark Offset Frame (Spans 5 columns) */}
        <div className="lg:col-span-5 relative group order-1 lg:order-2">
          {/* Decorative frame - swaps to our background color to contrast the dark green */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-studio-bg/10 rounded-sm translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          
          <div className="relative overflow-hidden rounded-sm aspect-[4/5] z-10 shadow-xl">
            {/* Rename your other studio/treatment image to "services.jpg" 
              and place it inside your public/images/ folder!
            */}
            <img 
              src={servicesBg} 
              alt="Ambiente dello Studio Leonardo durante un trattamento" 
              className="w-full h-full object-cover filter contrast-[102%] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;