import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './renderWith';
import { mockRecipes } from './mocks/mockExamples';

const img1 = '1-horizontal-image';
const img0 = '0-horizontal-image';
const drinkDetailsRoute = '/drinks/178319';

localStorage.setItem('favoriteRecipes', JSON.stringify([...mockRecipes]));

describe('Testes da Página FavoriteRecipes', () => {
  const initialEntries = ['/favorite-recipes'];
  test('Testa se o localStorage renderiza os cards', () => {
    renderWithRouter(<App />, { initialEntries });

    const favoriteRecipesHeader = screen.getByRole('heading', { name: 'Favorite Recipes' });
    expect(favoriteRecipesHeader).toBeVisible();

    const favoriteRecipesCards = screen.getAllByTestId(/-recipe-card/i);
    expect(favoriteRecipesCards).toHaveLength(2);
  });
  test('Testa se os botões filtram correntamente', () => {
    renderWithRouter(<App />, { initialEntries });

    const filterMealsBtn = screen.getByTestId('filter-by-meal-btn');
    const filterDrinksBtn = screen.getByTestId('filter-by-drink-btn');

    expect(filterMealsBtn).toBeVisible();
    expect(filterDrinksBtn).toBeVisible();

    const doneRecipesCards = screen.getAllByTestId(/-recipe-card/i);
    expect(doneRecipesCards).toHaveLength(2);

    userEvent.click(filterMealsBtn);
    expect(screen.getAllByTestId(/-recipe-card/i)).toHaveLength(1);
    expect(screen.getByTestId(img0)).toBeVisible();
  });

  test('Testa a rota de detalhes', () => {
    const { history } = renderWithRouter(<App />, { initialEntries });

    const doneRecipeDrinkImg = screen.getByTestId(img1);
    userEvent.click(doneRecipeDrinkImg);
    const { pathname } = history.location;
    expect(pathname).toBe(drinkDetailsRoute);
  });

  test('Testa se a receita não está no LocalStorage', () => {
    renderWithRouter(<App />, { initialEntries });

    const favoriteBtn = screen.getByTestId('0-horizontal-favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();

    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(recipes).toHaveLength(2);

    userEvent.click(favoriteBtn);

    const recipesPos = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(recipesPos).toHaveLength(1);
  });
});
