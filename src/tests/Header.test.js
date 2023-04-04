import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <Header/>', () => {
  it('Teste para ver se os elementos estão na página', () => {
    render(<Header />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    const searchButton = screen.getByTestId('search-top-btn');

    expect(profileIcon).toBeVisible();
    expect(searchButton).toBeVisible();
  });

  it('Redirecionamento para profile', () => {
    const { history } = renderWithRouter(<Header />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    userEvent.click(profileIcon);

    expect(history.location.pathname).toBe('/profile');
    expect(profileIcon).toBeVisible();
  });

  it('Testa se ao clicar no botao a barra de procura aparece', () => {
    render(<Header />);

    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);

    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeVisible();

    userEvent.click(searchButton);
    expect(inputSearch).not.toBeVisible();
  });
});
