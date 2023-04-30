import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
// import DrinkCards from '../components/DrinkCard';

function Drinks() {
  return (
    <header>
      <Header />
      <Recipes />
      <Footer />
    </header>
  );
}

export default Drinks;
