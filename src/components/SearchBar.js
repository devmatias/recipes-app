import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { requestRecipes } from '../utils/requestRecipes';

function SearchBar() {
  const location = useLocation();
  const history = useHistory();

  const {
    setRadio,
    radio,
    searchValue,
    setMeals,
    meals,
    setDrinks,
    drinks,
  } = useContext(AppContext);
  console.log(location.pathname);

  const requestData = async () => {
    const recipeData = requestRecipes(radio, location.pathname, searchValue);
    let idRecipe = '';
    if (location.pathname === '/meals') {
      setMeals(recipeData);
      idRecipe = meals[0].idMeal;
    } else {
      setDrinks(recipeData);
      idRecipe = drinks[0].idDrink;
    }
    if (recipeData.length === 1) {
      history.push(`${location.pathname}/${idRecipe}`);
    }
  };

  const handleClick = async () => {
    await requestData();
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
