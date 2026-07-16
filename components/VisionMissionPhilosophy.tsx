'use client';

import { useEffect, useState } from 'react';
import { Globe, Target, Lightbulb } from 'lucide-react';

const VisionMissionPhilosophy = () => {
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

    const element = document.getElementById('vision-mission-philosophy');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      icon: Globe,
      title: 'Vision',
      description: 'To build a globally recognized platform for skill-based and career-focused learning.',
      color: '#3b82f6'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To train individuals with practical skills, strong communication, and real-world readiness.',
      color: '#10b981'
    },
    {
      icon: Lightbulb,
      title: 'Philosophy',
      description: 'Skills create power. Discipline creates results.',
      color: '#d52427'
    }
  ];

  return (
    <section id="vision-mission-philosophy" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-[#d52427]">Direction</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Guided by a clear vision, mission, and values</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="h-full p-8 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg transition-all duration-300 flex flex-col text-center">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto" style={{ backgroundColor: `${section.color}15` }}>
                  <section.icon size={24} style={{ color: section.color }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4" style={{ color: section.color }}>
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed flex-grow">{section.description}</p>

                {/* Bottom Line */}
                <div className="w-12 h-1 rounded-full mt-6 mx-auto" style={{ backgroundColor: section.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`p-8 rounded-2xl border border-gray-100 bg-white text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            One Goal, Clear Path
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're not just providing training programs. We're building a community of skilled, confident, and capable professionals who transform their careers and create impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPhilosophy;
