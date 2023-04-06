import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import DrinkCards from '../components/DrinkCard';

function Drinks() {
  return (
    <header>
      <Header />
      <h1 data-testid="page-title">Drinks</h1>
      {/* <DrinkCards /> */}
      <Footer />
    </header>
  );
}

export default Drinks;
