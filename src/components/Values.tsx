// src/components/Values.tsx
import React from 'react';
import ValueCard from './ValueCard';
import { ClipboardPlus, Heart, Sprout } from 'lucide-react';

const Values: React.FC = () => {
  // Our data array. In the future, this could come from Supabase, but for now, it's a local static array.
  const studioValues = [
    {
      id: 1,
      title: "Valutazione",
      description: "Analisi della postura, del movimento e delle funzionalità corporee. Ogni corpo racconta una storia unica che va ascoltata.",
      icon: <ClipboardPlus className="w-8 h-8" strokeWidth={1.2} />
    },
    {
      id: 2,
      title: "Trattamento",
      description: "Trattamenti manuali mirati e altamente professionali, calibrati sulla tue esigenze.",
      icon: <Heart className="w-8 h-8" strokeWidth={1.2} />
    },
    {
      id: 3,
      title: "Benessere",
      description: "Il nostro obbiettivo finale: il benessere del tuo organismo. Il tuo equilibrio al centro di tutto.",
      icon: <Sprout className="w-8 h-8" strokeWidth={1.2} />
    }
  ];

  return (
    <section className="bg-studio-bg py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Grid Layout: 
            `grid-cols-1` on mobile (vertical stack)
            `md:grid-cols-3` on desktop (horizontal row)
            `gap-12` adds breathing room between the columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {studioValues.map((value) => (
            <ValueCard 
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;