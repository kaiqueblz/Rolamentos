import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/TempFooter';
import Partners from './components/Partners';
import CarouselHeader from './components/CarouselHeader';


function App() {
  return (
    <>
      <Header />
      <CarouselHeader />
      <Hero />
      <About />
      <Products />
      <Partners />
      <Footer />
      
    </>
  );
}

export default App;