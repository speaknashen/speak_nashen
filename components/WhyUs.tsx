'use client';

import { useEffect, useState } from 'react';
import { Users, Zap, Target, Trophy } from 'lucide-react';

const WhyUs = () => {
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

    const element = document.getElementById('why-us');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const edges = [
    {
      icon: Users,
      title: 'Built by Industry Expert',
      description: 'Sales & Business Consultant with 10+ years of real-world experience',
      color: '#3b82f6'
    },
    {
      icon: Target,
      title: 'Real-World Approach',
      description: 'Every method tested and proven in actual business scenarios',
      color: '#10b981'
    },
    {
      icon: Zap,
      title: 'Performance-Focused',
      description: 'Designed to deliver measurable outcomes in your career',
      color: '#f59e0b'
    },
    {
      icon: Trophy,
      title: 'Execution Over Theory',
      description: 'Hands-on projects that build your professional portfolio',
      color: '#d52427'
    }
  ];

  const systemSteps = [
    { num: '01', title: 'Learn', desc: 'Master concepts with clear guidance', color: '#3b82f6' },
    { num: '02', title: 'Practice', desc: 'Apply through task-based exercises', color: '#10b981' },
    { num: '03', title: 'Perform', desc: 'Execute real projects professionally', color: '#a855f7' },
    { num: '04', title: 'Grow', desc: 'Continuous evaluation and advancement', color: '#d52427' }
  ];

  return (
    <section id="why-us" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-[#d52427]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#d52427] to-red-600 bg-clip-text text-transparent">Competitive Edge</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets us apart from traditional training programs
          </p>
        </div>

        {/* Edge Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {edges.map((edge, idx) => (
            <div
              key={idx}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white h-full">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    <edge.icon size={24} style={{ color: edge.color }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{edge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{edge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Section */}
        <div className="mt-20 pt-20 border-t border-gray-100">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-gray-900">The </span>
              <span className="text-[#d52427]">Learning System</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven framework for skill mastery and career transformation</p>
          </div>

          {/* System Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {systemSteps.map((step, idx) => (
              <div
                key={idx}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + idx * 100}ms` }}
              >
                <div 
                  className="h-full p-6 rounded-2xl text-white flex flex-col justify-between hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: step.color }}
                >
                  <div>
                    <div className="text-4xl font-bold opacity-20 mb-4">{step.num}</div>
                    <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-white/80">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Details */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '📚', title: 'Live Sessions', desc: 'Interactive learning with real-time feedback' },
              { icon: '✓', title: 'Task-Based Learning', desc: 'Practical assignments for your portfolio' },
              { icon: '📊', title: 'Continuous Evaluation', desc: 'Progress tracking with personalized feedback' }
            ].map((detail, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300 text-center">
                <div className="text-4xl mb-3 flex justify-center">{detail.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                <p className="text-gray-600 text-sm">{detail.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
