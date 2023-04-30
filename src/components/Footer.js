import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';
import { FooterButton, FooterTag } from '../styles/styledFooter';

function Footer() {
  const history = useHistory();
  const location = useLocation();

  const redirectPage = (path) => {
    history.push(path);
  };

  return (
    <FooterTag
      data-testid="footer"
    >
      <FooterButton
        onClick={ () => redirectPage('/meals') }
        path={ location.pathname.includes(('meals')) }
      >
        <img
          src={ mealIcon }
          alt="meal-icon"
          data-testid="meals-bottom-btn"
        />
      </FooterButton>
      <FooterButton
        onClick={ () => redirectPage('/drinks') }
        path={ location.pathname.includes(('drinks')) }
      >
        <img
          src={ drinkIcon }
          alt="drink-icon"
          data-testid="drinks-bottom-btn"
        />
      </FooterButton>
    </FooterTag>
  );
}

export default Footer;
