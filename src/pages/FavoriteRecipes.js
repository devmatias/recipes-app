import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function FavoriteRecipes() {
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
    </header>
  );
}

export default FavoriteRecipes;
