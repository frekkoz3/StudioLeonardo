// src/components/ValueCard.tsx
import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-transparent hover:transform hover:-translate-y-1 transition-all duration-300 ease-out">
      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-studio-accent/10 text-studio-accent mb-6">
        {icon}
      </div>

      <h3 className="font-montserrat font-semibold text-lg text-studio-dark tracking-wider uppercase mb-3">
        {title}
      </h3>

      <div className="w-8 h-[1px] bg-studio-dark/20 mb-4" />

      <p className="font-montserrat text-sm text-studio-dark/80 leading-relaxed max-w-xs">
        {description}
      </p>

    </div>
  );
};

export default ValueCard;