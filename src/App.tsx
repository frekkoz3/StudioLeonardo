// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Values from './components/Values';
import AboutOsteopathy from './components/AboutOsteopathy';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-studio-bg font-montserrat antialiased">
      <Header />
      
      <main>
        <Hero />
        <AboutOsteopathy />
        <Services />
        <Footer />
      </main>
    </div>
  );
};

export default App;