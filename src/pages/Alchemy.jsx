import React from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Alchemy = () => {
  const data = portfolioData.techTree;

  return (
    <PageWrapper>
    <div className="p-lg relative min-h-[calc(100vh-10rem)] flex flex-col gap-xl max-w-7xl mx-auto w-full">
      {/* Decorative Background Frame (Chassis) */}
      <div className="absolute inset-beveled-margin border-frame-weight border-secondary/30 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary"></div>
      </div>

      <header className="flex justify-between items-end pb-md border-b border-outline-variant/50 relative z-10">
        <div>
          <h1 className="font-h1 text-h1 text-primary-container mb-xs">
            {data.headerTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {data.headerSubtitle}
          </p>
        </div>
        <div className="glass-terminal px-4 py-2 flex items-center gap-2">
          <span className="font-label-caps text-label-caps text-secondary">
            SYSTEM STATUS:
          </span>
          <span className="font-code-data text-code-data text-primary-container">
            {data.systemStatus}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary-container active-glow ml-2"></span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-md flex-1 min-h-[37.5rem] relative z-10">
        {/* Central Power Terminal */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-12 lg:col-span-4 lg:col-start-5 flex flex-col items-center justify-center relative z-20 my-8 lg:my-0"
        >
          <div className="etched-glass p-lg rounded-full w-64 h-64 flex flex-col items-center justify-center active-glow relative">
            <div className="absolute inset-0 rounded-full border border-primary-container/50 animate-pulse"></div>
            <span className="material-symbols-outlined text-6xl text-primary-container mb-4 icon-fill">
              bolt
            </span>
            <h2 className="font-h2 text-h2 text-on-surface text-center leading-none">
              CORE
              <br />
              <span className="text-secondary text-xl">SKILLS</span>
            </h2>
          </div>
        </motion.div>

        {/* Node 1: Top Left */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-6 lg:col-span-3 lg:col-start-2 lg:row-start-1 flex flex-col items-center justify-end pb-xl relative"
        >
          <svg
            className="absolute top-1/2 left-full w-full h-full pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              className="opacity-50"
              d="M0,50 Q50,50 100,100"
              fill="none"
              stroke="#00e5ff"
              strokeDasharray="4 4"
              strokeWidth="2"
            ></path>
          </svg>
          <div className="etched-glass p-md w-full hover:active-glow cursor-pointer transition-all">
            <div className="flex items-center gap-3 mb-4 border-b border-outline-variant/50 pb-2">
              <span className="material-symbols-outlined text-secondary">
                {data.nodes[0].icon}
              </span>
              <h3 className="font-code-data text-code-data text-on-surface uppercase">
                {data.nodes[0].title}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Output</span>
                <span className="text-primary-container">
                  {data.nodes[0].output}%
                </span>
              </div>
              <div className="h-4 w-full bg-surface-container-lowest rounded-sm border border-outline/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwYTEyMmEiPjwvcmVjdD48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI0IiBmaWxsPSIjMTMxYTMzIj48L3JlY3Q+PC9zdmc+')] opacity-50 z-10"></div>
                <div
                  className="h-full tube-gradient relative"
                  style={{ width: `${data.nodes[0].output}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 2: Top Right */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-6 lg:col-span-3 lg:col-start-9 lg:row-start-1 flex flex-col items-center justify-end pb-xl relative"
        >
          <svg
            className="absolute top-1/2 right-full w-full h-full pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              className="opacity-20"
              d="M100,50 Q50,50 0,100"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="2"
            ></path>
          </svg>
          <div className="etched-glass p-md w-full opacity-70 hover:opacity-100 hover:active-glow cursor-pointer transition-all">
            <div className="flex items-center gap-3 mb-4 border-b border-outline-variant/50 pb-2">
              <span className="material-symbols-outlined text-secondary">
                {data.nodes[1].icon}
              </span>
              <h3 className="font-code-data text-code-data text-on-surface uppercase">
                {data.nodes[1].title}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Output</span>
                <span className="text-primary-container">
                  {data.nodes[1].output}%
                </span>
              </div>
              <div className="h-4 w-full bg-surface-container-lowest rounded-sm border border-outline/30 overflow-hidden relative">
                <div
                  className="h-full tube-gradient relative opacity-60"
                  style={{ width: `${data.nodes[1].output}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 3: Bottom Left */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-6 lg:col-span-3 lg:col-start-2 lg:row-start-2 flex flex-col items-center justify-start pt-xl relative"
        >
          <div className="etched-glass p-md w-full opacity-40 hover:opacity-100 hover:active-glow cursor-pointer transition-all border-dashed border-outline">
            <div className="flex items-center gap-3 mb-4 border-b border-outline-variant/50 pb-2">
              <span className="material-symbols-outlined text-outline">
                {data.nodes[2].icon}
              </span>
              <h3 className="font-code-data text-code-data text-outline uppercase">
                {data.nodes[2].title}
              </h3>
            </div>
            <div className="text-center font-label-caps text-label-caps text-error">
              INSUFFICIENT POWER
            </div>
          </div>
        </motion.div>

        {/* Node 4: Bottom Right */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:col-span-6 lg:col-span-3 lg:col-start-9 lg:row-start-2 flex flex-col items-center justify-start pt-xl relative"
        >
          <div className="etched-glass p-md w-full hover:active-glow cursor-pointer transition-all">
            <div className="flex items-center gap-3 mb-4 border-b border-outline-variant/50 pb-2">
              <span className="material-symbols-outlined text-secondary">
                {data.nodes[3].icon}
              </span>
              <h3 className="font-code-data text-code-data text-on-surface uppercase">
                {data.nodes[3].title}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Output</span>
                <span className="text-primary-container">
                  {data.nodes[3].output}%
                </span>
              </div>
              <div className="h-4 w-full bg-surface-container-lowest rounded-sm border border-outline/30 overflow-hidden relative">
                <div
                  className="h-full tube-gradient relative"
                  style={{ width: `${data.nodes[3].output}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Panel (Bottom spanning) */}
      <div className="etched-glass p-lg flex flex-col md:flex-row gap-lg items-center relative overflow-hidden z-10">
        <div className="absolute right-0 top-0 w-32 h-32 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[7.5rem]">
            settings
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-h2 text-h2 text-secondary mb-2">
            {data.nodes[0].title} Details
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
            {data.nodes[0].description}
          </p>
        </div>
        <div className="flex flex-col gap-sm min-w-[12.5rem]">
          <div className="glass-terminal px-4 py-2 flex justify-between items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              COST:
            </span>
            <span className="font-code-data text-code-data text-primary-container">
              {data.nodes[0].cost}
            </span>
          </div>
          <button className="bg-secondary-container text-on-secondary px-6 py-3 font-code-data text-code-data tracking-widest uppercase hover:bg-secondary hover:active-glow transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">upgrade</span>
            INITIATE SEQUENCE
          </button>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Alchemy;
