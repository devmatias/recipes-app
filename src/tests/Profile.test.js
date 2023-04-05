import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import renderWithRouter from '../renderWithRouter';
import AppProvider from '../provider/AppProvider';

const PROFILE_TOP_BTN = 'profile-top-btn';
const PROFILE_FAVORITE_BTN = 'profile-favorite-btn';

describe('Testando o componente <Profile/>', () => {
  it('Teste para ver se os elementos estão na página', () => {
    render(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const titleProfile = screen.getByTestId('page-title');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
    const buttonFavoriteRecipes = screen.getByTestId(PROFILE_FAVORITE_BTN);
    const buttonLogout = screen.getByTestId('profile-logout-btn');

    expect(titleProfile).toBeVisible();
    expect(profileIcon).toBeVisible();
    expect(buttonDoneRecipes).toBeVisible();
    expect(buttonFavoriteRecipes).toBeVisible();
    expect(buttonLogout).toBeVisible();
  });

  it('Itens salvos em LocalStorage', async () => {
    render(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const email = '{"email":"test@example.com"}';
    localStorage.setItem('user', email);

    await waitFor(() => {
      expect(localStorage.getItem('user')).toEqual(email);
    });
  });

  it('Redirecionamento profile', () => {
    const { history } = renderWithRouter(<Profile />);

    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);
    userEvent.click(profileIcon);

    expect(history.location.pathname).toBe('/profile');
    expect(profileIcon).toBeVisible();
  });

  it('Redirecionamento para Done Recipes', () => {
    const { history } = renderWithRouter(<Profile />);

    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
    userEvent.click(buttonDoneRecipes);

    expect(history.location.pathname).toBe('/done-recipes');
    expect(buttonDoneRecipes).toBeVisible();
  });

  it('Redirecionamento para Favorite Recipes', () => {
    const { history } = renderWithRouter(<Profile />);

    const buttonFavoriteRecipes = screen.getByTestId(PROFILE_FAVORITE_BTN);
    userEvent.click(buttonFavoriteRecipes);

    expect(history.location.pathname).toBe('/favorite-recipes');
    expect(buttonFavoriteRecipes).toBeVisible();
  });

  it('Redirecionamento para tela de Login e localStorage deve ser limpo', () => {
    const { history } = renderWithRouter(<Profile />);

    const buttonLogout = screen.getByTestId('profile-logout-btn');
    userEvent.click(buttonLogout);

    expect(history.location.pathname).toBe('/');
  });
});
