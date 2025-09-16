import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { skills, workExperience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Explore My
          </p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Work Experience Section */}
        {workExperience.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
            
            {workExperience.map((experience, index) => (
              <div key={index} className="card p-8 mb-8 animate-slide-up">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md flex items-center justify-center flex-shrink-0">
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

                  {/* Experience Details */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.position}
                    </h4>
                    <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      {experience.company}
                    </h5>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
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
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.briefDescription}
                    </p>
                    <Link
                      to="/experience"
                      className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      Read more about my experience
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div 
                key={category} 
                className={`card p-8 animate-slide-up delay-${categoryIndex * 100}`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-4">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <img 
                          src="/assets/checkmark.png" 
                          alt="Checkmark" 
                          className="w-5 h-5 opacity-70"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center card p-6">
            <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              6+ Months
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Industrial IoT Experience
            </p>
          </div>

          <div className="text-center card p-6">
            <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              10+ Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Completed Successfully
            </p>
          </div>

          <div className="text-center card p-6">
            <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Multiple Awards
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Technical Competitions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;