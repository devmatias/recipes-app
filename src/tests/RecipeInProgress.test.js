import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithRouter } from './renderWith';
import App from '../App';
import AllProviders from '../AllProviders';

describe('Testando o componente <Recipes />', () => {
  it('Teste para ver se os elementos estão na página', async () => {
    renderWithRouter(
      <AllProviders><App /></AllProviders>,
      {
        initialEntries: ['/meals/52977/in-progress'],
      },
    );
    const categoryList = await screen.findByRole('list');
    // const cardImage = await screen.findByTestId(DATATEST_0_CARDIMG);
    // const cardName = screen.getByTestId('0-card-name');
    expect(categoryList).toBeInTheDocument();
    // expect(cardName).toBeVisible();
    // expect(cardImage).toBeVisible();
  });

  // it('Teste para se ao selecionar categoria me entrega itens respectivos', async () => {
  //   renderWithRouter(
  //     <AllProviders><App /></AllProviders>,
  //     {
  //       initialEntries: ['/meals'],
  //     },
  //   );
  //   const categoryButton = await screen.findByTestId(DATATEST_BEEF);
  //   const cardImage = await screen.findByTestId(DATATEST_0_CARDIMG);

  //   userEvent.click(categoryButton);

  //   const cardNameBeef = await screen.findAllByText(/beef and mustard pie/i);

  //   expect(cardNameBeef[0].innerHTML).toBe(BEEF_MUSTARD);
  //   expect(cardImage.src).toBe('https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg');

  //   userEvent.click(categoryButton);

  //   const cardNameCorba = await screen.findByText(/corba/i);

  //   expect(cardNameCorba.innerHTML).toBe('Corba');
  //   expect(cardImage.src).toBe('https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
  // });
  // it('Teste se redireciona para RecipeDetails ao clique do card', async () => {
  //   const { history } = renderWithRouter(
  //     <AllProviders><App /></AllProviders>,
  //     {
  //       initialEntries: ['/meals'],
  //     },
  //   );
  //   const cardImage = await screen.findByTestId('0-card-img');

  //   userEvent.click(cardImage);

  //   expect(history.location.pathname).toBe('/meals/52977');
  // });
  // it('Teste se o botão All de resetar filtros funciona', async () => {
  //   renderWithRouter(
  //     <AllProviders><App /></AllProviders>,
  //     {
  //       initialEntries: ['/meals'],
  //     },
  //   );
  //   const categoryButton = await screen.findByTestId(DATATEST_BEEF);

  //   userEvent.click(categoryButton);

  //   const cardNameBeef = await screen.findAllByText(BEEF_MUSTARD);

  //   expect(cardNameBeef[0].innerHTML).toBe(BEEF_MUSTARD);

  //   const allCategoryButton = await screen.findByTestId('All-category-filter');
  //   userEvent.click(allCategoryButton);

  //   expect(cardNameBeef[0].innerHTML).not.toBe(BEEF_MUSTARD);
  // });
  // it('Teste para se ao selecionar categoria me entrega itens respectivos', async () => {
  //   renderWithRouter(
  //     <AllProviders><App /></AllProviders>,
  //     {
  //       initialEntries: ['/drinks'],
  //     },
  //   );
  //   const categoryButton = await screen.findByTestId('Ordinary Drink-category-filter');
  //   const cardImage = await screen.findByTestId(DATATEST_0_CARDIMG);

  //   userEvent.click(categoryButton);

  //   const cardNameGG = await screen.findByText('3-Mile Long Island Iced Tea');

  //   expect(cardNameGG.innerHTML).toBe('3-Mile Long Island Iced Tea');
  //   expect(cardImage.src).toBe('https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg');
  // });
});
