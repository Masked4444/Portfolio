import React from 'react';
import { portfolioData } from '../data.js';

const Footer = () => {
  return (
    <footer className="w-full lg:w-[calc(100%-16rem)] border-t border-primary-container/10 bg-surface-dim/80 backdrop-blur-md flex justify-between items-center px-12 py-6 mt-auto z-50 lg:ml-[16rem] relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary-container/20 to-transparent"></div>
      <div className="font-code-data text-[9px] tracking-[0.4em] uppercase text-on-surface-variant/40">
        &copy; {portfolioData.global.copyrightYear} {portfolioData.global.copyrightText}
      </div>
      <div className="flex gap-10 hidden md:flex">
        {['TRANSMISSION', 'VOID_REPORTS', 'PROTOCOLS'].map((item) => (
          <a
            key={item}
            href="#"
            className="font-code-data text-[9px] tracking-[0.3em] uppercase text-on-surface-variant/30 hover:text-primary-container transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
