import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const offsetX = direction === 'left' ? 24 : direction === 'right' ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: offset, x: offsetX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.45,
        delay: Math.min(delay, 0.18),
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: 'opacity, transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
