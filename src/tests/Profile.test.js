import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import renderWithRouter from '../renderWithRouter';

const PROFILE_TOP_BTN = 'profile-top-btn';

const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('Testando o componente <Profile/>', () => {
  it('Teste para ver se os elementos estão na página', () => {
    render(<Profile />);

    const titleProfile = screen.getByTestId('page-title');
    const profileIcon = screen.getByTestId(PROFILE_TOP_BTN);

    const mockId = '0';
    const mockJson = { email: 'teste@teste.com' };
    setLocalStorage(mockId, mockJson);

    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
    const buttonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const buttonLogout = screen.getByTestId('profile-logout-btn');

    expect(titleProfile).toBeVisible();
    expect(profileIcon).toBeVisible();

    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));

    expect(buttonDoneRecipes).toBeVisible();
    expect(buttonFavoriteRecipes).toBeVisible();
    expect(buttonLogout).toBeVisible();
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

  // it('Testa se ao clicar no botao a barra de procura aparece', () => {
  //   render(<Profile />);

  //   const searchButton = screen.getByTestId('search-top-btn');
  //   userEvent.click(searchButton);

  //   const inputSearch = screen.getByTestId('search-input');
  //   expect(inputSearch).toBeVisible();

  //   userEvent.click(searchButton);
  //   expect(inputSearch).not.toBeVisible();
  // });
});
