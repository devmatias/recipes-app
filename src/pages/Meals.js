import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MealCard from '../components/MealCard';

function Meals() {
  return (
    <header>
      <Header />
      <h1 data-testid="page-title">Meals</h1>
      {/* <MealCard /> */}
      <Footer />
    </header>
  );
}

export default Meals;
