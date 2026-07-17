// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-bg text-studio-dark border-t border-studio-dark/10 pt-16 pb-8 px-6 md:px-12 lg:px-24">
        {/* Bottom Legal / Copyright Bar */}
        <div className="border-t border-studio-dark/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-xs text-studio-dark/60">
            &copy; {currentYear} Studio Leonardo. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 font-montserrat text-xs text-studio-dark/60">
            <Link to="/privacy" className="hover:text-studio-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="hover:text-studio-accent transition-colors">
              Cookie Policy
            </Link>
          <span className="text-studio-dark/30">P.IVA 05481990264</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;