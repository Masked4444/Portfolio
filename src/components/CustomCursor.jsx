import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';
        
      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Inner core variants
  const innerVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      opacity: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0.5,
      opacity: 0.8,
      transition: { type: "tween", ease: "backOut", duration: 0.2 }
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0.3,
      opacity: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    }
  };

  // Outer ring variants
  const outerVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      opacity: 0.6,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 }
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 }
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0.8,
      opacity: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.5 }
    }
  };

  const currentState = isClicked ? "click" : isHovered ? "hover" : "default";

  return (
    <>
      {/* Outer Rotating Arcane Ring */}
      <motion.div
        className={`fixed top-0 left-0 w-12 h-12 -ml-6 -mt-6 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen transition-colors duration-300 ${
          isHovered ? 'border-[#C49A6C] shadow-[0_0_15px_rgba(196,154,108,0.4)]' : 'border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.2)]'
        }`}
        style={{ borderStyle: isHovered ? 'solid' : 'dashed', borderWidth: '2px' }}
        variants={outerVariants}
        animate={currentState}
      >
        <div className={`w-full h-full rounded-full flex items-center justify-center ${isHovered ? 'animate-[spin_3s_linear_infinite_reverse]' : 'animate-[spin_6s_linear_infinite]'}`}>
           {/* Arcane Geometry inside the ring */}
           {isHovered && (
             <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 opacity-60">
               <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#C49A6C" strokeWidth="2"/>
               <circle cx="50" cy="50" r="30" fill="none" stroke="#C49A6C" strokeWidth="1" strokeDasharray="4 4"/>
             </svg>
           )}
           {!isHovered && (
             <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 opacity-40">
               <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#00E5FF" strokeWidth="1"/>
             </svg>
           )}
        </div>
      </motion.div>

      {/* Inner Hex-Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 pointer-events-none z-[10000] flex items-center justify-center mix-blend-screen"
        variants={innerVariants}
        animate={currentState}
      >
        <div className={`w-full h-full rotate-45 transition-colors duration-300 ${
          isHovered ? 'bg-[#C49A6C] shadow-[0_0_10px_#C49A6C]' : 'bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]'
        }`} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
