import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import type { Achievement } from '../types/portfolio';
import ImageModal from '../components/ImageModal';

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: '',
    description: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModal = (achievement: Achievement) => {
    setModalState({
      isOpen: true,
      imageSrc: achievement.image,
      imageAlt: achievement.title,
      title: achievement.title,
      description: achievement.description
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-max section-padding">
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            <h1 className="section-title mb-4">Achievements & Awards</h1>
            <p className="section-subtitle">
              Recognition and awards earned through competitive programming, technical competitions, and academic excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openModal(achievement)}
              >
                {/* Achievement Image */}
                <div className="h-64 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="absolute inset-0 flex items-center justify-center hidden">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  {/* Click to view indicator */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium">
                      Click to view full image
                    </div>
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="p-6">
                  {/* Achievement Category & Year */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Achievement Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>

                  {/* Achievement Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Statistics */}
          <div className="mt-16">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Achievement Summary
              </h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievements.length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Achievements
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievements.filter(a => a.category === 'Competition').length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Competition Awards
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {Math.max(...achievements.map(a => a.year)) - Math.min(...achievements.map(a => a.year)) + 1}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years Active
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    100%
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Team Efforts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Competition Timeline */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Competition Timeline
            </h2>
            <div className="space-y-6">
              {achievements
                .sort((a, b) => b.year - a.year)
                .map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-6 card p-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        title={modalState.title}
        description={modalState.description}
      />
    </div>
  );
};

export default Achievements;