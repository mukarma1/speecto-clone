import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ThemeToggle.module.css';
import { useTheme } from '../../../context/ThemeContext';

const ThemeToggle = () => {
   const { isDark, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      <motion.div
        className={styles.track}
        animate={{
          background: isDark
            ? 'linear-gradient(90deg, #1e293b, #334155)'
            : 'linear-gradient(90deg, #7dd3fc, #bae6fd)',
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon-scene"
              className={styles.scene}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className={styles.star}
                style={{ top: '4px', left: '6px' }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                className={styles.star}
                style={{ top: '14px', left: '2px' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <motion.div
                className={styles.knob}
                animate={{ x: 26 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                🌙
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="sun-scene"
              className={styles.scene}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={styles.knob}
                animate={{ x: 0, rotate: [0, 360] }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 20 },
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                }}
              >
                ☀️
              </motion.div>
              <motion.span
                className={styles.cloud}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                ☁️
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;