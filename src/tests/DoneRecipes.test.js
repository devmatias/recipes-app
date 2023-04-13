import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './renderWith';
import { mockRecipes } from './mocks/mockExamples';

const name1 = '1-horizontal-name';
const name0 = '0-horizontal-name';
const img1 = '1-horizontal-image';
const img0 = '0-horizontal-image';

localStorage.setItem('doneRecipes', JSON.stringify([...mockRecipes]));

describe('Testes da Página DoneRecipes', () => {
  const initialEntries = ['/done-recipes'];
  test('Testa se o localStorage renderiza os cards', () => {
    renderWithRouter(<App />, { initialEntries });

    const doneRecipesHeader = screen.getByRole('heading', { name: 'Done Recipes' });
    expect(doneRecipesHeader).toBeVisible();

    const doneRecipesCards = screen.getAllByTestId(/-recipe-card/i);
    expect(doneRecipesCards).toHaveLength(2);

    const doneRecipeMealName = screen.getByTestId(name0);
    const doneRecipeDrinkName = screen.getByTestId(name1);
    const doneRecipeMealImg = screen.getByTestId(img0);
    const doneRecipeDrinkImg = screen.getByTestId(img1);

    expect(doneRecipeMealName).toBeVisible();
    expect(doneRecipeDrinkName).toBeVisible();
    expect(doneRecipeDrinkImg).toBeVisible();
    expect(doneRecipeMealImg).toBeVisible();
    expect(doneRecipeDrinkName.innerHTML).toBe('Aquamarine');
  });
  test('Testa se os botões filtram correntamente', () => {
    renderWithRouter(<App />, { initialEntries });

    const filterAllBtn = screen.getByTestId('filter-by-all-btn');
    const filterMealsBtn = screen.getByTestId('filter-by-meal-btn');
    const filterDrinksBtn = screen.getByTestId('filter-by-drink-btn');

    expect(filterAllBtn).toBeVisible();
    expect(filterMealsBtn).toBeVisible();
    expect(filterDrinksBtn).toBeVisible();

    const doneRecipesCards = screen.getAllByTestId(/-recipe-card/i);
    expect(doneRecipesCards).toHaveLength(2);

    userEvent.click(filterMealsBtn);
    expect(screen.getAllByTestId(/-recipe-card/i)).toHaveLength(1);
    expect(screen.getByTestId(img0)).toBeVisible();
    expect(screen.queryByTestId(name1)).not.toBeInTheDocument();
  });
});
