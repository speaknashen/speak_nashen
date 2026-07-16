'use client';

import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  image: string;
}

const PlacedStudents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Student | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('placed-students');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Real student data with actual student images from local folder
  const allStudents: Student[] = [
    { 
      id: 1, 
      name: 'Sanjay', 
      image: '/images/students/sanjay.jpeg' 
    },
    { 
      id: 2, 
      name: 'Vishnu', 
      image: '/images/students/vishnu.jpeg' 
    }
  ];

  const displayedStudents = showAll ? allStudents : allStudents.slice(0, 3);
  const hasMoreThanThree = allStudents.length > 3;

  const openModal = (student: Student) => {
    setSelectedImage(student);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section id="placed-students" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-gray-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - CENTER ALIGNED */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Student </span>
            <span className="text-[#d52427]">Success</span>
          </h2>
          <p className="text-lg text-gray-600">Real success stories from our placed students</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedStudents.map((student, index) => (
            <div
              key={student.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-square transform transition-all duration-1000 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(student)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden bg-gray-200">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 group-hover:scale-100 scale-75 transition-transform duration-300">
                    <ZoomIn className="text-[#d52427]" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Only show if more than 3 images */}
        {hasMoreThanThree && !showAll && (
          <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#d52427] to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ height: '90vh' }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <X size={24} className="text-gray-900" />
            </button>

            {/* Image Container */}
            <div className="relative flex items-center justify-center bg-gray-100" style={{ height: '90vh' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlacedStudents;
