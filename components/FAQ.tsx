'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.13}
    );

    const element = document.getElementById('faq');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'Do I need prior knowledge to join A1?',
      answer: 'No! Our A1 level starts from the very basics. We assume no prior knowledge of the language and build everything from the ground up, including basic vocabulary, pronunciation, and fundamental grammar concepts.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All classes are recorded and shared with enrolled students. You can access the recordings anytime to catch up on missed content. We also provide class notes and materials to ensure you don\'t fall behind.'
    },
    {
      question: 'Will I be fluent by B2?',
      answer: 'Fluency depends on your consistency and practice, but our structured classes are designed to get you real-life speaking ability by B2. You\'ll be able to communicate effectively in most everyday and professional situations.'
    },
    {
      question: 'Will I be ready for exams like TEF, TELC, etc.?',
      answer: 'Absolutely! Our classes are specifically aligned with major global certification standards in both French and German. We include exam preparation techniques, practice tests, and strategies for success in these internationally recognized exams.'
    },
    {
      question: 'What materials do you provide?',
      answer: 'We provide comprehensive soft-copy PDF materials, access to live sessions, recorded classes for revision, and regular tests to track your progress. All materials are updated regularly to match current exam standards.'
    },
    {
      question: 'Are classes individual or group-based?',
      answer: 'We offer both individual and group batches. Group classes (A1-B2) provide interactive learning with peers, while individual batches are available for all levels, especially recommended for C1-C2 advanced levels.'
    },
    {
      question: 'How flexible is the schedule?',
      answer: 'Our classes are designed to be flexible for working professionals and students. We offer different time slots and since all sessions are recorded, you can review content at your convenience.'
    },
    {
      question: 'Do you offer support for students outside India?',
      answer: 'Yes! We support students from India, GCC countries (UAE, Saudi Arabia, etc.), Europe, and other regions worldwide. Our online platform makes quality language education accessible globally.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#d52427]">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-[#d52427] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about our courses.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-[#d52427] flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-[#d52427] flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className={`mt-16 text-center p-8 bg-[#f5ede3] rounded-2xl transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions about our courses.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-[#d52427] text-white font-semibold rounded-lg hover:bg-[#b91c1f] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;