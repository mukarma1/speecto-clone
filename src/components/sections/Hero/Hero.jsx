import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../abstract/Button';
import { heroPhrases } from '../../../constants/heroPhrases';
import styles from './Hero.module.css';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [typedTag, setTypedTag] = useState('');

  const phrase = heroPhrases[index];

  useEffect(() => {
    setTypedTag('');
    let i = 0;
    const fullTag = phrase.tag;

    const typeInterval = setInterval(() => {
      i++;
      setTypedTag(fullTag.slice(0, i));
      if (i >= fullTag.length) clearInterval(typeInterval);
    }, 80);

    const nextTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 3800);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(nextTimeout);
    };
  }, [index]);

  return (
    <section className={styles.hero} id="home">
      <span className={styles.ghostText}>TECH</span>

      <div className={styles.container}>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className={styles.heading}>
                {phrase.words.map((w, i) => (
                  <span key={i} style={{ color: w.highlight ? phrase.color : '#ffffff' }}>
                    {w.text}{' '}
                  </span>
                ))}
              </h1>

              <p className={styles.tagLine} style={{ color: phrase.color }}>
                {typedTag}
                <span className={styles.cursor}>|</span>
              </p>
            </motion.div>
          </AnimatePresence>

          <p className={styles.description}>
            We are a team of tech enthusiasts dedicated to developing world-class
            custom software solutions while fostering a culture of creativity,
            inclusivity, and continuous learning.
          </p>

          <div className={styles.ctaGroup}>
            <Button variant="outline" size="lg" style={{ borderColor: phrase.color, color: phrase.color }}>
              Get Started
            </Button>
            <Button variant="ghost" size="lg">Learn more →</Button>
          </div>
        </div>

        <div className={styles.illustration}>
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={phrase.image}
              alt={phrase.tag}
              className={styles.illustrationImg}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -16, 0],
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          </AnimatePresence>

          {[...Array(6)].map((_, i) => {
            const shapes = ['circle', 'square', 'diamond', 'ring'];
            const shape = shapes[i % shapes.length];
            return (
              <motion.span
                key={i}
                className={`${styles.dot} ${styles[shape]}`}
                style={{
                  borderColor: i % 2 === 0 ? phrase.color : '#38bdf8',
                  background: shape === 'ring' ? 'transparent' : (i % 2 === 0 ? phrase.color : '#38bdf8'),
                  top: `${5 + i * 14}%`,
                  left: i % 2 === 0 ? `${2 + i * 8}%` : 'auto',
                  right: i % 2 !== 0 ? `${2 + i * 6}%` : 'auto',
                }}
                animate={{
                  y: [0, i % 2 === 0 ? -18 : 14, 0],
                  x: [0, i % 3 === 0 ? 8 : -8, 0],
                }}
                transition={{
                  duration: 2 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;