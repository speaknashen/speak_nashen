'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Shield, 
  Headphones,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.13}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web solutions built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Cross Platform', 'Native Performance', 'User Friendly', 'Scalable'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      features: ['Social Media', 'SEO/SEM', 'Content Strategy', 'Analytics'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that convert visitors.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Risk Assessment', 'Security Audits', 'Compliance', '24/7 Monitoring'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 support and maintenance to keep your systems running smoothly.',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Bug Fixes'],
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive business solutions designed to help your company thrive 
            in today's competitive digital landscape. Our expert team delivers results that matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover-scale border border-gray-100 section-reveal ${isVisible ? 'revealed' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <div className="pt-4">
                  <button className="group/btn flex items-center text-[var(--primary)] font-semibold hover:text-[var(--primary)]/80 transition-colors duration-300">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center section-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals. 
              Contact us today for a free consultation.
            </p>
            <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;