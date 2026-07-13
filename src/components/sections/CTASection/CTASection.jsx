import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../abstract/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Yahan baad me API call laga sakte ho
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's get started
        </motion.h2>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.row}>
            <input
              type="text" name="name" placeholder="Name"
              value={formData.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange} required
            />
          </div>

          <div className={styles.row}>
            <input
              type="tel" name="phone" placeholder="Phone No."
              value={formData.phone} onChange={handleChange}
            />
            <input
              type="text" name="subject" placeholder="Subject"
              value={formData.subject} onChange={handleChange}
            />
          </div>

          <textarea
            name="message" placeholder="Your Message" rows="5"
            value={formData.message} onChange={handleChange} required
          />

          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;