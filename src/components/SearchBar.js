import React from 'react';
function SearchBar() {
  return (
    <form>
      <header>
        <input
          type="text"
          name="Pesquisa"
          data-testid="search-input"
          placeholder="Pesquisa"
        />
        <div>
          <label htmlFor="ingredient">
            Ingredient
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="search"
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              name="search"
            />
          </label>
          <label htmlFor="firstLetter">
            First Letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="search"
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </header>
    </form>
  );
}
export default SearchBar;