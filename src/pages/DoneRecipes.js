import profileIcon from '../images/profileIcon.svg';

function DoneRecipes() {
  return (
    <header>
      <h1 data-testid="page-title">Done Recipes</h1>
      <img
        src={ profileIcon }
        alt="profile Icon"
        data-testid="profile-top-btn"
      />
    </header>
  );
}

export default DoneRecipes;
