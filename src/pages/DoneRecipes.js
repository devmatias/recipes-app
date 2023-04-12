import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import DoneRecipesCard from '../components/DoneRecipesCard';

function DoneRecipes() {
  const arr = JSON.parse(localStorage.getItem('doneRecipes'));
  const [recipes, setRecipes] = useState(arr
    && [...arr]);

  const handleRecips = (type = '') => {
    if (arr && arr.length > 0) {
      const filteredArrayDoneRecipes = arr
        .filter((recipe) => recipe.type.startsWith(type));

      setRecipes([...filteredArrayDoneRecipes]);
    }
  };
  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };
  return (
    <header>
      <h1 data-testid="page-title">Done Recipes</h1>
      <button
        onClick={ () => redirectPage('/profile') }
      >
        <img
          src={ profileIcon }
          alt="profile Icon"
          data-testid="profile-top-btn"
        />
      </button>
      <button
        onClick={ () => handleRecips() }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        data-testid="filter-by-meal-btn"
        onClick={ () => handleRecips('meal') }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => handleRecips('drink') }
      >
        Drinks
      </button>
      { (recipes && recipes.length > 0)
        && recipes.map((recipe, index) => (
          <DoneRecipesCard
            key={ index }
            index={ index }
            image={ recipe.image }
            name={ recipe.name }
            category={ `${recipe.nationality} - ${recipe.category} -
            ${recipe.alcoholicOrNot}` }
            date={ recipe.doneDate }
            tags={ recipe.tags }
            type={ recipe.type }
            id={ recipe.id }
          />
        ))}
    </header>
  );
}

export default DoneRecipes;
