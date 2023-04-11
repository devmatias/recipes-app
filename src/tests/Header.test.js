import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './renderWith';

import AllProviders from '../AllProviders';
import App from '../App';

describe('Testando o componente <Header/>', () => {
  const initialEntries = ['/meals'];
  const searchTestId = 'search-top-btn';
  it('Teste para ver se os elementos estão na página', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );

    const profileIcon = screen.getByTestId('profile-top-btn');
    const searchButton = screen.getByTestId(searchTestId);
    userEvent.click(searchButton);
    const searchButtonToggle = screen.getByTestId(searchTestId);

    expect(profileIcon).toBeVisible();
    expect(searchButtonToggle).toBeVisible();
    expect(searchButton).toBeVisible();
  });

  it('Redirecionamento para profile', async () => {
    const { history } = renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );

    const profileIcon = screen.getByTestId('profile-top-btn');
    userEvent.click(profileIcon);

    expect(history.location.pathname).toBe('/profile');
    expect(profileIcon).not.toBeVisible();
  });

  it('Testa se ao clicar no botao a barra de procura aparece e se clicar novamente desaparece', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );

    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);

    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeVisible();

    userEvent.click(searchButton);
    expect(inputSearch).not.toBeVisible();

    const searchIcon = screen.getByTestId(searchTestId);
    userEvent.click(searchIcon);
    const searchButtonToggle = screen.getByTestId('search-input');
    fireEvent.change(searchButtonToggle, { target: { value: 'novo_valor_de_busca' } });
  });
});
