import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { requestRecipes } from '../utils/requestRecipes';
import { handleEmptyListAlert } from '../helpers/ErrorMessage';
import pathFinder from '../utils/pathFinder';

function SearchBar() {
  const location = useLocation();
  const history = useHistory();
  const context = pathFinder(location);

  const {
    setRadio,
    radio,
    searchValue,
    setRecipes,
    recipes,
  } = useContext(context);

  const requestData = async () => {
    try {
      const recipeData = await requestRecipes(radio, location.pathname, searchValue);
      let idRecipe = '';
      if (location.pathname === '/meals') {
        setRecipes(recipeData);
        idRecipe = recipeData[0].idMeal;
      } else {
        idRecipe = recipeData[0].idDrink;
      }
      if (recipeData.length === 1) {
        history.push(`${location.pathname}/${idRecipe}`);
      }
      setRecipes(recipeData);
    } catch (error) {
      const currentRecipes = [...recipes];
      handleEmptyListAlert(error);
      setRecipes(currentRecipes);
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
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              value="ingredient"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
            Ingredient
          </label>
          <label htmlFor="name">
            <input
              type="radio"
              data-testid="name-search-radio"
              value="name"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
            Name
          </label>
          <label htmlFor="firstLetter">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              value="first-letter"
              name="radio"
              onChange={ (e) => setRadio(e.target.value) }
            />
            First Letter
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
