'use client';

import { useEffect, useState } from 'react';
import { Clock, BookOpen, Users, Award, Calendar } from 'lucide-react';

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.13}
    );

    const element = document.getElementById('courses');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const levels = [
    {
      level: 'A1 & A2',
      title: 'Beginners',
      description: 'Vocabulary, grammar, simple conversations',
      duration: '4 months (2 months per level)',
      features: ['Basic vocabulary building', 'Grammar fundamentals', 'Simple conversations', 'Daily life topics']
    },
    {
      level: 'B1 & B2',
      title: 'Intermediate',
      description: 'Speaking fluency, comprehension, writing',
      duration: '4 months (2 months per level)',
      features: ['Advanced conversations', 'Complex grammar', 'Reading comprehension', 'Writing skills']
    },
    {
      level: 'C1 & C2',
      title: 'Advanced',
      description: 'Individual batches only, native-level fluency',
      duration: '4 months (2 months per level)',
      features: ['Native-level fluency', 'Professional communication', 'Advanced writing', 'Cultural nuances']
    }
  ];

  const highlights = [
    { icon: Clock, text: '1 hour/day', label: 'Daily Class Time' },
    { icon: Calendar, text: '2 months', label: 'Per Level Duration' },
    { icon: BookOpen, text: 'PDF Materials', label: 'Study Resources' },
    { icon: Users, text: 'Live Sessions', label: 'Interactive Classes' }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#d52427]">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-[#d52427] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive language learning programs designed to take you from beginner to advanced levels
          </p>
        </div>

        {/* Course Highlights */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 bg-[#f5ede3] rounded-xl">
              <div className="w-12 h-12 bg-[#d52427] rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-[#d52427] mb-2">{highlight.text}</div>
              <div className="text-gray-600 text-sm">{highlight.label}</div>
            </div>
          ))}
        </div>

        {/* Levels Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#d52427] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `100ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#d52427] mb-2">{level.level}</div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{level.title}</div>
                <div className="text-gray-600 mb-4">{level.description}</div>
                <div className="inline-block px-4 py-2 bg-[#f5ede3] text-[#d52427] rounded-lg text-sm font-medium">
                  {level.duration}
                </div>
              </div>
              
              <ul className="space-y-3">
                {level.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#d52427] rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                🇫🇷 French Language
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">Master French with our comprehensive program covering:</p>
                <div className="flex flex-wrap gap-2">
                  {['TEF', 'TCF', 'DELF', 'DALF', 'TELF'].map((cert, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-4">
                  From basic conversational skills to advanced professional communication, 
                  our French program prepares you for global opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                🇩🇪 German Language
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">Excel in German with our structured approach covering:</p>
                <div className="flex flex-wrap gap-2">
                  {['Goethe', 'TELC', 'ÖSD', 'ECL'].map((cert, index) => (
                    <span key={index} className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-4">
                  Build strong German language foundations with our proven methodology, 
                  designed for career advancement and academic success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className={`mt-16 p-8 bg-[#f5ede3] rounded-2xl transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Every Course</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-[#d52427] mx-auto mb-3" />
              <h4 className="font-semibold mb-2">PDF Materials</h4>
              <p className="text-sm text-gray-600">Comprehensive study guides and resources</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#d52427] mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Live Sessions</h4>
              <p className="text-sm text-gray-600">Interactive online classes with instructors</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-[#d52427] mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Recorded Classes</h4>
              <p className="text-sm text-gray-600">Access to all class recordings for review</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[#d52427] mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Revision Tests</h4>
              <p className="text-sm text-gray-600">Regular assessments to track progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;