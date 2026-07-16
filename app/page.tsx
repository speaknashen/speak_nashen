'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Positioning from '@/components/Positioning';
import Offerings from '@/components/Offerings';
import WhyUs from '@/components/WhyUs';
import PlacementSupport from '@/components/PlacementSupport';
import PlacedStudents from '@/components/PlacedStudents';
import StudentImpact from '@/components/StudentImpact';
import VisionMissionPhilosophy from '@/components/VisionMissionPhilosophy';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'positioning', 'offerings', 'why-us', 'placement-support', 'placed-students', 'student-impact', 'vision-mission-philosophy', 'final-cta', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Positioning />
        <Offerings />
        <WhyUs />
        <PlacementSupport />
        {/* <PlacedStudents /> */}
        <StudentImpact />
        <VisionMissionPhilosophy />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}