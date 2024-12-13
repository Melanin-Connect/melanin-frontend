// components/Hero/hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center" 
      style={{ 
        backgroundImage: "url('/assets/section.png')", 
        backgroundSize: 'contain', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundColor: 'white' 
      }}
    >
      <div className="relative z-10 text-center text-black">
      </div>
    </section>
  );
};

export default Hero;