// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-6 md:px-12 bg-studio-bg text-studio-dark">
      
      <div className="flex flex-col items-center">
        <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.3em] font-bold uppercase mb-1">
          Studio
        </span>
        <h1 className="font-albertus text-3xl sm:text-4xl tracking-wide">
          LEONARDO
        </h1>
        <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase mt-1">
          Osteopatia
        </span>
      </div>

      {/*<button aria-label="Open menu" className="p-2 focus:outline-none hover:opacity-70 transition-opacity">
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>*/}

    </header>
  );
};

export default Header;