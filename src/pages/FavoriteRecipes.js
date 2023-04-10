import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

function FavoriteRecipes() {
  let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [arrFavorites, setFavorites] = useState(favorites);
  const filterAll = () => {
    setFavorites(favorites);
  };

  const handleFavorite = (id) => {
    favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavorite = favorites.filter((recipe) => recipe.id !== id);
    setFavorites([...newFavorite]);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
  };

  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };
  return (
    <header>
      <h1 data-testid="page-title">Favorite Recipes</h1>
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
        onClick={ () => filterAll() }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        data-testid="filter-by-meal-btn"
        onClick={ () => filterAll() }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => filterAll() }
      >
        Drinks
      </button>
      { (arrFavorites && arrFavorites.length > 0)
        && arrFavorites.map((recipe, index) => (
          <FavoriteRecipeCard
            key={ index }
            index={ index }
            image={ recipe.image }
            name={ recipe.name }
            categoria={ `${recipe.nationality} - ${recipe.category} -
            ${recipe.alcoholicOrNot}` }
            date={ recipe.doneDate }
            tags={ recipe.tags }
            type={ recipe.type }
            id={ recipe.id }
            handleFavorite={ handleFavorite }
          />
        ))}
    </header>
  );
}

export default FavoriteRecipes;
