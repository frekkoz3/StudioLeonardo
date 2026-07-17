// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import Values from './components/Values';
import AboutOsteopathy from '../components/AboutOsteopathy';
import Services from '../components/Services';
import Contact from '../components/Contact'; 

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-studio-bg font-montserrat antialiased">
      <Header />
      
      <main>
        <Hero />
        <AboutOsteopathy />
        <Services />
      </main>
      <Contact />
    </div>
  );
};

export default Home;