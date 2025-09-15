import React from 'react';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
  const { email, social } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Get in Touch
          </p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="card p-8 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <img src="/assets/email.png" alt="Email" className="w-6 h-6 brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href={`mailto:${email}`}
                      className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                    <a 
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
                    >
                      Sahan Lelwala
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <img src="/assets/github.png" alt="GitHub" className="w-6 h-6 brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">GitHub</h4>
                    <a 
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
                    >
                      sahanrashmikaslk
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                  >
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                  >
                    <img src="/assets/github.png" alt="GitHub" className="w-5 h-5 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                  >
                    <img src="/assets/fb.png" alt="Facebook" className="w-5 h-5 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                  >
                    <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5 filter brightness-0 invert dark:brightness-100 dark:invert-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8 animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or collaboration idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;