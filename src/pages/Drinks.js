import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <header>
      <Header />
      <h1 data-testid="page-title">Drinks</h1>
      <Footer />
    </header>
  );
}

export default Drinks;
