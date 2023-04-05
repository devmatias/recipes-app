import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RecipePage() {
  return (
    <header>
      <Header />
      
      <h1 data-testid="page-title">Meals</h1>
      <Footer />
    </header>
  );
}

export default RecipePage;
