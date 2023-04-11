import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
// import renderWithRouter from '../renderWithRouter';
import { renderWithRouter } from './renderWith';
import AllProviders from '../AllProviders';
import App from '../App';

describe('Testando o componente <Header/>', () => {
  it('Teste para ver se os elementos estão na página', () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      ['/meals'],
    );

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    expect(ingredientRadio).toBeVisible();
    expect(nameRadio).toBeVisible();
    expect(firstLetterRadio).toBeVisible();
    expect(searchButton).toBeVisible();
  });
  it('Teste para ver se os elementos estão na página', () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      ['/meals'],
    );

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    expect(ingredientRadio).toBeVisible();
    expect(nameRadio).toBeVisible();
    expect(firstLetterRadio).toBeVisible();
    expect(searchButton).toBeVisible();
  });
});
