import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };
  return (
    <header>
      <button
        onClick={ () => redirectPage('/profile') }
      >
        <img
          src={ profileIcon }
          alt="profile Icon"
          data-testid="profile-top-btn"
        />
      </button>
      <img
        src={ searchIcon }
        alt="search Icon"
        data-testid="search-top-btn"
      />
    </header>

  );
}

export default Header;
