import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../../constants/processData';
import styles from './ProcessSection.module.css';

const ProcessSection = () => {
  return (
    <section className={styles.process} id="services">
      <div className={styles.headerWrap}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>How do we work</h2>
          <p className={styles.subtitle}>
            As a team, we work tirelessly to develop software solutions that are both
            innovative and dependable, empowering businesses to prosper and individuals to flourish.
          </p>
          <p className={styles.subtitle}>
            Our meticulous and collaborative software development process delivers exceptional
            results, ensuring quality, reliability, and client satisfaction at every stage.
          </p>
        </motion.div>
      </div>

      {processData.map((step, i) => (
        <div
          key={step.number}
          className={styles.stepBlock}
          style={{ '--step-color': step.color }}
        >
          <motion.div
            className={styles.stepHeaderCenter}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.numberBubble}>{i + 1}</span>
            <h3 className={styles.bigTitle}>{step.title}</h3>
          </motion.div>

          <div className={`${styles.stepInner} ${step.features.length === 0 ? styles.stepInnerCentered : ''}`}>
            <div className={styles.stickyCol}>
              <motion.img
                src={step.image}
                alt={step.title}
                className={styles.stepImg}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {step.features.length > 0 && (
              <div className={styles.scrollCol}>
                <div className={styles.line} />
                {step.features.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={idx}
                      className={styles.featureItem}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className={styles.dot} />
                      <div className={styles.iconWrap}>
                        <Icon size={20} color={step.color} />
                      </div>
                      <h4>{f.title}</h4>
                      <p>{f.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProcessSection;