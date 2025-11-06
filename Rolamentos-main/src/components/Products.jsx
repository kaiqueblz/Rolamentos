import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const productsData = [
  {
    category: 'Rolamentos',
    items: [
      { name: 'NSK Rolamentos', img: `${process.env.PUBLIC_URL}/products/nsk.jpg` },
      { name: 'NTN Rolamentos', img: `${process.env.PUBLIC_URL}/products/ntn.jpg` },
      { name: 'FAG Rolamentos', img: `${process.env.PUBLIC_URL}/products/fag.jpg` },
      { name: 'Nachi Rolamentos', img: `${process.env.PUBLIC_URL}/products/nachi.png` },
      { name: 'FRM Rolamentos', img: `${process.env.PUBLIC_URL}/products/frm.jpg` },
      { name: 'SKF Rolamentos', img: `${process.env.PUBLIC_URL}/products/skf.jpg` },
    ],
  },
  {
    category: 'Lubrificantes',
    items: [
      { name: 'NSK Lub', img: `${process.env.PUBLIC_URL}/products/nsk-lub.jpg` },
      { name: 'FAG Lub', img: `${process.env.PUBLIC_URL}/products/fag-lub.jpg` },
      { name: 'SKF Lub', img: `${process.env.PUBLIC_URL}/products/skf-lub.jpg` },
    ],
  },
  {
    category: 'Suprimentos de Manutenção',
    items: [
      { name: 'Bucha', img: `${process.env.PUBLIC_URL}/suprimentos/bucha.png` },
      { name: 'Catraca', img: `${process.env.PUBLIC_URL}/suprimentos/catraca.jpg` },
      { name: 'Correias', img: `${process.env.PUBLIC_URL}/suprimentos/correias.jpg` },
      { name: 'Correntes', img: `${process.env.PUBLIC_URL}/suprimentos/correntes.png` },
      { name: 'Fusos', img: `${process.env.PUBLIC_URL}/suprimentos/fusos.jpg` },
      { name: 'Gaxetas', img: `${process.env.PUBLIC_URL}/suprimentos/gaxetas.jpg` },
      { name: 'Guias', img: `${process.env.PUBLIC_URL}/suprimentos/guias.jpg` },
      { name: 'Lineares', img: `${process.env.PUBLIC_URL}/suprimentos/lineares.jpg` },
      { name: 'Mancais', img: `${process.env.PUBLIC_URL}/suprimentos/mancais.jpg` },
      { name: 'Retentores', img: `${process.env.PUBLIC_URL}/suprimentos/retentores.jpg` },
      { name: 'Rolos', img: `${process.env.PUBLIC_URL}/suprimentos/rolos.jpg` },
      { name: 'Rotulas', img: `${process.env.PUBLIC_URL}/suprimentos/rotulas.png` },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Products() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const openWhatsApp = (produto) => {
    const phoneNumber = '5511945617741';
    const message = `Olá, gostaria de um orçamento para: ${produto}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section id="products" className="container products-section">
      <h2 className="section-title">Nossos Produtos</h2>

      <div className="products-wrapper">
        {productsData.map(({ category, items }) => {
          const isExpanded = expandedCategories[category] || false;

          return (
            <div key={category} className="product-category">
              <h3 className="category-title">{category}</h3>

              <motion.ul className="product-list">
                {items.slice(0, 5).map(({ name, img }) => (
                  <motion.li
                    key={name}
                    className="product-item"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <img src={img} alt={name} className="product-img" />
                    <span className="product-name">{name}</span>
                    <button className="contact-btn" onClick={() => openWhatsApp(name)}>
                      Solicitar Orçamento
                    </button>
                  </motion.li>
                ))}

                <AnimatePresence>
                  {isExpanded && (
                    <div className="extra-items">
                      {items.slice(5).map(({ name, img }) => (
                        <motion.li
                          key={name}
                          className="product-item"
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <img src={img} alt={name} className="product-img" />
                          <span className="product-name">{name}</span>
                          <button className="contact-btn" onClick={() => openWhatsApp(name)}>
                            Solicitar Orçamento
                          </button>
                        </motion.li>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </motion.ul>

              {items.length > 5 && (
                <motion.button
                  className="toggle-btn"
                  onClick={() => toggleCategory(category)}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isExpanded ? 'Ver Menos' : 'Ver Mais'}
                </motion.button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
