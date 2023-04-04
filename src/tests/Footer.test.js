import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';
import renderWithRouter from '../renderWithRouter';

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

  it('Redirecionamento para drinks', () => {
    const { history } = renderWithRouter(<Footer />);

    const drinkIconImage = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkIconImage);

    expect(history.location.pathname).toBe('/drinks');

    expect(drinkIconImage).toBeVisible();
  });

  it('Redirecionamento para meals', () => {
    const { history } = renderWithRouter(<Footer />);

    const mealsIconImage = screen.getByTestId('meals-bottom-btn');
    userEvent.click(mealsIconImage);

    expect(history.location.pathname).toBe('/meals');

    expect(mealsIconImage).toBeVisible();
  });
});
