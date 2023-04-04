import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function Profile() {
  return (
    <header>
      <h1 data-testid="page-title">Profile</h1>
      <img
        src={ profileIcon }
        alt="profile Icon"
        data-testid="profile-top-btn"
      />
      <Footer />
    </header>
  );
}

export default Profile;
