import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import pathFinder from '../utils/pathFinder';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const [isSearching, setIsSearching] = useState(false);
  const context = pathFinder(location);

  const { setSearchValue } = useContext(context);

  const redirectPage = (path) => {
    history.push(path);
  };
  const toggleSearching = () => (isSearching
    ? setIsSearching(false) : setIsSearching(true));
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
      <button
        onClick={ toggleSearching }
      >
        <img
          src={ searchIcon }
          alt="search Icon"
          data-testid="search-top-btn"
        />
      </button>
      {
        isSearching
        && (
          <input
            type="text"
            data-testid="search-input"
            onChange={ (e) => setSearchValue(e.target.value) }
          />

        )
      }
      <SearchBar />
    </header>

  );
}

export default Header;
