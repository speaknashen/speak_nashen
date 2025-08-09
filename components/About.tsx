'use client';

import { useEffect, useState } from 'react';
import { Target, Rocket, Award, Users } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Clear Instruction',
      description: 'Structured learning path with clear objectives',
    },
    {
      icon: Award,
      title: 'Updated Content',
      description: 'Latest curriculum aligned with global standards',
    },
    {
      icon: Users,
      title: 'Motivated Learning',
      description: 'Interactive and engaging class environment',
    },
    {
      icon: Rocket,
      title: 'Career Ready',
      description: 'Certifications that matter in your career journey',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '0ms' }} // Immediate animation for header
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-[#d52427]">Speaknashen</span>
          </h2>
          <div className="w-24 h-1 bg-[#d52427] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Speaknashen is an online language learning academy founded after 3+ years of experience in career guidance
            and global education support. We are here to transform the way languages are taught — focusing on quality,
            confidence, and career readiness.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }} // Staggered delay for image
          >
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Language Learning"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }} // Staggered delay for story content
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Speaknashen was born from a realization — language education is often treated as a side service, with
                quality taking a backseat to cost. But if your future depends on communication, shouldn't the training
                be flawless?
              </p>
              <p>
                With 3+ years in career counseling, our team understands what professionals really need. We offer online
                French and German training, focused on internationally recognized certification exams.
              </p>
            </div>

            <div
              className="mt-8 p-6 bg-[#f5ede3] rounded-xl"
              style={{ transitionDelay: '600ms' }} // Staggered delay for languages box
            >
              <h4 className="font-semibold text-gray-900 mb-4">Languages & Certifications:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-[#d52427]">🇫🇷 French:</strong>
                  <div className="text-gray-600">TEF, TCF, DELF, DALF, TELF</div>
                </div>
                <div>
                  <strong className="text-[#d52427]">🇩🇪 German:</strong>
                  <div className="text-gray-600">Goethe, TELC, ÖSD, ECL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }} // Staggered delay for each feature card
            >
              <div className="w-16 h-16 bg-[#d52427]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-[#d52427]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <div
            className={`p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${700 + features.length * 100 + 100}ms` }} // Delay after all features
          >
            <div className="w-16 h-16 bg-[#d52427]/10 rounded-full flex items-center justify-center mb-6">
              <Target className="text-[#d52427]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌟 Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To redefine how language is taught online — proving that quality language training can be engaging,
              powerful, and life-changing.
            </p>
          </div>

          <div
            className={`p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${700 + features.length * 100 + 300}ms` }} // Even further delay
          >
            <div className="w-16 h-16 bg-[#d52427]/10 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-[#d52427]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To help students build careers, not just pass exams. Our mission is to deliver high-impact learning that
              fuels growth, confidence, and global readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;