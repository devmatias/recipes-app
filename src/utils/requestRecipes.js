import { fetchData } from '../services/FetchFunctions';
import {
  DRINKS_INGREDIENT_URL,
  DRINKS_LETTER_URL,
  DRINKS_NAME_URL,
  MEALS_INGREDIENT_URL,
  MEALS_LETTER_URL,
  MEALS_NAME_URL,
} from './constants';

const pathMealsUrl = {
  ingredient: MEALS_INGREDIENT_URL,
  firstLetter: MEALS_LETTER_URL,
  name: MEALS_NAME_URL,
};

const pathDrinksUrl = {
  ingredient: DRINKS_INGREDIENT_URL,
  firstLetter: DRINKS_LETTER_URL,
  name: DRINKS_NAME_URL,
};

export const requestRecipes = async (radio, recipe, searchValue) => {
  if (radio === 'first-letter') radio = 'firstLetter';
  if (recipe === '/meals') {
    const recipes = await fetchData(pathMealsUrl[radio], searchValue);
    return recipes.meals;
  }
  const recipes = await fetchData(pathDrinksUrl[radio], searchValue);
  return recipes.drinks;
};
