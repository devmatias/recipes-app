import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import {
  ButtonsSection,
  HeaderButtonProfile,
  HeaderTagProfile,
  ProfileButtons,
} from '../styles/styledProfile';

function Profile() {
  let saveEmail = '';
  if (localStorage.getItem('user')) {
    saveEmail = JSON.parse(localStorage.getItem('user'));
  }

  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };

  const handleClick = () => {
    redirectPage('/');
    localStorage.clear();
  };

  return (
    <>
      <HeaderTagProfile>
        <h1 data-testid="page-title">Profile</h1>
        {
          saveEmail.email && (<p data-testid="profile-email">{saveEmail.email}</p>)
        }
        <HeaderButtonProfile
          onClick={ () => redirectPage('/profile') }
        >
          <img
            src={ profileIcon }
            alt="profile Icon"
            data-testid="profile-top-btn"
          />
        </HeaderButtonProfile>
      </HeaderTagProfile>
      <ButtonsSection>
        <ProfileButtons
          onClick={ () => redirectPage('/done-recipes') }
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </ProfileButtons>
        <ProfileButtons
          onClick={ () => redirectPage('/favorite-recipes') }
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </ProfileButtons>
        <ProfileButtons
          onClick={ () => handleClick() }
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </ProfileButtons>
      </ButtonsSection>
      <Footer />
    </>
  );
}

export default Profile;
