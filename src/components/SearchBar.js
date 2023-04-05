import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  fetchMealsByFirstLetter,
  fetchMealsByIngredient,
  fetchMealsByName,
  fetchDrinksByFirstLetter,
  fetchDrinksByName,
  fetchDrinksByIngredient,
} from '../services/FetchFunctions';

function SearchBar() {
  const location = useLocation();

  const {
    setRadio,
    radio,
    searchValue,
    setMeals,

    drinks,
    setDrinks,
  } = useContext(AppContext);
  console.log(location.pathname);

  const requestMeals = async () => {
    switch (radio) {
    case 'ingredient':
      { const mealsByIngredient = await fetchMealsByIngredient(searchValue);
        setMeals(mealsByIngredient); }
      break;
    case 'first-letter':
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const mealsByFirstLetter = await fetchMealsByFirstLetter(searchValue);
        setMeals(mealsByFirstLetter);
      }
      break;
    case 'name':
      { const mealsByName = await fetchMealsByName(searchValue);
        setMeals(mealsByName); }
      break;
    default:
      break;
    }
  };

  const requestDrinks = async () => {
    switch (radio) {
    case 'ingredient':
      { const drinksByIngredient = await fetchDrinksByIngredient(searchValue);
        setDrinks(drinksByIngredient); }
      break;
    case 'first-letter':
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const drinksByFirstLetter = await fetchDrinksByFirstLetter(searchValue);
        setDrinks(drinksByFirstLetter);
      }
      break;
    case 'name':
      { const drinksByName = await fetchDrinksByName(searchValue);
        setDrinks(drinksByName); }
      break;
    default:
      break;
    }
  };

  const handleClick = async () => {
    if (location.pathname === '/meals') {
      requestMeals();
    } if (location.pathname === '/drinks') {
      requestDrinks();
      // redirectPage();
    }
    console.log(drinks);
  };

  return (
    <form>
      <header>

        <div>
          <label htmlFor="ingredient">
            Ingredient
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              value="ingredient"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              value="name"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
          </label>
          <label htmlFor="firstLetter">
            First Letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              value="first-letter"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Search
        </button>
      </header>
    </form>
  );
}
export default SearchBar;
