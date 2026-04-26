import React from 'react';
import { portfolioData } from '../data.js';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Topbar = () => {
  return (
    <header className="fixed top-0 w-full border-b-2 border-yellow-700/30 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-6 py-4 z-50 shadow-[0_4px_20px_rgba(0,229,255,0.15)] lg:pl-[280px]">
      <div className="flex items-center gap-4 hidden lg:flex">
        <span className="text-2xl font-black tracking-widest text-yellow-600 dark:text-yellow-500">
          {portfolioData.global.operatorName}
        </span>
      </div>
      <nav className="hidden md:flex gap-8 border-b border-cyan-500/20">
        {portfolioData.navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'hub' ? '' : link.id}`}
            className={({ isActive }) =>
              `relative font-serif tracking-tight text-sm uppercase transition-all duration-300 active:scale-95 cursor-pointer pb-2 pt-2 ${
                isActive
                  ? 'text-cyan-400 font-bold'
                  : 'text-yellow-700/60 hover:text-cyan-300 hover:shadow-[0_0_12px_#00E5FF]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="topbarActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#00E5FF]"
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
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-400 font-bold hover:text-cyan-300 hover:shadow-[0_0_12px_#00E5FF] transition-all duration-300 active:scale-95 cursor-pointer">
            settings
          </span>
          <span className="material-symbols-outlined text-yellow-700/60 hover:text-cyan-300 hover:shadow-[0_0_12px_#00E5FF] transition-all duration-300 active:scale-95 cursor-pointer">
            notifications
          </span>
        </div>
        <button className="bg-secondary-container text-on-secondary-container px-4 py-2 font-label-caps text-label-caps border border-secondary hover:bg-primary-container hover:text-on-primary-container transition-all shadow-[inset_0_0_10px_rgba(0,229,255,0)] hover:shadow-[inset_0_0_15px_rgba(0,229,255,0.8)]">
          ARCHIVE
        </button>
      </div>
    </header>
  );
};

export default Topbar;
