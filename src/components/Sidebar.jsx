import React from 'react';
import { portfolioData } from '../data.js';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <aside className={`fixed left-0 top-0 h-full flex-col z-40 bg-surface-dim/95 lg:bg-surface-dim/80 backdrop-blur-2xl w-[16rem] border-r border-secondary-container/30 shadow-2xl shadow-black/50 pt-[6rem] flex transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-secondary-container/50 to-transparent"></div>
        <div className="p-6 border-b border-primary-container/10 mb-4 flex flex-col gap-1">
        <div className="font-h2 text-[20px] text-primary-container drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]">
          {portfolioData.global.operatorName}
        </div>
        <div className="font-code-data text-[10px] text-on-surface-variant tracking-[0.2em] uppercase opacity-70">
          {portfolioData.global.title}
        </div>
      </div>
      <nav className="flex flex-col gap-1 flex-grow font-code-data text-[11px] tracking-widest uppercase">
        {portfolioData.navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'hub' ? '' : link.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center p-4 gap-4 transition-all duration-300 group ${
                isActive
                  ? 'text-primary-container'
                  : 'text-on-surface-variant/60 hover:bg-primary-container/5 hover:text-primary-fixed'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 bg-primary-container/10 border-l-4 border-primary-container shadow-[inset_0_0_15px_rgba(0,229,255,0.1)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'icon-fill' : ''}`}>
                  {link.icon}
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-6 border-t border-primary-container/10">
        <div className="flex items-center gap-2 text-[10px] font-code-data text-secondary opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
          NODE_STABLE
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
