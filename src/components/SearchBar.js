import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { setRadio } = useContext(AppContext);
  const onChangeRadio = ({ target: { value } }) => {
    setRadio(value);
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
              onChange={ onChangeRadio }
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              value="name"
              name="radio"
              onChange={ onChangeRadio }
            />
          </label>
          <label htmlFor="firstLetter">
            First Letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              value="first-letter"
              name="radio"
              onChange={ onChangeRadio }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </header>
    </form>
  );
}
export default SearchBar;
