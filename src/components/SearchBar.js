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
  const {
    setRadio,
    radio,
    searchValue,
    setMeals,
    meals,
    drinks,
    setDrinks,
  } = useContext(AppContext);
  const location = useLocation();
  console.log(location.pathname);
  const handleClick = async () => {
    if (location.pathname === '/meals') {
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
    } if (location.pathname === '/drinks') {
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
