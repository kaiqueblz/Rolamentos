import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="bg-light py-3 mb-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="/logo.png"
            alt="Rolamentos Condo Logo"
            style={{ height: '40px', marginRight: '12px' }}
          />
          <h1 className="h4 mb-0 text-dark">WC Rolamentos</h1>
        </a>
        <nav>
          <a href="#about" className="me-3 text-decoration-none text-dark">Sobre</a>
          <a href="#products" className="me-3 text-decoration-none text-dark">Produtos</a>
          <a href="#partners" className="text-decoration-none text-dark">Parceiros</a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;