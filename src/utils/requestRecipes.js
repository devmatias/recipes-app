import { MEALS_INGREDIENT_URL, MEALS_LETTER_URL, MEALS_NAME_URL } from './constants';

const pathMealsUrl = {
  ingredient: MEALS_INGREDIENT_URL,
  firstLetter: MEALS_LETTER_URL,
  name: MEALS_NAME_URL,
};

const pathDrinksUrl = {
  ingredient: MEALS_INGREDIENT_URL,
  firstLetter: MEALS_LETTER_URL,
  name: MEALS_NAME_URL,
};

export const requestRecipes = async (radio, recipe, searchValue) => {
  if (radio === 'first-letter') radio = 'firstLetter';
  if (radio === 'first-letter' && searchValue.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
  if (recipe === '/meals') {
    const recipes = await fetchData(pathMealsUrl[radio], searchValue);
    handleEmptyListAlert(recipes.meals);
    return recipes;
  }
  const recipes = await fetchData(pathDrinksUrl[radio], searchValue);
  handleEmptyListAlert(recipes.drinks);
  return recipes;
};
