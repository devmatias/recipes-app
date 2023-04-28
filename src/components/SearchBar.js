import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { requestRecipes } from '../utils/requestRecipes';
import { handleEmptyListAlert } from '../helpers/ErrorMessage';
import { pathContextFinder } from '../utils/pathFinder';
import { HeaderSection, RadioInput, SearchButton } from '../styles/styledHeader';

function SearchBar() {
  const location = useLocation();
  const history = useHistory();
  const context = pathContextFinder(location);

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
    <HeaderSection>
      <RadioInput>
        <label htmlFor="ingredient">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            value="ingredient"
            id="ingredient"
            name="radio"
            onChange={ (e) => setRadio(e.target.value) }
          />
          <div>
            <span />
          </div>
          <span>Ingredient</span>
        </label>
      </RadioInput>
      <RadioInput>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            value="name"
            id="name"
            name="radio"
            onChange={ (e) => setRadio(e.target.value) }
          />
          <div>
            <span />
          </div>
          <span>Name</span>
        </label>
      </RadioInput>
      <RadioInput>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            value="first-letter"
            id="firstLetter"
            name="radio"
            onChange={ (e) => setRadio(e.target.value) }
          />
          <div>
            <span />
          </div>
          <span>First Letter</span>
        </label>
      </RadioInput>

      <SearchButton
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </SearchButton>
    </HeaderSection>
  );
}
export default SearchBar;
