import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoIcon}>⚡</span>
            <span className={styles.logoText}>Speecto</span>
          </div>
          <p className={styles.footerText}>
            © 2026 Speecto Ltd is a company registered in England and Wales
            (Company No. 15060881)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;