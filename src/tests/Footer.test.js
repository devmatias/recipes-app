import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Testando o componente <Footer />', () => {
  it('Teste para ver se os elementos estão na página', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    const drinkIconImage = screen.getByTestId('drinks-bottom-btn');
    const mealIconImage = screen.getByTestId('meals-bottom-btn');

    expect(footer).toBeInTheDocument();
    expect(drinkIconImage).toBeVisible();
    expect(mealIconImage).toBeVisible();
  });
});
