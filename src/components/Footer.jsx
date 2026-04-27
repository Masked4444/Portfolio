import React from 'react';
import { portfolioData } from '../data.js';

const Footer = () => {
  return (
    <footer className="w-full lg:w-[calc(100%-16rem)] border-t-2 border-yellow-800/20 border-t border-cyan-900/50 bg-slate-950 flex justify-between items-center px-12 py-8 mt-auto z-50 lg:ml-[16rem]">
      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-slate-600">
        &copy; {portfolioData.global.copyrightYear} {portfolioData.global.copyrightText}
      </div>
      <div className="flex gap-8 hidden md:flex">
        <a
          href="#"
          className="font-mono text-[9px] tracking-[0.3em] uppercase text-slate-600 opacity-70 hover:opacity-100 hover:text-yellow-500 transition-opacity duration-200"
        >
          TRANSMISSION
        </a>
        <a
          href="#"
          className="font-mono text-[9px] tracking-[0.3em] uppercase text-slate-600 opacity-70 hover:opacity-100 hover:text-yellow-500 transition-opacity duration-200"
        >
          VOID_REPORTS
        </a>
        <a
          href="#"
          className="font-mono text-[9px] tracking-[0.3em] uppercase text-slate-600 opacity-70 hover:opacity-100 hover:text-yellow-500 transition-opacity duration-200"
        >
          PROTOCOLS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
