import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { pathContextFinder } from '../utils/pathFinder';
import { HeaderButton,
  HeaderTag,
  SearchInput,
  HeaderSection,
} from '../styles/styledHeader';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const [isSearching, setIsSearching] = useState(false);
  const context = pathContextFinder(location);

  const { setSearchValue } = useContext(context);

  const redirectPage = (path) => {
    history.push(path);
  };
  const toggleSearching = () => (isSearching
    ? setIsSearching(false) : setIsSearching(true));
  return (
    <HeaderTag>
      <HeaderSection>
        <HeaderButton
          onClick={ () => redirectPage('/profile') }
        >
          <img
            src={ profileIcon }
            alt="profile Icon"
            data-testid="profile-top-btn"
          />
        </HeaderButton>
        <HeaderButton
          onClick={ toggleSearching }
          bColor={ isSearching && '#79ADDC' }
        >
          <img
            src={ searchIcon }
            alt="search Icon"
            data-testid="search-top-btn"
          />
        </HeaderButton>
        {
          isSearching
        && (
          <SearchInput
            type="text"
            data-testid="search-input"
            onChange={ (e) => setSearchValue(e.target.value) }
          />

        )
        }
      </HeaderSection>
      <SearchBar />
    </HeaderTag>

  );
}

export default Header;
