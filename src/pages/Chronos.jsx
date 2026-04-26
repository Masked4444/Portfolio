import React from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Chronos = () => {
  const data = portfolioData.chronos;

  return (
    <PageWrapper>
    <div className="p-lg md:p-xl relative w-full h-full min-h-[calc(100vh-160px)]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('https://images.unsplash.com/photo-1634838080334-28befa9eff80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover opacity-20 mix-blend-screen"></div>
      </div>

      {/* The Chassis Container */}
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg relative">
        {/* Title District */}
        <div className="md:col-span-12 mb-lg border-b border-primary-container/20 pb-sm relative">
          <h1 className="font-h1 text-h1 text-primary-container shadow-[0_0_15px_rgba(0,229,255,0.4)] inline-block relative">
            {data.headerTitle}
            <span className="absolute top-0 -right-8 text-secondary-container material-symbols-outlined">
              settings
            </span>
          </h1>
          <p className="font-code-data text-code-data text-tertiary-fixed-dim mt-unit tracking-widest">
            {data.headerSubtitle}
          </p>
        </div>

        {/* Portrait & Metrics (Left Column) */}
        <div className="md:col-span-4 flex flex-col gap-lg">
          {/* Ornate Portrait Frame */}
          <div className="relative w-full aspect-square bg-surface-container-high/40 backdrop-blur-xl border border-secondary-container/50 p-4 flex items-center justify-center group">
            {/* Brass Cogs/Decor */}
            <div className="absolute inset-2 border-2 border-dashed border-secondary-container/40 rounded-full opacity-50 group-hover:border-primary-container transition-colors duration-500"></div>
            <div className="absolute inset-4 border border-secondary-container rounded-full shadow-[inset_0_0_20px_rgba(196,154,108,0.2)]"></div>
            <div className="w-3/4 h-3/4 rounded-full overflow-hidden border-2 border-primary-container relative z-10 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              <img
                alt="Operator Portrait"
                className="w-full h-full object-cover filter contrast-125 sepia-[.2] hue-rotate-180 brightness-75"
                src={data.portraitImage}
              />
            </div>
            {/* Filigree overlay */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary-container"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary-container"></div>
          </div>

          {/* Metrics Terminal */}
          <div className="bg-surface-container-high/40 backdrop-blur-xl border border-secondary-container/30 p-sm relative">
            <div className="absolute -top-2 -left-2 text-secondary-container">
              <span className="material-symbols-outlined text-[16px]">
                flare
              </span>
            </div>
            <h3 className="font-label-caps text-label-caps text-secondary-container mb-md border-b border-secondary-container/20 pb-xs">
              SYS_METRICS
            </h3>
            <div className="space-y-sm">
              {data.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-code-data text-code-data text-[10px] text-tertiary-fixed-dim mb-xs">
                    <span>{m.label}</span>
                    <span className="text-primary-container">{m.value}%</span>
                  </div>
                  <div className="h-2 bg-surface-container-lowest border border-secondary-container/30 w-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${m.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (idx * 0.2) }}
                      className={`h-full ${m.colorClass} ${m.shadowClass}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Biography & Schematics (Right Column) */}
        <div className="md:col-span-8 flex flex-col gap-md">
          {/* Glass Panel Bio */}
          <div className="bg-surface-container-high/40 backdrop-blur-[20px] border border-secondary-container/30 p-lg relative min-h-[400px] overflow-hidden group">
            {/* Schematic Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen bg-[url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover"></div>
            {/* Filigree / Frame Corners */}
            <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-secondary-container/70"></div>
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-secondary-container/70"></div>

            <div className="relative z-10">
              <h2 className="font-h2 text-h2 text-inverse-surface mb-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {data.biography.title}
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-md leading-relaxed tracking-wide">
                <p
                  className="first-letter:text-5xl first-letter:font-h1 first-letter:text-primary-container first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                  dangerouslySetInnerHTML={{
                    __html: data.biography.paragraphs[0],
                  }}
                ></p>
                {data.biography.paragraphs.slice(1).map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            </div>

            {/* Technical Readout Overlay */}
            <div className="absolute bottom-4 right-4 font-code-data text-[10px] text-primary-container/50 text-right">
              <p>LOG_ID: {data.biography.logId}</p>
              <p>ENCRYPTION: {data.biography.encryptionLevel}</p>
            </div>
          </div>

          {/* Skills Grid (Bento Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            {data.skills.map((s, idx) => (
              <div
                key={idx}
                className="bg-surface-container-high/60 border border-secondary-container/20 p-sm text-center hover:border-primary-container/50 transition-colors cursor-crosshair"
              >
                <span className="material-symbols-outlined text-primary-container mb-xs text-3xl shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                  {s.icon}
                </span>
                <p className="font-label-caps text-label-caps text-secondary-fixed">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Chronos;
