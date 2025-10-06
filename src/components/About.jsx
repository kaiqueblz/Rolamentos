import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-5 bg-light"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="mb-4">Sobre a Empresa</h2>
        <p>
          Somos especialistas em rolamentos industriais e automotivos, atuando há mais de 10 anos no mercado,
          oferecendo produtos de alta qualidade e soluções para diversos setores.
        </p>
      </div>
    </motion.section>
  );
}

export default About;