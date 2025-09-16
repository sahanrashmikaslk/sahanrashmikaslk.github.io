import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { workExperience } = portfolioData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            <h1 className="section-title mb-4">Work Experience</h1>
            <p className="section-subtitle">
              Professional journey and industrial training experiences in software development and IoT solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Details */}
      <div className="py-16">
        <div className="container-max section-padding">
          {workExperience.map((experience, index) => (
            <div key={index} className="card overflow-hidden mb-12">
              {/* Company Header */}
              <div className="bg-gray-50 dark:bg-gray-900 p-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Company Logo */}
                  <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md flex items-center justify-center flex-shrink-0">
                    <img
                      src={experience.companyLogo}
                      alt={`${experience.company} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="w-8 h-8 text-gray-400 hidden">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>

                  {/* Position Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.position}
                    </h2>
                    <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                      {experience.company}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {experience.period}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Content */}
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Left Column - Description and Highlights */}
                <div>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Highlights & Accomplishments
                    </h4>
                    <div className="space-y-4">
                      {experience.keyHighlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies & Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Images */}
                <div>
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img
                        src={experience.image}
                        alt={`Working at ${experience.company}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="w-full h-full flex items-center justify-center hidden">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>

                    {/* Additional Images */}
                    {experience.additionalImages && experience.additionalImages.length > 0 && (
                      <div className="space-y-4">
                        {experience.additionalImages.map((image, imgIndex) => (
                          <div key={imgIndex} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${experience.company} experience ${imgIndex + 1}`}
                              className="w-full h-auto object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                            {/* Fallback icon */}
                            <div className="w-full h-40 flex items-center justify-center hidden">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Experience Summary */}
          <div className="card p-8 mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Professional Development
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  6
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Months of Industrial Training
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  10+
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  IoT Technologies Mastered
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  2+
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Major Client Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;