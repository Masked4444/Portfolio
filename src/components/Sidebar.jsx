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
      <aside className={`fixed left-0 top-0 h-full flex-col z-40 bg-slate-950/90 lg:bg-slate-950/70 backdrop-blur-2xl w-[16rem] border-r-2 border-yellow-800/40 shadow-2xl shadow-cyan-950/50 pt-[6rem] flex transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-cyan-500/10 mb-4 flex justify-between items-center">
        <div className="font-h2 text-h2 text-cyan-400">
          {portfolioData.global.operatorName}
        </div>
        <div className="font-code-data text-code-data text-on-surface-variant">
          {portfolioData.global.title}
        </div>
      </div>
      <nav className="flex flex-col gap-2 flex-grow font-mono text-[11px] tracking-tighter">
        {portfolioData.navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'hub' ? '' : link.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center p-4 gap-3 transition-colors duration-200 group transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-cyan-400'
                  : 'text-yellow-700/50 hover:bg-yellow-900/10 hover:text-cyan-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 bg-cyan-500/10 border-l-4 border-cyan-500 shadow-[inset_0_0_15px_rgba(0,229,255,0.2)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="material-symbols-outlined">{link.icon}</span>
                <span>{link.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
