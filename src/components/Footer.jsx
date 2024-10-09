"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-center text-gray-400 py-8">
      <div className="container mx-auto">
        <p className="text-lg mb-4 text-neon-green">© {new Date().getFullYear()} DevImagination. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          {/* Enlaces sociales */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-yellow transition-transform transform hover:scale-110">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-yellow transition-transform transform hover:scale-110">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:dev@example.com" className="text-neon-green hover:text-neon-yellow transition-transform transform hover:scale-110">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-green animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;