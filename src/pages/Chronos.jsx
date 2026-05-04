import React from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
const Chronos = () => {
  const data = portfolioData.chronos;

  return (
    <PageWrapper>
    <div className="p-lg md:p-xl relative w-full h-full min-h-[calc(100vh-10rem)]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[url('https://images.unsplash.com/photo-1634838080334-28befa9eff80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover opacity-20 mix-blend-screen"></div>
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

          {/* Social Links Terminal */}
          <div className="bg-surface-container-high/40 backdrop-blur-xl border border-secondary-container/30 p-sm relative">
            <div className="absolute -top-2 -left-2 text-secondary-container">
              <span className="material-symbols-outlined text-[16px]">
                link
              </span>
            </div>
            <h3 className="font-label-caps text-label-caps text-secondary-container mb-md border-b border-secondary-container/20 pb-xs">
              SOCIAL_LINKS
            </h3>
            <div className="flex flex-col gap-xs">
              <a href="https://www.linkedin.com/in/moaz-nasser-a81a24388/" target="_blank" rel="noreferrer" className="flex items-center gap-sm p-xs border border-secondary-container/20 hover:border-primary-container/50 hover:bg-surface-container-high/60 transition-colors text-secondary-fixed hover:text-primary-container cursor-crosshair">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-code-data text-code-data tracking-widest uppercase text-xs">LinkedIn</span>
              </a>
              <a href="https://moaz-nasser.itch.io/" target="_blank" rel="noreferrer" className="flex items-center gap-sm p-xs border border-secondary-container/20 hover:border-primary-container/50 hover:bg-surface-container-high/60 transition-colors text-secondary-fixed hover:text-primary-container cursor-crosshair">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M2.932 2.766L.608 6.551c-.605.986-.713 2.158-.293 3.23.42 1.071 1.295 1.872 2.378 2.181a4.254 4.254 0 001.353.181c.884-.002 1.745-.259 2.476-.738.749.505 1.644.782 2.569.794a4.57 4.57 0 002.812-.99 4.544 4.544 0 002.831.996c.925-.011 1.821-.29 2.571-.796.732.481 1.594.739 2.48.74a4.267 4.267 0 001.365-.183c1.084-.311 1.959-1.114 2.379-2.187.42-1.073.31-2.247-.297-3.235L21.056 2.766A2.433 2.433 0 0018.97 1.5h-13.94c-.841.002-1.625.434-2.098 1.157v.109zm7.042 10.638v3.13h4.041v-3.13h4.606v4.672c-.006.845-.522 1.589-1.314 1.895l-4.731 1.516a2.017 2.017 0 01-1.151 0l-4.73-1.516a2.003 2.003 0 01-1.314-1.895v-4.672h4.606zm-1.802 6.52a.762.762 0 11-1.523 0 .762.762 0 011.523 0zm5.642.013a.762.762 0 11-1.524 0 .762.762 0 011.524 0z"/>
                </svg>
                <span className="font-code-data text-code-data tracking-widest uppercase text-xs">Itch.io</span>
              </a>
              <a href="https://github.com/Mr-Nobody4444" target="_blank" rel="noreferrer" className="flex items-center gap-sm p-xs border border-secondary-container/20 hover:border-primary-container/50 hover:bg-surface-container-high/60 transition-colors text-secondary-fixed hover:text-primary-container cursor-crosshair">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-code-data text-code-data tracking-widest uppercase text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Biography & Schematics (Right Column) */}
        <div className="md:col-span-8 flex flex-col gap-md">
          {/* Glass Panel Bio */}
          <div className="bg-surface-container-high/40 backdrop-blur-[20px] border border-secondary-container/30 p-lg relative min-h-[25rem] overflow-hidden group">
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
