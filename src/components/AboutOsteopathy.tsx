// src/components/AboutOsteopathy.tsx
import React, { useState, useEffect, useCallback } from 'react';
import bodyMsg from '../assets/images/body-massage.jpeg';
import faceMsg from '../assets/images/facial-massage.jpg';
import fisheyeMsg from '../assets/images/massage1.jpg';
import lowerMsg from '../assets/images/massage3.jpg';
import neckMsg from '../assets/images/massage2.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const AboutOsteopathy: React.FC = () => {
  // Track which item is currently open. We default to the first item (index 0).
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
  { 
    loop: true, 
    duration: 60,
  }, 
  [
    Autoplay({ 
      delay: 4000, // 8 seconds of "focus" before changing
      stopOnInteraction: false,
      stopOnMouseEnter: true  // Pauses on hover—perfect for a medical studio vibe
    })
  ]
);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    // Function to resume
    const resumeAutoplay = () => {
      // Check if the carousel is still 'paused' (optional safety check)
      // We explicitly tell it to start playing again
      autoplay.play();
    };

    // Interaction handlers
    const onPointerDown = () => autoplay.stop();
    const onPointerUp = () => {
      // Start the timer to resume after 10 seconds of inactivity
      setTimeout(resumeAutoplay, 10000);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi]);

  const galleryImages = [
    bodyMsg,
    faceMsg,
    lowerMsg,
    neckMsg,
    fisheyeMsg,
  ];

  const indications = [
    {
      title: "Dolori Muscolo-Scheletrici",
      desc: "Lombalgie, cervicalgie, dolori articolari e muscolari derivanti da traumi, posture scorrette o tensioni accumulate."
    },
    {
      title: "Cefalee e Tensioni Craniche",
      desc: "Emicranie, mal di testa tensivi, sinusiti e affaticamento dell'articolazione temporo-mandibolare (ATM)."
    },
    {
      title: "Disturbi Posturali",
      desc: "Squilibri legati ad attività lavorative sedentarie, movimenti ripetitivi o asimmetrie nel carico corporeo quotidiano."
    },
    {
      title: "Problematiche Viscerali",
      desc: "Tensioni nella zona addominale, difficoltà digestive, reflusso gastroesofageo o rallentamenti del transito intestinale."
    },
    {
      title: "Stress e Somatizzazioni",
      desc: "Tensioni fisiche profonde causate da stress emotivo, stanchezza cronica o sonno non ristoratore."
    },
  ];

  return (
    <section className="bg-studio-bg py-20 px-6 md:px-12 lg:px-24 border-t border-studio-dark/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Right Column: Image Carousel with Floating Offset Frame */}
        <div className="lg:col-span-7 relative group">

          <div className="absolute -bottom-4 -left-4 w-full h-full border border-studio-accent/30 rounded-sm translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-sm aspect-[4/5] z-10 shadow-lg cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex h-full">
              {galleryImages.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                  <img 
                    src={src} 
                    alt={`Immagine ${index + 1} dello Studio Leonardo`} 
                    className="w-full h-full object-cover filter grayscale-[10%] contrast-[105%] transition-opacity duration-1000 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Column: Title and Interactive Focus List */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Headers */}
          <div className="space-y-3">
            <span className="font-montserrat text-xs font-semibold tracking-[0.2em] text-studio-accent uppercase block">
              L'Osteopatia
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-studio-dark font-light leading-tight">
              Cosa significa scegliere <br className="hidden md:block"/>l’Osteopatia
            </h2>
            <p className="font-montserrat text-sm text-studio-dark/70 max-w-xl leading-relaxed">
              L'osteopatia ricerca la causa primaria del disaccordo corporeo per restituire mobilità ed equilibrio naturale a tutto l'organismo.
            </p>
          </div>

          {/* Interactive Accordion List */}
          <div className="space-y-4">
            {indications.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div 
                  key={index}
                  // We listen to Hover on desktop and Click on mobile
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group cursor-pointer border-b border-studio-dark/10 pb-4 transition-all duration-300"
                >
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Interactive dot: turns solid when active */}
                      <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isOpen 
                          ? 'bg-studio-accent scale-110 shadow-sm' 
                          : 'bg-studio-dark/30 group-hover:bg-studio-accent/60'
                      }`} />
                      
                      {/* Title: Fades slightly when NOT active to draw absolute focus to the open item */}
                      <h3 className={`font-montserrat font-medium text-base tracking-wide transition-all duration-300 ${
                        isOpen 
                          ? 'text-studio-dark translate-x-1' 
                          : 'text-studio-dark/50 group-hover:text-studio-dark/80'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Indicator Icon (plus/minus) */}
                    <span className={`text-studio-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? '—' : '+'}
                    </span>
                  </div>

                  {/* Dynamic height drawer animation using CSS Grid */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'grid-rows-[1fr] opacity-100 mt-3' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="font-montserrat text-xs md:text-sm text-studio-dark/75 leading-relaxed pl-6 max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOsteopathy;