'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Award, Users, BookOpen, Clock, Globe, Target } from 'lucide-react';

const WhyChooseUs = () => {
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

    const element = document.getElementById('why-choose-us');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Certified Faculty',
      description: 'Qualified instructors with 6 months to 1+ year of experience',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Strategic Syllabus',
      description: 'Exam-based planning aligned with global certification standards',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Recorded Sessions',
      description: 'All classes recorded and available for revision anytime',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Study Materials',
      description: 'Soft-copy PDFs and resources shared daily',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Engaging Environment',
      description: 'Motivating classes that are far from boring lectures',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Classes designed to match international certification requirements',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const benefits = [
    'Individual & Group batches available',
    'External exam prep included',
    'Support for students from India, GCC, Europe, and other regions',
    'Flexible online learning schedule',
    'Progress tracking and regular assessments',
    'Career-focused language training'
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#d52427]">Speaknashen</span>?
          </h2>
          <div className="w-24 h-1 bg-[#d52427] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach languages; we build foundations for your global career success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `100ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Additional Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <CheckCircle className="text-[#d52427] mt-1 group-hover:scale-110 transition-transform duration-200" size={20} />
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Online Learning"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d52427]/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-bold mb-2">Global Reach</h4>
              <p className="text-sm opacity-90">
                Students from India, UAE, Saudi Arabia, Germany, and beyond trust our online programs
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center p-8 bg-[#d52427] rounded-2xl transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Language Journey?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with our language programs
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-[#d52427] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;