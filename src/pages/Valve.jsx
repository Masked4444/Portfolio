import React from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Valve = () => {
  const data = portfolioData.signal;

  return (
    <PageWrapper>
    <div className="relative w-full h-full min-h-[calc(100vh-160px)] flex flex-col ley-lines glow-overlay">
      <div className="flex-1 p-lg w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center my-xl">
        {/* Terminal Header */}
        <div className="w-full max-w-4xl mb-md flex justify-between items-end border-b border-secondary-container pb-sm relative z-10">
          <div>
            <h1 className="font-h1 text-h1 text-secondary tracking-widest uppercase">
              {data.headerTitle}
            </h1>
            <p className="font-code-data text-code-data text-primary-fixed mt-xs opacity-70">
              {data.headerSubtitle}
            </p>
          </div>
          <div className="flex gap-sm">
            <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-surface-bright"></div>
            <div className="w-3 h-3 rounded-full bg-surface-bright"></div>
          </div>
        </div>

        {/* Contact Form Chassis */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-4xl bg-surface-container/40 backdrop-blur-[20px] border border-secondary-container relative filigree-tr shadow-2xl p-lg z-10 before:absolute before:-inset-[1px] before:border before:border-tertiary-fixed-dim/20 before:pointer-events-none"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 border border-secondary-container bg-surface-container flex items-center justify-center rotate-45 z-20">
            <div className="w-4 h-4 border border-secondary rounded-full"></div>
          </div>
          <form className="grid grid-cols-12 gap-md w-full relative">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  badge
                </span>
                OPERATOR_ID
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-lowest/50 border border-on-tertiary-container text-primary font-code-data text-code-data p-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all duration-300 placeholder:text-outline-variant rounded-none"
                  placeholder={data.form.idPlaceholder}
                  type="text"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-container group-focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  router
                </span>
                RETURN_FREQUENCY [EMAIL]
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-lowest/50 border border-on-tertiary-container text-primary font-code-data text-code-data p-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all duration-300 placeholder:text-outline-variant rounded-none"
                  placeholder={data.form.emailPlaceholder}
                  type="email"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-container group-focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>
            <div className="col-span-12 flex flex-col gap-xs mt-sm">
              <label className="font-label-caps text-label-caps text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  data_object
                </span>
                DATA_PAYLOAD
              </label>
              <div className="relative group">
                <textarea
                  className="w-full bg-surface-container-lowest/50 border border-on-tertiary-container text-primary font-code-data text-code-data p-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all duration-300 placeholder:text-outline-variant rounded-none resize-none"
                  placeholder={data.form.messagePlaceholder}
                  rows="6"
                ></textarea>
                <div className="absolute top-0 right-0 w-2 h-full bg-surface-container-low border-l border-on-tertiary-container flex flex-col justify-between py-1 items-center">
                  <div className="w-1 h-4 bg-outline-variant"></div>
                  <div className="w-1 h-4 bg-outline-variant"></div>
                </div>
              </div>
            </div>
            <div className="col-span-12 border-t border-outline-variant/30 mt-md pt-lg flex flex-col md:flex-row justify-between items-end gap-lg">
              <div className="flex gap-lg items-center">
                <div className="flex flex-col gap-xs items-center">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    ENCRYPTION
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer border border-secondary-container p-1 bg-surface-container-lowest">
                    <input
                      defaultChecked
                      className="sr-only peer"
                      type="checkbox"
                      value=""
                    />
                    <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-secondary after:border-secondary-container after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-on-tertiary-container"></div>
                  </label>
                </div>
                <div className="flex flex-col gap-xs w-32">
                  <div className="flex justify-between w-full">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      POWER
                    </span>
                    <span className="font-code-data text-label-caps text-primary">
                      MAX
                    </span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-lowest border border-on-tertiary-container relative">
                    <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-on-tertiary-container to-primary-container border-r-2 border-secondary"></div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-xl py-md border-2 border-secondary overflow-hidden transition-all duration-300 hover:bg-secondary hover:text-on-secondary hover:shadow-[0_0_20px_var(--tw-colors-primary-container)]"
                type="button"
              >
                <div className="absolute inset-0 bg-primary-container/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center gap-sm z-10 font-bold tracking-[0.3em]">
                  <span className="material-symbols-outlined">bolt</span>
                  ENGAGE_TRANSMISSION
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Valve;
