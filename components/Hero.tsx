'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return ( 
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-bl from-[--secondary] via-white to-gray-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 ${isVisible   ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  <span className="block">Build Skills That Lead to</span>
                  <span className="block gradient-text">Real Careers</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  Languages • AI • Digital Skills • Sales & Communication
                </p>
              </div>
              
              {/* <p className="text-md md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Master practical skills that employers value. Whether it's languages, AI tools, or communication expertise, we prepare you for real-world performance and career outcomes.
              </p> */}
              
              {/* Quick Stats */}
              {/* <div className="flex flex-wrap gap-4 py-4">
                <div className="flex items-center gap-2 bg-red-50 px-4 py-3 rounded-full border border-[var(--primary)]/20">
                  <span className="text-2xl">🔥</span>
                  <span className="font-semibold text-gray-800">Strategy Session</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-3 rounded-full border border-blue-200">
                  <span className="text-2xl">📞</span>
                  <span className="font-semibold text-gray-800">Talk to Expert</span>
                </div>
              </div> */}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center justify-center px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary)]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Strategy Session
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi, I want to talk to an expert', '_blank')}
                  className="group flex items-center justify-center px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className={` hidden sm:block relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 animate-float">
                <div className="w-full max-w-lg mx-auto">
                  <div className="aspect-square rounded-3xl p-1">
                    <div className="w-full h-full rounded-3xl flex items-center justify-center">
                      <img 
                        src="images/banner.png" 
                        alt="Modern Business Team" 
                        className="w-4/5 h-4/5 object-cover rounded-2xl"
                      />
                        <div className="absolute bottom-0 left-0 right-0 h-[15rem] bg-[linear-gradient(to_top,#fdfdfd_24%,transparent_66%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;