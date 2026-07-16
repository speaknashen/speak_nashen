'use client';

import { useEffect, useState } from 'react';
import { Zap, Target, Sparkles } from 'lucide-react';

const Positioning = () => {
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

    const element = document.getElementById('positioning');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="positioning" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d52427]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Headline - CENTER ALIGNED */}
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We don't just teach. <span className="bg-gradient-to-r from-[#d52427] to-red-600 bg-clip-text text-transparent">We prepare you</span>
          </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto">
              For real-world performance and career outcomes that actually matter.
            </p>
          </div>

          {/* Three Key Points - Minimal Design */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Target,
                title: 'Performance-Focused',
                desc: 'Every skill selected for direct career impact',
                color: '#d52427'
              },
              {
                icon: Zap,
                title: 'Real-World Ready',
                desc: 'Apply learning through actual scenarios',
                color: '#3b82f6'
              },
              {
                icon: Sparkles,
                title: 'Measurable Results',
                desc: 'Track progress with clear milestones',
                color: '#10b981'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="h-full flex flex-col items-center text-center">
                  {/* Icon - Minimalist Circle */}
                  <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                    <item.icon size={24} style={{ color: item.color }} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
