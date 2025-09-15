import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { education, achievements } = portfolioData;
  const navigate = useNavigate();
  
  // Get top 3 most recent achievements (prioritize 2024 achievements)
  const topAchievements = achievements
    .sort((a, b) => b.year - a.year) // Sort by year descending
    .slice(0, 3); // Take only first 3

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Get To Know More
          </p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative">
              <img
                src="/assets/achievement-1.jpeg"
                alt="About profile"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Achievements Card */}
              <div className="card p-8 text-center">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                  <img src="/assets/experience.png" alt="Achievements" className="w-6 h-6 brightness-0 invert dark:brightness-100 dark:invert-0" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Top Achievements
                </h3>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                  {topAchievements.map((achievement, index) => (
                    <div key={index} className="py-3 px-3 rounded-lg bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-900 dark:border-white flex items-center space-x-3">
                      {/* Achievement Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-12 h-12 object-cover rounded-lg shadow-sm"
                        />
                      </div>
                      {/* Achievement Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                          {achievement.title.split(' - ')[0]} {/* Show only the main title part */}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {/* Extract and show the achievement result */}
                          {achievement.description.includes('Champions') ? '🏆 Champions' :
                           achievement.description.includes('2nd Runners-up') ? '🥉 2nd Runners-up' :
                           achievement.description.includes('7th place') ? '🏅 7th Place' :
                           achievement.description.includes('6th place') ? '🏅 6th Place' :
                           achievement.title.split(' - ')[1] || `${achievement.year}`}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        navigate('/achievements');
                        // Scroll to top after navigation
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }}
                      className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-sm inline-flex items-center hover:underline font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                    >
                      View All Achievements 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/education.png" alt="Education" className="w-6 h-6 brightness-0 invert dark:brightness-100 dark:invert-0" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Education
                </h3>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs mb-1">{edu.institution}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;