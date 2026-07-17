// src/components/Contacts.tsx
import React from 'react';

const Contact: React.FC = () => {

  return (
    <footer className="bg-studio-bg text-studio-dark border-t border-studio-dark/10 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand/Identity Column (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-agatho text-2xl tracking-wider text-studio-dark uppercase">
              Studio Leonardo
            </h2>
            <p className="font-montserrat text-xs md:text-sm text-studio-dark/70 max-w-sm leading-relaxed">
              Studio di Osteopatia e benessere motorio. Un approccio manuale personalizzato, attento e focalizzato sulla salute a lungo termine del tuo organismo.
            </p>
          </div>

          {/* Contact Details Column (Spans 4 cols on desktop) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-montserrat font-semibold text-xs tracking-[0.2em] uppercase text-studio-accent">
              Contatti & Appuntamenti
            </h4>
            <ul className="space-y-3 font-montserrat text-sm text-studio-dark/80">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="hover:text-studio-accent transition-colors">
                  Strada Sant'Angelo 9 - Treviso (TV)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+39 391 397 2669" className="hover:text-studio-accent transition-colors">
                  +39 391 397 2669
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@studioosteopaticoleonardo.it" className="hover:text-studio-accent transition-colors">
                    studiosteopatialeonardo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column (Spans 3 cols on desktop) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-montserrat font-semibold text-xs tracking-[0.2em] uppercase text-studio-accent">
              Orari di Studio
            </h4>
            <ul className="space-y-2 font-montserrat text-sm text-studio-dark/80">
              <li className="flex justify-between">
                <span>Lun — Ven</span>
                <span className="font-medium">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span className="font-medium">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between text-studio-dark/40">
                <span>Domenica</span>
                <span>Chiuso</span>
              </li>
            </ul>
          </div>

        </div>
        </div>

    </footer>
  );
};

export default Contact;