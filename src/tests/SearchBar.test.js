import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import renderWithRouter from '../renderWithRouter';
import { renderWithRouter } from './renderWith';
import AllProviders from '../AllProviders';
import App from '../App';

describe('Testando o componente <Header/>', () => {
  jest.spyOn(global, 'alert');
  const initialEntries = ['/meals'];
  const ingredientTestId = 'ingredient-search-radio';
  const firstLetterTestId = 'first-letter-search-radio';
  const nameRadioTestId = 'name-search-radio';
  const searchTestId = 'search-top-btn';
  const buttonSearchID = 'exec-search-btn';
  const searchInputID = 'search-input';
  it('Teste para ver se os elementos estão na página', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );

    const ingredientRadio = screen.getByTestId(ingredientTestId);
    const nameRadio = screen.getByTestId(nameRadioTestId);
    const firstLetterRadio = screen.getByTestId('firstLetterTestId');
    const searchButton = screen.getByTestId(buttonSearchID);

    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('test 1 letter alert', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );
    const searchIcon = screen.getByTestId(searchTestId);
    userEvent.click(searchIcon);
    const firstLetterRadio = screen.getByTestId(firstLetterTestId);
    const searchInput = screen.getByTestId(searchInputID);
    const btnSearch = screen.getByTestId(buttonSearchID);

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'abc');
    userEvent.click(btnSearch);

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith('Your search must have only 1 (one) character');
    });
  });
  it('test global alert', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries },
    );
    const searchIcon = screen.getByTestId(searchTestId);
    userEvent.click(searchIcon);
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const searchInput = screen.getByTestId(searchInputID);
    const btnSearch = screen.getByTestId(buttonSearchID);

    userEvent.click(ingredientRadio);
    userEvent.type(searchInput, 'abc12121212324');
    userEvent.click(btnSearch);

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith('Sorry, we haven\'t found any recipes for these filters.');
    });
  });
  // it('test redirecionamento para meals', async () => {
  //   const { history } = renderWithRouter(
  //     <AllProviders>
  //       <App />
  //     </AllProviders>,
  //     { initialEntries },
  //   );
  //   const searchIcon = screen.getByTestId(searchTestId);
  //   userEvent.click(searchIcon);
  //   const nameRadio = screen.getByTestId('name-search-radio');
  //   const searchInput = screen.getByTestId('search-input');
  //   const btnSearch = screen.getByTestId('exec-search-btn');

  //   userEvent.click(nameRadio);
  //   userEvent.type(searchInput, 'Corba');
  //   userEvent.click(btnSearch);

  //   expect(history.location.pathname).toBe('/meals/52977');
  // });
  it('test redirecionamento para drinks', async () => {
    const { history } = renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries: ['/drinks'] },
    );
    const searchIcon = screen.getByTestId(searchTestId);
    userEvent.click(searchIcon);
    const nameRadio = screen.getByTestId(nameRadioTestId);
    const searchInput = screen.getByTestId(searchInputID);
    const btnSearch = screen.getByTestId(buttonSearchID);

    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'Sherry Eggnog');
    userEvent.click(btnSearch);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/12188');
    });
  });
  it('redirects to recipe details when only one result is returned', async () => {
    const { history } = renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries: ['/meals'] },
    );

    const searchIcon = await screen.findByTestId(searchTestId);
    userEvent.click(searchIcon);

    const nameRadio = await screen.findByTestId('name-search-radio');
    const searchInput = await screen.findByTestId(searchInputID);
    const btnSearch = await screen.findByTestId(buttonSearchID);

    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'Corba');
    userEvent.click(btnSearch);
    await waitFor(() => { expect(history.location.pathname).toBe('/meals/52977'); });
  });
  it('redirects to recipe details when only one result is returned', async () => {
    renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,
      { initialEntries: ['/drinks'] },
    );

    const searchIcon = await screen.findByTestId(searchTestId);
    userEvent.click(searchIcon);

    const firstLetterRadio = await screen.findByTestId('first-letter-search-radio');
    const searchInput = await screen.findByTestId(searchInputID);
    const btnSearch = await screen.findByTestId(buttonSearchID);

    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'y');
    userEvent.click(btnSearch);

    await waitFor(() => {
      const GGs = screen.getAllByText(/y/i);
      expect(GGs).toHaveLength(2);
    });
  });
});
