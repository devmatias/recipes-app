import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
// import renderWithRouter from '../renderWithRouter';
import AppProvider from '../provider/AppProvider';

describe('Testando o componente <Header/>', () => {
  it('Teste para ver se os elementos estão na página', () => {
    render(
      <AppProvider>
        <SearchBar />
      </AppProvider>,
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
