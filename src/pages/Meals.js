import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
// import MealCard from '../components/MealCard';

function Meals() {
  return (
    <header>
      <Header />
      <Recipes />
      <Footer />
    </header>
  );
}

export default Meals;
