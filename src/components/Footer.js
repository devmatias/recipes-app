import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const history = useHistory();

  const redirectPage = (path) => {
    history.push(path);
  };

  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <button
        onClick={ () => redirectPage('/drinks') }
      >
        <img
          src={ drinkIcon }
          alt="drink-icon"
          data-testid="drinks-bottom-btn"
        />
      </button>
      <button
        onClick={ () => redirectPage('/meals') }
      >
        <img
          src={ mealIcon }
          alt="meal-icon"
          data-testid="meals-bottom-btn"
        />
      </button>
    </footer>
  );
}

export default Footer;
