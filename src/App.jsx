import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import ProcessSection from './components/sections/ProcessSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';
import CookieBanner from './components/shared/CookieBanner';
import './styles/globals.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProcessSection />
      <CTASection />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;