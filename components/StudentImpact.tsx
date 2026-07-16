'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const StudentImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('student-impact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      quote: 'I\'m currently working in the UAE as a laptop and mobile technician. The online classes were easy to follow despite my work schedule, and the trainers explained everything in a practical way. I especially liked that they focused on real-world applications rather than just theory.',
      role: 'Tech Professional',
      improvement: 'Limited Skills → Digital Expert',
      name: 'Nadirsha T'
    },
    {
      quote: 'I wasn\'t sure where to start learning Digital Marketing, but joining SpeakNashen turned out to be a great decision. The trainers are supportive, the online learning experience is smooth, and I now have a much better understanding of content creation and marketing fundamentals.',
      role: 'Degree Student',
      improvement: 'Confused → Confident',
      name: 'Soorya'
    },
    {
      quote: 'After attending SpeakNashen\'s Digital Marketing program, I realized how important branding, content, and customer psychology are. The classes were practical and easy to understand, even for someone without a marketing background. I\'ve already started applying ideas to my business.',
      role: 'Businessman',
      improvement: 'Ads-Only Mindset → Strategic Marketer',
      name: 'Rahul Raveendran'
    },
    {
      quote: 'SpeakNashen\'s online classes were flexible enough to fit around my college schedule, and the mentors explained concepts in a beginner-friendly way. I especially enjoyed learning about AI tools and content creation. I\'m much more confident about exploring opportunities.',
      role: 'Degree Student',
      improvement: 'Uncertain → Career Ready',
      name: 'Ardra S'
    },
    {
      quote: 'The online classes at SpeakNashen made it easy to balance both studies and learning. The sessions are interactive, and the AI-integrated approach made Digital Marketing much easier to understand while pursuing my degree.',
      role: 'College Student',
      improvement: 'Busy Schedule → Skill Mastery',
      name: 'Nandana Nandana'
    },
    {
      quote: 'I had no background in Digital Marketing and was nervous before joining. What I liked was that trainers explained everything from basics and encouraged practice. The AI tools and content creation sessions were especially useful for someone interested in freelance work.',
      role: 'Freelancer',
      improvement: 'No Experience → Freelance Ready',
      name: 'Meenakshi Shijo'
    },
    {
      quote: 'I joined mainly because the course includes AI tools along with Digital Marketing. It was interesting to see how AI can be used for content creation, research, and productivity instead of just hearing about it in theory.',
      role: 'Digital Marketer',
      improvement: 'Theory Only → AI-Powered Marketer',
      name: 'Shiyon Prakash'
    },
    {
      quote: 'After attending SpeakNashen, I realized the biggest difference is the structure. Instead of jumping between random topics, everything is explained step by step. The live interaction and assignments helped me stay consistent with learning.',
      role: 'Self-Learner',
      improvement: 'Scattered Learning → Structured Growth',
      name: 'Abhirami Asok'
    }
  ];

  const stats = [
    { value: '85%', label: 'Career Advancement', subtext: 'Within 6 months', color: '#d52427' },
    { value: '92%', label: 'Recommend Us', subtext: 'To friends & colleagues', color: '#3b82f6' },
    { value: '4.9/5', label: 'Average Rating', subtext: 'From 1000+ reviews', color: '#10b981' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [itemsToShow, testimonials.length]);

  return (
    <section id="student-impact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-80 h-80 bg-[#d52427]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Student <span className="bg-gradient-to-r from-[#d52427] to-red-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-lg text-gray-600">Real success stories from our placed students</p>
        </div>

        {/* Testimonials Slider */}
        <div className={`relative mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 px-4 ${
                    itemsToShow === 1 ? 'w-full' : itemsToShow === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="h-full p-8 rounded-2xl border-l-4 border-[#d52427] border-r border-t border-b border-gray-100 bg-white hover:shadow-lg transition-all duration-300 text-center">
                    {/* Quote */}
                    <p className="text-gray-700 font-medium mb-6 italic leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>

                    {/* Role */}
                    <p className="text-sm text-gray-600 font-semibold mb-3">{testimonial.role}</p>

                    {/* Name */}
                    <p className="text-sm font-bold text-[#d52427] mb-4">{testimonial.name}</p>

                    {/* Improvement Badge */}
                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
                      <TrendingUp size={18} className="text-[#d52427]" />
                      <p className="text-xs font-semibold text-[#d52427]">{testimonial.improvement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-[#d52427]" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-[#d52427]" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / itemsToShow) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-[#d52427]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-3 gap-6 sm:gap-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-gray-900 font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentImpact;
