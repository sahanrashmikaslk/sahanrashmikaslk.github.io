import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import type { Project } from '../types/portfolio';
import ImageModal from '../components/ImageModal';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
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

  // Handle scrolling to specific project if hash is present
  useEffect(() => {
    // Always scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Then check for hash navigation
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const projectId = hash.substring(1);
      const element = document.getElementById(projectId);
      if (element) {
        // Wait a bit for the page to fully render then scroll
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 300);
      }
    }
  }, []);

  const openModal = (project: Project) => {
    setModalState({
      isOpen: true,
      imageSrc: project.image,
      imageAlt: project.title,
      title: project.title,
      description: project.description
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
            <h1 className="section-title mb-4">Featured Projects</h1>
            <p className="section-subtitle">
              A comprehensive showcase of technical projects spanning software development, hardware design, and innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} id={project.id} className="card overflow-hidden scroll-mt-20">
                {/* Project Image */}
                <div 
                  className="h-64 bg-gray-100 dark:bg-gray-700 relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  {/* Click to view indicator */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium">
                      Click to view full image
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Category */}
                  <div className="inline-block bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Development Journey
              </h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {projects.length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    10+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Technologies Used
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Featured Projects
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    6+
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Competition Awards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack Overview */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  React, TypeScript, HTML5, CSS3, Tailwind CSS
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Node.js, Java, C#, Python, SQL
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Tools & Platforms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Docker, Git, VS Code, IntelliJ IDEA
                </p>
              </div>
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

export default Projects;