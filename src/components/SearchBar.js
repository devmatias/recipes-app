import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/Context';
import { requestRecipes } from '../utils/requestRecipes';
import { handleEmptyListAlert } from '../helpers/ErrorMessage';

function SearchBar() {
  const location = useLocation();
  const history = useHistory();

  const {
    setRadio,
    radio,
    searchValue,
    setMeals,
    setDrinks,
  } = useContext(AppContext);
  console.log(location.pathname);

  const requestData = async () => {
    try {
      const recipeData = await requestRecipes(radio, location.pathname, searchValue);
      let idRecipe = '';
      console.log(recipeData);
      if (location.pathname === '/meals') {
        setMeals(recipeData);
        idRecipe = recipeData[0].idMeal;
      } else {
        setDrinks(recipeData);
        idRecipe = recipeData[0].idDrink;
      }
      if (recipeData.length === 1) {
        history.push(`${location.pathname}/${idRecipe}`);
      }
    } catch (error) {
      handleEmptyListAlert(error);
    }
  };

  const handleClick = async () => {
    if (radio === 'first-letter' && searchValue.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
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
