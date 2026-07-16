'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Briefcase, TrendingUp } from 'lucide-react';

const PlacementSupport = () => {
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

    const element = document.getElementById('placement-support');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const criteria = [
    { icon: CheckCircle, title: '100% Attendance', desc: 'Consistent participation in all sessions', color: '#d52427' },
    { icon: TrendingUp, title: 'Task Completion', desc: 'Successfully complete all assignments', color: '#3b82f6' },
    { icon: Briefcase, title: 'Job Ready Skills', desc: 'Demonstrate mastery of market skills', color: '#10b981' }
  ];

  const support = [
    { title: 'Career Coaching', desc: 'One-on-one guidance for job search' },
    { title: 'Resume Building', desc: 'Professional resume from your projects' },
    { title: 'Network Access', desc: 'Direct connections with industry leaders' },
    { title: 'Job Opportunities', desc: 'Exclusive placement from our partners' }
  ];

  return (
    <section id="placement-support" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-[#d52427]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED, BLACK AND RED */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Placement </span>
            <span className="text-[#d52427]">Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We support your career — for those who perform
          </p>
        </div>

        {/* Performance Message - Clean & Modern */}
        <div className={`mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-center text-lg text-gray-600">
            <span className="font-semibold text-gray-900">Performance-driven placement support</span><br />
            <span className="text-gray-600 mt-2 inline-block">Get dedicated support when you demonstrate:</span>
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + idx * 100}ms` }}
            >
              <div className="h-full p-8 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Features Section */}
        <div className="mt-20 pt-20 border-t border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">What We Provide</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {support.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#d52427] to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;
