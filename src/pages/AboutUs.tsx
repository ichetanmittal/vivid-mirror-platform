
import React from 'react';
import { NavMenu } from '@/components/ui/nav-menu';
import { AnimatedText } from '@/components/ui/animated-text';

const teamMembers = [
  {
    name: "Shubham Sharma",
    role: "Cofounder and CEO",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  },
  {
    name: "Neeraj Singh",
    role: "Cofounder and CBO",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  },
  {
    name: "Jain Jacob",
    role: "Chief Architect",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  },
  {
    name: "Jinu Thankachan",
    role: "Senior Developer",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  },
  {
    name: "Shreyansh Singh",
    role: "Product Manager",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  },
  {
    name: "Pushan Joshi",
    role: "Developer",
    image: "/lovable-uploads/a695ca87-a9da-4a73-a611-e53ee23baf51.png"
  }
];

const AboutUs = () => {
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
      
      {/* Welcome Section */}
      <section className="relative pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedText
            text="Welcome to Xaults, where"
            className="text-5xl md:text-7xl font-bold text-[#C5F82A] mb-4"
          />
          <AnimatedText
            text="finance and technology"
            className="text-5xl md:text-7xl font-bold text-[#C5F82A] mb-4"
            delay={100}
          />
          <AnimatedText
            text="collide in extraordinary ways!"
            className="text-5xl md:text-7xl font-bold text-[#C5F82A] mb-12"
            delay={200}
          />
          
          <div className="space-y-6 text-white/80 text-lg max-w-4xl" data-aos="fade-up" data-aos-delay="300">
            <p>
              We're passionate about digital assets and unlocking their transformative power for 
              governments, financial institutions, and businesses.
            </p>
            <p>
              With our dynamic team of visionaries, tech wizards, and financial experts, we're 
              driving CBDC adoption through secure, user-friendly platforms. Our cutting-edge 
              tech paves the way for new possibilities, enhancing financial inclusion and 
              revolutionising digital transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-[#0A0E14]/80">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-[#C5F82A] mb-16 text-center" data-aos="fade-up">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="flex flex-col items-center text-center space-y-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                <p className="text-[#C5F82A]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
