import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function Profile() {
  const saveEmail = JSON.parse(localStorage.getItem('user'));
  console.log(saveEmail);
  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };
  return (
    <>
      <header>
        <h1 data-testid="page-title">Profile</h1>
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
      <p data-testid="profile-email">{saveEmail.email}</p>
      <button
        onClick={ () => redirectPage('/done-recipes') }
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
      <Footer />
    </>
  );
}

export default Profile;
