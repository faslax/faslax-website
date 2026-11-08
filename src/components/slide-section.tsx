'use client';

import { motion } from 'framer-motion';

export function SlideSection({ 
  children, 
  direction = 'up',
  delay = 0 
}: { 
  children: React.ReactNode; 
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.98,
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1,
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}