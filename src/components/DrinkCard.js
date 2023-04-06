import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function DrinkCards() {
  const { drinks } = useContext(AppContext);
  const number = 12;
  return (
    <div>
      { drinks
      && drinks.slice(0, number).map((drink, index) => (
        <section data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            data
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <h4 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h4>
        </section>
        // Renderiza as 12 primeiras receitas aqui
      ))}
    </div>
  );
}

export default DrinkCards;
