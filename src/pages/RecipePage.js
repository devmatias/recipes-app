import React from 'react';
import Header from '../components/Header';

function RecipePage() {
  return (
    <header>
      <Header />
      <h1 data-testid="page-title">Meals</h1>
    </header>
  );
}

export default RecipePage;
