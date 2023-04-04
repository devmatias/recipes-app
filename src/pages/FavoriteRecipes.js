import profileIcon from '../images/profileIcon.svg';

function FavoriteRecipes() {
  return (
    <header>
      <h1 data-testid="page-title">Favorite Recipes</h1>
      <img
        src={ profileIcon }
        alt="profile Icon"
        data-testid="profile-top-btn"
      />
    </header>
  );
}

export default FavoriteRecipes;
