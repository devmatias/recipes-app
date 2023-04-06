import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  fetchMealsByFirstLetter,
  fetchMealsByIngredient,
  fetchMealsByName,
  fetchDrinksByFirstLetter,
  fetchDrinksByName,
  fetchDrinksByIngredient,
} from '../services/FetchFunctions';
import { handleEmptyListAlert } from '../helpers/ErrorMessage';

function SearchBar() {
  const location = useLocation();
  const history = useHistory();

  const {
    setRadio,
    radio,
    searchValue,
    setMeals,
    drinks,
    setDrinks,
    meals,
  } = useContext(AppContext);
  console.log(location.pathname);

  const requestMeals = async () => {
    switch (radio) {
    case 'ingredient':
      {
        const mealsByIngredient = await fetchMealsByIngredient(searchValue);
        setMeals(mealsByIngredient);
        handleEmptyListAlert(mealsByIngredient);

        if (mealsByIngredient && mealsByIngredient.length === 1) {
          const dataId = mealsByIngredient[0];
          history.push(`/meals/${dataId.idMeal}`);
        }
      }
      break;
    case 'first-letter':
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const mealsByFirstLetter = await fetchMealsByFirstLetter(searchValue);
        setMeals(mealsByFirstLetter);
        handleEmptyListAlert(mealsByFirstLetter);

        if (mealsByFirstLetter && mealsByFirstLetter.length === 1) {
          const dataId = mealsByFirstLetter[0];
          history.push(`/meals/${dataId.idMeal}`);
        }
      }
      break;
    case 'name':
      {
        const mealsByName = await fetchMealsByName(searchValue);
        setMeals(mealsByName);
        handleEmptyListAlert(mealsByName);

        if (mealsByName && mealsByName.length === 1) {
          const dataId = mealsByName[0];
          history.push(`/meals/${dataId.idMeal}`);
        }
      }
      break;
    default:
      break;
    }
  };

  const requestDrinks = async () => {
    switch (radio) {
    case 'ingredient':
      {
        const drinksByIngredient = await fetchDrinksByIngredient(searchValue);
        setDrinks(drinksByIngredient);
        handleEmptyListAlert(drinksByIngredient);

        if (drinksByIngredient && drinksByIngredient.length === 1) {
          const dataId = drinksByIngredient[0];
          history.push(`/drinks/${dataId.idDrink}`);
        }
      }
      break;
    case 'first-letter':
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const drinksByFirstLetter = await fetchDrinksByFirstLetter(searchValue);
        setDrinks(drinksByFirstLetter);
        handleEmptyListAlert(drinksByFirstLetter);

        if (drinksByFirstLetter && drinksByFirstLetter.length === 1) {
          const dataId = drinksByFirstLetter[0];
          history.push(`/drinks/${dataId.idDrink}`);
        }
      }
      break;
    case 'name':
      {
        const drinksByName = await fetchDrinksByName(searchValue);
        setDrinks(drinksByName);
        handleEmptyListAlert(drinksByName);

        if (drinksByName && drinksByName.length === 1) {
          const dataId = drinksByName[0];
          history.push(`/drinks/${dataId.idDrink}`);
        }
      }
      break;
    default:
      break;
    }
  };

  const handleClick = async () => {
    if (location.pathname === '/meals') {
      await requestMeals();
    } if (location.pathname === '/drinks') {
      await requestDrinks();
    }
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
