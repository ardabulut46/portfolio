'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut'
        }
      }}
      viewport={{ 
        once: true,
        margin: '-100px'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 