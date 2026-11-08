'use client';

import { motion, type Variants } from 'framer-motion';

export function CinematicTitle({ 
  text, 
  highlightWord = '', 
  className = '' 
}: { 
  text: string; 
  highlightWord?: string; 
  className?: string;
}) {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.04 
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(6px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em', justifyContent: 'center' }}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            variants={child}
            key={index}
            style={{ 
              display: 'inline-block',
              color: isHighlight ? 'var(--orange, #ff6b6b)' : 'inherit'
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}