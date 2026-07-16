'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-cta');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '1000+', label: 'Learners Trained' },
    { value: '85%', label: 'Success Rate' },
    { value: '92%', label: 'Recommendation Rate' },
    { value: '10+', label: 'Years Experience' }
  ];

  return (
    <section id="final-cta" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d52427]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - CENTER ALIGNED */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Serious About Your <span className="text-[#d52427]">Future?</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join a performance-driven environment where skills matter and your career transformation begins today.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Limited Seats', 'Performance-Driven', 'Career Growth'].map((feature, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-white font-semibold">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-[#d52427] to-red-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Your Strategy Session
              <ArrowRight size={18} />
            </button>
            
            <button
              onClick={() => window.open('https://wa.me/919876543210?text=Hi, I want to know more about the program', '_blank')}
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              WhatsApp Us
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className={`grid md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-[#d52427] mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className={`mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Career?</h3>
          <p className="text-gray-300 mb-4">
            Don't wait. Seats fill up fast. Our next batch starts soon.
          </p>
          <p className="text-[#d52427] font-semibold">Limited availability • Enroll now</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
