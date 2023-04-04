import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <img
        src={ profileIcon }
        alt="profile Icon"
        data-testid="profile-top-btn"
      />
      <img
        src={ searchIcon }
        alt="search Icon"
        data-testid="search-top-btn"
      />
    </header>

  );
}

export default Header;
