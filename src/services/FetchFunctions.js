export async function fetchMealsByIngredient(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

export async function fetchMealsByName(name) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();
  return data.meals;
}

export async function fetchMealsByFirstLetter(letter) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await response.json();
  return data.drinks;
}

export async function fetchDrinksByIngredient(ingredient) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.drinks;
}

export async function fetchDrinksByName(name) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();
  return data.drinks;
}

export async function fetchDrinksByFirstLetter(letter) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await response.json();
  return data.drinks;
}

export const defaultSearch = async (searchType) => {
  const url = searchType === 'meals'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const recipes = await fetch(url);
  const requestJson = await recipes.json();

  return requestJson;
};

export const getCategories = async (searchType) => {
  const url = searchType === 'meals'
    ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const recipes = await fetch(url);
  const requestJson = await recipes.json();

  return requestJson;
};

export const filterByCategory = async (category, searchType) => {
  const url = searchType === 'meals'
    ? 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
    : 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const recipes = await fetch(`${url}${category}`);
  const requestJson = await recipes.json();

  return requestJson;
};