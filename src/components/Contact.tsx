import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
  const { email, social } = portfolioData;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Create mailto link
      const subject = formData.subject || 'Contact from Portfolio';
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      console.log('Opening email client with:', mailtoLink);
      
      // Try to open email client
      window.open(mailtoLink, '_self');
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
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
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Your email client should have opened. Please send the message from there.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      Please fill in all required fields with valid information.
                    </p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or collaboration idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Alternative contact method */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Having trouble with the form? You can also email me directly at{' '}
                  <a 
                    href={`mailto:${email}`}
                    className="text-gray-900 dark:text-white hover:underline font-medium"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;