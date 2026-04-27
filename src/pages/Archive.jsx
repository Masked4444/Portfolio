import React from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Archive = () => {
  const data = portfolioData.archive;

  return (
    <PageWrapper>
    <div className="flex flex-col h-full absolute inset-0 overflow-hidden">
      {/* Header Section */}
      <div className="mb-xl px-lg pt-8 z-10">
        <h1 className="font-h1 text-h1 text-primary-fixed drop-shadow-[0_0_10px_rgba(156,240,255,0.5)]">
          {data.headerTitle}
        </h1>
        <p className="font-code-data text-code-data text-surface-tint mt-xs">
          {data.headerSubtitle}
        </p>
      </div>

      {/* Horizontal Gallery */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 overflow-x-auto hide-scrollbar flex items-center gap-xl px-lg pb-xl pt-lg relative snap-x snap-mandatory h-full z-10"
      >
        {data.projects.map((p) => (
          <motion.div
            variants={itemVariants}
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="snap-center shrink-0 w-[85vw] md:w-[37.5rem] h-[25rem] etched-glass relative group cursor-pointer transition-all duration-500 hover:w-[90vw] md:hover:w-[50rem] hover:hextech-glow rounded-lg overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00MCAwTDAgNDBoMTBMMDAgMTB6IiBmaWxsPSIjNWY0MDFhIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')] bg-no-repeat bg-top-right pointer-events-none z-20"></div>
            <div className="h-2 w-full bg-surface-container flex">
              <div
                className={`h-full bg-gradient-to-r from-on-tertiary-container to-primary-container ${p.widthClass} shadow-[0_0_10px_theme('colors.primary-container')]`}
              ></div>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <img
                alt={p.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                src={p.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>

              {/* Metadata Overlay */}
              {p.date && (
                <div className="absolute top-sm left-sm font-label-caps text-label-caps text-secondary transform -rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 drop-shadow-[0_0_5px_theme('colors.secondary')]">
                  [INITIATED: {p.date}]
                </div>
              )}

              {p.stack && (
                <div className="absolute bottom-sm right-sm font-label-caps text-label-caps text-primary-fixed transform rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 drop-shadow-[0_0_5px_theme('colors.primary-fixed')]">
                  TECH_STACK: {p.stack}
                </div>
              )}

              {p.status && (
                <div className="absolute top-md right-md font-label-caps text-label-caps text-tertiary-fixed transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 drop-shadow-[0_0_5px_theme('colors.tertiary-fixed')] border border-tertiary-fixed p-1">
                  STATUS: {p.status}
                </div>
              )}
            </div>
            <div className="p-md border-t border-secondary-container bg-surface-container-high/80 backdrop-blur-md relative z-10 flex justify-between items-end">
              <div>
                <h2 className="font-h2 text-h2 text-inverse-surface">
                  {p.title}
                </h2>
                <p className="font-code-data text-code-data text-outline mt-xs">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://moaz-nasser.itch.io/war" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-label-caps text-[10px] tracking-widest text-primary-container border border-primary-container/30 px-3 py-1 hover:bg-primary-container/10 transition-colors"
                >
                  [OPERATE]
                </a>
                <span className="material-symbols-outlined text-primary-container text-3xl group-hover:animate-pulse drop-shadow-[0_0_8px_theme('colors.primary-container')]">
                  {p.icon}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Spacer for smooth scroll end */}
        <div className="snap-center shrink-0 w-[6.25rem] h-full"></div>
      </motion.div>

      {/* Ambient Background Filigree */}
      <div className="absolute inset-0 brass-filigree-radial z-0"></div>
    </div>
    </PageWrapper>
  );
};

export default Archive;
