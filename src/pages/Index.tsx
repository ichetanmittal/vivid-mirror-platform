
import React from 'react';
import { NavMenu } from '@/components/ui/nav-menu';
import { AnimatedText } from '@/components/ui/animated-text';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/66ced0b8-3434-47ec-a152-1dff39a32d55.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <NavMenu />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <AnimatedText
              text="India's First"
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            />
            <AnimatedText
              text="Deep-Tier Supply Chain"
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              delay={100}
            />
            <AnimatedText
              text="Financing Platform"
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              delay={200}
            />
            <AnimatedText
              text="Built on DLT and Smart Contracts"
              className="text-xl md:text-2xl text-[#C5F82A] mb-12"
              delay={300}
            />
            <button className="bg-[#C5F82A] text-black px-8 py-3 rounded-full hover:bg-[#C5F82A]/90 transition-all text-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-20 px-4 bg-[#0A0E14]/50">
        <div className="container mx-auto">
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl">
            Enabling traditional banks to offer affordable credit to SMEs beyond 
            Tier-1, without raising the risk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
