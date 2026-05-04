import React, { useRef } from 'react';
import { portfolioData } from '../data.js';
import PageWrapper from '../components/PageWrapper';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const TiltCard = ({ nav }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer group z-30"
    >
      <Link to={nav.route} className="block w-52 md:w-60 etched-glass p-sm border border-secondary-container/50 shadow-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] relative overflow-hidden bg-surface-container-high/60 backdrop-blur-md">
        <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500"></div>
        
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div style={{ transform: "translateZ(1.875rem)" }} className="flex items-center gap-2 mb-2 border-b border-secondary-container/30 pb-2 relative z-10">
          <span className="material-symbols-outlined text-secondary text-xl group-hover:text-cyan-400 transition-colors">
            {nav.icon}
          </span>
          <div>
            <h3 className="font-h2 text-[13px] text-inverse-surface group-hover:text-cyan-300 transition-colors tracking-widest uppercase leading-none">
              {nav.title}
            </h3>
            <p className="font-code-data text-[8px] text-primary-fixed opacity-70 group-hover:opacity-100 transition-opacity mt-1">
              {nav.subtitle}
            </p>
          </div>
        </div>
        <p style={{ transform: "translateZ(1.25rem)" }} className="font-body-sm text-[11px] text-on-surface-variant group-hover:text-surface-bright leading-relaxed relative z-10">
          {nav.description}
        </p>

        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-700 ease-out z-10 shadow-[0_0_5px_#00E5FF]"></div>
      </Link>
    </motion.div>
  );
};

const Hub = () => {
  const data = portfolioData.hub;
  const global = portfolioData.global;
  
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = (clientX / window.innerWidth - 0.5) * 20;
    const targetY = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x: targetX, y: targetY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { type: "spring", stiffness: 120, damping: 20 } }
  };

  return (
    <PageWrapper>
      <div 
        onMouseMove={handleMouseMove}
        className="flex items-center justify-center relative w-full h-full min-h-[calc(100vh-10rem)] px-lg overflow-hidden perspective-1000"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-high via-background to-background"></div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between w-full max-w-7xl z-10 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2 relative">
              <span className="font-code-data text-cyan-400 text-[10px] tracking-[0.6em] uppercase opacity-50">
                SYSTEM_INITIATED // ARCHIVE_v0.1
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-inverse-surface drop-shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                {global.brandName}
              </h1>
              <div className="h-1 w-24 bg-cyan-400 shadow-[0_0_10px_#00E5FF]"></div>
            </div>
            
            <p className="font-code-data text-cyan-400/80 text-[14px] md:text-[18px] tracking-[0.2em] uppercase leading-relaxed max-w-xl drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]">
              Building gameplay systems where mechanics and meaning evolve together.
            </p>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[9px] text-primary-fixed opacity-50 uppercase">Location</span>
                <span className="font-code-data text-[12px] text-on-surface-variant">UNDERCITY_SECTOR_7</span>
              </div>
              <div className="w-[1px] h-10 bg-secondary-container/30"></div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[9px] text-primary-fixed opacity-50 uppercase">Status</span>
                <span className="font-code-data text-[12px] text-primary-container">CORE_STABILIZED</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Orb & Cards */}
          <div className="relative flex items-center justify-center aspect-square w-full max-w-[31.25rem] lg:w-1/2 mx-auto lg:mx-0 shrink-0">
            
            {/* The Chassis / Core Image with Z-Rotation */}
            <motion.div 
              animate={{ 
                x: mousePosition.x * 0.5, 
                y: mousePosition.y * 0.5,
              }}
              transition={{ type: "spring", damping: 50, stiffness: 400 }}
              className="relative w-full aspect-square flex items-center justify-center z-10"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0, filter: 'blur(30px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="relative w-[17.5rem] h-[17.5rem] md:w-[25rem] md:h-[25rem] z-20"
              >
                <motion.img
                  alt="Arcane Circle"
                  src={data.centralImage}
                  className="w-full h-full object-contain pointer-events-none opacity-30 mix-blend-screen drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(0,229,255,0.15)_0%,_transparent_70%)]"></div>
              </motion.div>

              {/* Cards clustered around the orb */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="absolute inset-0 pointer-events-none z-30"
              >
                {/* Arsenal: Top Left */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -top-[5%] -left-[10%] pointer-events-auto"
                >
                  <TiltCard nav={data.navigation[0]} />
                </motion.div>

                {/* Chronicles: Top Right */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute top-[15%] -right-[15%] pointer-events-auto"
                >
                  <TiltCard nav={data.navigation[1]} />
                </motion.div>

                {/* Valve: Bottom Right */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -bottom-[5%] -right-[10%] pointer-events-auto"
                >
                  <TiltCard nav={data.navigation[2]} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-primary-container/5 border-t border-primary-container/10 py-1 z-20">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-12 px-6 items-center">
                <span className="font-code-data text-[10px] text-primary-container/60 uppercase">
                  System_Status: <span className="text-primary-container">Optimal</span>
                </span>
                <span className="font-code-data text-[10px] text-primary-container/60 uppercase">
                  Aether_Level: <span className="text-primary-container">Stable</span>
                </span>
                <span className="font-code-data text-[10px] text-primary-container/60 uppercase">
                  Connection: <span className="text-primary-container">Secure</span>
                </span>
                <span className="font-code-data text-[10px] text-primary-container/60 uppercase">
                  Operator: <span className="text-primary-container">{global.operatorName}</span>
                </span>
                <span className="font-code-data text-[10px] text-primary-container/60 uppercase">
                  Project_v2.0.4_Build_Stabilized
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hub;
