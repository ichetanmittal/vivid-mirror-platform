
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

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-[#0D1117]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Feature 1 */}
            <div className="space-y-4" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C5F82A]">
                Deeper Credit Percolation aids financial Inclusion
              </h3>
              <p className="text-white/80 text-lg">
                Reach SMEs that were not serviceable earlier due to lack of formal credit score and documentation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C5F82A]">
                Better Network Risk Coverage and Assessment
              </h3>
              <p className="text-white/80 text-lg">
                The risk is tied to the anchor by linking the entire supply chain invoices to the anchor invoice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C5F82A]">
                Faster and Efficient Flow of Credit
              </h3>
              <p className="text-white/80 text-lg">
                Complete digital loan disbursement to SMEs and collections from the anchor, with all compliance checks in place.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C5F82A]">
                Automated Reconciliation and Settlements
              </h3>
              <p className="text-white/80 text-lg">
                The platform automatically reconciles the loan disbursement and collections.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-32 space-y-8" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl md:text-3xl text-white">
              If you'd like more information about our features, get in touch today.
            </h3>
            <button className="bg-[#C5F82A] text-black px-8 py-3 rounded-full hover:bg-[#C5F82A]/90 transition-all text-lg">
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
