import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function Profile() {
  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };
  return (
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
      <Footer />
    </header>
  );
}

export default Profile;
