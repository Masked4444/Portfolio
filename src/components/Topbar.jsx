import React from 'react';
import { portfolioData } from '../data.js';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Topbar = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <header className="fixed top-0 w-full border-b border-primary-container/20 bg-surface-dim/40 backdrop-blur-xl flex justify-between items-center px-6 py-4 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-primary-container hover:text-primary-fixed p-2 focus:outline-none flex items-center justify-center transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-[1.5rem]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        <div className="flex flex-col leading-none">
          <span className="text-[1.25rem] font-black tracking-[0.2em] text-primary-container uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            {portfolioData.global.operatorName}
          </span>
          <span className="text-[8px] font-code-data text-secondary opacity-50 tracking-[0.4em] uppercase mt-1">
          </span>
        </div>
      </div>
      <nav className="hidden lg:flex gap-8 px-4">
        {portfolioData.navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'hub' ? '' : link.id}`}
            className={({ isActive }) =>
              `relative font-code-data tracking-[0.15em] text-[11px] uppercase transition-all duration-300 active:scale-95 cursor-pointer pb-1 pt-1 ${isActive
                ? 'text-primary-container'
                : 'text-on-surface-variant/50 hover:text-primary-fixed'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="topbarActive"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-container shadow-[0_0_10px_#00E5FF]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a
          href={`${import.meta.env.BASE_URL}Moaz Nasser Resume.pdf`}
          download="Moaz Nasser Resume.pdf"
          className="bg-primary-container/10 text-primary-container px-5 py-2 font-code-data text-[10px] tracking-widest border border-primary-container/30 hover:bg-primary-container hover:text-on-primary transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-group"
        >
          <span className="hidden sm:inline">DOWNLOAD_RESUME</span>
          <span className="material-symbols-outlined text-[16px] group-hover:animate-bounce">download</span>
        </a>
      </div>
    </header>
  );
};

export default Topbar;
