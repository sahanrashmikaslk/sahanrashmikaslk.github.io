import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Sahan Lelwala. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;