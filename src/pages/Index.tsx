
import React from 'react';
import { NavMenu } from '@/components/ui/nav-menu';
import { AnimatedText } from '@/components/ui/animated-text';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <AnimatedText
            text="Build Better Software"
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          />
          <AnimatedText
            text="Premium development tools for modern teams"
            className="text-xl text-gray-600 mb-12"
            delay={200}
          />
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2 transition-all hover:scale-105">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features that make us special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard>
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Build and deploy with incredible speed and efficiency.
              </p>
            </GlassCard>
            <GlassCard>
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
              <p className="text-gray-600">
                Enterprise-grade security built into every feature.
              </p>
            </GlassCard>
            <GlassCard>
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Tools</h3>
              <p className="text-gray-600">
                Access to the latest development tools and features.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
