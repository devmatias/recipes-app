import { fetchData } from '../services/FetchFunctions';
import {
  DRINKS_INGREDIENT_URL,
  DRINKS_LETTER_URL,
  DRINKS_NAME_URL,
  MEALS_INGREDIENT_URL,
  MEALS_LETTER_URL,
  MEALS_NAME_URL,
  MEALS_CATEGORY,
  DRINKS_CATEGORY,
  NUMBER_5,
} from './constants';

const pathMealsUrl = {
  ingredient: MEALS_INGREDIENT_URL,
  firstLetter: MEALS_LETTER_URL,
  name: MEALS_NAME_URL,
  category: MEALS_CATEGORY,
};

const pathDrinksUrl = {
  ingredient: DRINKS_INGREDIENT_URL,
  firstLetter: DRINKS_LETTER_URL,
  name: DRINKS_NAME_URL,
  category: DRINKS_CATEGORY,
};

console.log(pathMealsUrl.category);

export const requestRecipes = async (radio, recipe, searchValue) => {
  if (radio === 'first-letter') radio = 'firstLetter';
  if (recipe === '/meals') {
    const recipes = await fetchData(pathMealsUrl[radio], searchValue);
    return recipes.meals;
  }
  const recipes = await fetchData(pathDrinksUrl[radio], searchValue);
  return recipes.drinks;
};

export const requestCategorys = async (location) => {
  if (location === '/meals') {
    const recipes = await fetchData(pathMealsUrl.category);
    console.log(recipes.meals.slice(0, NUMBER_5));
    return recipes.meals.slice(0, NUMBER_5);
  }
  const recipes = await fetchData(pathDrinksUrl.category);
  console.log(recipes.drinks.slice(0, NUMBER_5));
  return recipes.drinks.slice(0, NUMBER_5);
};
