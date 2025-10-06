import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

function Hero() {
  return (
    <motion.section
      className="py-5 bg-primary text-white text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h1 className="display-4">Bem-vindo à WC Rolamentos</h1>
        <p className="lead">Soluções em rolamentos industriais e automotivos com qualidade e confiança.</p>
        <AnimatedButton>Saiba Mais</AnimatedButton>
      </div>
    </motion.section>
  );
}

export default Hero;