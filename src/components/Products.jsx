import React from 'react';
import { motion } from 'framer-motion';

const productsData = [
  {
    category: 'Rolamentos',
    items: [
      { name: 'NSK Rolamentos', img: '/products/nsk.jpg' },
      { name: 'NTN Rolamentos', img: '/products/ntn.jpg' },
      { name: 'FAG Rolamentos', img: '/products/fag.jpg' },
      { name: 'Nachi Rolamentos', img: '/products/nachi.png' },
      { name: 'FRM Rolamentos', img: '/products/frm.jpg' },
      { name: 'SKF Rolamentos', img: '/products/skf.jpg' },
    ],
  },
  {
    category: 'Lubrificantes',
    items: [
      { name: 'NSK Lub', img: '/products/nsk-lub.jpg' },
      { name: 'FAG Lub', img: '/products/fag-lub.jpg' },
      { name: 'SKF Lub', img: '/products/skf-lub.jpg' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Products() {
  // função que abre o WhatsApp já com mensagem
  function openWhatsApp(produto) {
    const phoneNumber = '5511945617741'; // código país + DDD + número
    const message = `Olá, gostaria de um orçamento para: ${produto}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <section id="products" className="container products-section">
      <h2 className="section-title">Nossos Produtos</h2>

      <motion.div
        className="products-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {productsData.map(({ category, items }) => (
          <div key={category} className="product-category">
            <h3 className="category-title">{category}</h3>
            <motion.ul className="product-list">
              {items.map(({ name, img }) => (
                <motion.li
                  key={name}
                  className="product-item"
                  variants={itemVariants}
                >
                  <img
                    src={img}
                    alt={name}
                    className="product-img"
                    loading="lazy"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <span className="product-name">{name}</span>
                  <button
                    className="contact-btn"
                    onClick={() => openWhatsApp(name)}
                  >
                    Solicitar Orçamento
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}