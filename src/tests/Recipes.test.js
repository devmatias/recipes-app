import React from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { mockCategory, mockMeal } from './mocks/mockExamples';
import { MEALS_CATEGORY, MEALS_NAME_URL } from '../utils/constants';
import App from '../App';
import AppProvider from '../provider/AppProvider';

describe('Testando o componente <Recipes />', () => {
  let fetchMock;
  beforeEach(() => {
    fetchMock = jest.spyOn(window, 'fetch');
    fetchMock.mockResolvedValueOnce({
      json: async () => mockCategory,
    }).mockResolvedValueOnce({
      json: async () => mockMeal,
    });
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>);

    act(() => {
      history.push('/meals');
    });
  });
  it('Teste para ver esta sendo feito fetch das meals e categorias', async () => {
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenCalledWith(MEALS_NAME_URL);
    expect(fetchMock).toHaveBeenCalledWith(MEALS_CATEGORY);
  });
  it('Teste para ver se os elementos estão na página', async () => {
    const categoryButton = screen.getByTestId('Beef-category-filter');
    const cardName = screen.getByTestId('0-card-name');
    const cardImage = screen.getByTestId('0-card-img');

    expect(categoryButton).toBeInTheDocument();
    expect(cardName).toBeVisible();
    expect(cardImage).toBeVisible();
  });
});
