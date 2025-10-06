import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Suzano Papel', logo: '/suzano.png' },
  { id: 2, name: 'Suzantur', logo: '/suzantur.png' },
  { id: 3, name: 'Maet', logo: '/maet.png' },
  { id: 4, name: 'Salute embalagens', logo: '/salute.jpg' },
  { id: 5, name: 'Aços Vital', logo: '/vital.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Partners() {
  return (
    <section id="partners" className="container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title">Empresas que Trabalhamos</h2>

      <motion.div
        className="partners-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {partners.map(({ id, name, logo }) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="partner-card"
          >
            <img src={logo} alt={name} loading="lazy" className="partner-logo" />
            <p className="partner-name">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
