import React from 'react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const { name, title, bio, social } = portfolioData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    window.open('/assets/resume-example.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 pt-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 font-medium">
              {title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {bio}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={downloadCV}
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Info
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <img 
                    src="/assets/linkedin.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 opacity-70 dark:opacity-80 dark:invert group-hover:opacity-100 group-hover:filter group-hover:brightness-0 group-hover:invert dark:group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-300"
                  />
                </div>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <img 
                    src="/assets/github.png" 
                    alt="GitHub" 
                    className="w-6 h-6 opacity-70 dark:opacity-80 dark:invert group-hover:opacity-100 group-hover:filter group-hover:brightness-0 group-hover:invert dark:group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-300"
                  />
                </div>
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <img 
                    src="/assets/fb.png" 
                    alt="Facebook" 
                    className="w-6 h-6 opacity-70 dark:opacity-80 dark:invert group-hover:opacity-100 group-hover:filter group-hover:brightness-0 group-hover:invert dark:group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-300"
                  />
                </div>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <svg 
                    className="w-5 h-5 fill-gray-600 dark:fill-white group-hover:fill-white dark:group-hover:fill-gray-900 transition-all duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-700">
                <img
                  src="/assets/profile-pic.jpg"
                  alt={`${name} profile picture`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;