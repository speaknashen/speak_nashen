'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're in the final-cta section (dark background)
      const finalCtaElement = document.getElementById('final-cta');
      if (finalCtaElement) {
        const { offsetTop, offsetHeight } = finalCtaElement;
        const scrollPosition = window.scrollY;
        const isInDarkSection = scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        setIsDarkSection(isInDarkSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'positioning', label: 'Positioning' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'placed-students', label: 'Our Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkSection
          ? 'bg-gray-900/95 shadow-md border-b border-gray-800'
          : isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity py-2"
              aria-label="Home"
            >
              <img src="images/logo.png" alt="SpeakNashen Logo" className="h-16 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isDarkSection
                    ? activeSection === item.id
                      ? 'text-[#d52427] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    : activeSection === item.id
                    ? 'text-[#d52427] bg-[#d52427]/10'
                    : 'text-gray-700 hover:text-[#d52427] hover:bg-[#d52427]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-[#d52427] text-white font-semibold rounded-lg hover:bg-[#b91c1f] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkSection
                  ? 'text-white/80 hover:bg-white/10'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${
            isDarkSection ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isDarkSection
                      ? activeSection === item.id
                        ? 'text-[#d52427] bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : activeSection === item.id
                      ? 'text-[#d52427] bg-[#d52427]/10'
                      : 'text-gray-700 hover:text-[#d52427] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className={`w-full mt-4 px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isDarkSection
                    ? 'bg-[#d52427] text-white hover:bg-[#b91c1f]'
                    : 'bg-[#d52427] text-white hover:bg-[#b91c1f]'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;