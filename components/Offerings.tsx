'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Code, Mic, ArrowRight } from 'lucide-react';

const Offerings = () => {
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

    const element = document.getElementById('offerings');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const offerings = [
    {
      icon: BookOpen,
      title: 'Language Mastery',
      skills: ['French', 'German', 'English', 'Korean'],
      description: 'International standards • Certification ready',
      accentColor: '#3b82f6'
    },
    {
      icon: Code,
      title: 'AI & Digital Skills',
      skills: ['Practical tools', 'Real-world applications', 'Automation', 'AI Tools'],
      description: 'Industry-current • Production-ready',
      accentColor: '#a855f7'
    },
    {
      icon: Mic,
      title: 'Sales & Communication',
      skills: ['Confidence', 'Influence', 'Career skills', 'Leadership'],
      description: 'Personality development • Impact mastery',
      accentColor: '#d52427'
    }
  ];

  return (
    <section id="offerings" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-[#d52427] to-red-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three powerful pathways to transform your career
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full flex flex-col p-8 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg transition-all duration-300 text-left">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <offering.icon size={28} style={{ color: offering.accentColor }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{offering.title}</h3>

                {/* Skills */}
                <div className="space-y-3 mb-6 flex-grow">
                  {offering.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: offering.accentColor }}></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-6"></div>

                {/* Description */}
                <p className="text-sm text-gray-600 font-medium mb-6">{offering.description}</p>

                {/* CTA Button */}
                <button 
                  style={{ borderColor: offering.accentColor }}
                  className="w-full px-6 py-2.5 border rounded-lg font-semibold text-sm transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = offering.accentColor;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = offering.accentColor;
                  }}
                >
                  Explore Program
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { value: '1000+', label: 'Learners Trained', color: '#d52427' },
            { value: '85%', label: 'Success Rate', color: '#3b82f6' },
            { value: '10+', label: 'Years Experience', color: '#10b981' },
            { value: '92%', label: 'Recommendation Rate', color: '#a855f7' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
