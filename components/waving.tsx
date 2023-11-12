'use client';

import { motion } from 'framer-motion';

export const WavingHand = () => {
  return (
    <motion.div
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
      }}
      animate={{ rotate: 20 }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.2,
        ease: 'easeInOut',
        type: 'tween',
      }}
    >
      👋
    </motion.div>
  );
};
