import React from 'react';
import { motion } from 'framer-motion';

function AnimatedButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;