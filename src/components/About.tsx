import React from 'react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { education, achievements } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/experience.png" alt="Achievements" className="w-6 h-6 brightness-0 invert" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Achievements
                </h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-xs">{achievement.description}</p>
                    </div>
                  ))}
                  <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2">
                    Read More...
                  </button>
                </div>
              </div>

              {/* Education Card */}
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/education.png" alt="Education" className="w-6 h-6 brightness-0 invert" />
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

            {/* Bio Text */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {portfolioData.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;