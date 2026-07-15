// src/components/Hero.tsx
import React from 'react';
import heroBg from '../assets/images/massage-table.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full bg-studio-bg overflow-hidden flex items-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Studio treatment room" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-studio-bg)_0%,_transparent_100%)] md:bg-[radial-gradient(circle_at_25%_50%,_var(--color-studio-bg)_20%,_transparent_65%)] z-10" />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
        {/* Slogan */}
        <h2 className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-studio-dark leading-tight mb-8">
          Ascoltare <br />
          il corpo. <br />
          <span className="italic">Trovare</span> <br />
          <span className="italic">l'equilibrio.</span>
        </h2>

        {/* Subtitle */}
        <p className="font-cormorant text-studio-dark uppercase tracking-widest text-sm md:text-base font-semibold leading-loose border-t border-studio-dark/30 pt-8 max-w-md">
          Un approccio osteopatico <br />
          su misura per il tuo benessere.
        </p>
      </div>

    </section>
  );
};

export default Hero;