import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function MealCard() {
  const { meals } = useContext(AppContext);
  const number = 12;
  return (
    <div>
      {meals.slice(0, number).map((meal, index) => (
        <section data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            data
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h4 data-testid={ `${index}-card-name` }>{ meal.strMeal }</h4>
        </section>
        // Renderiza as 12 primeiras receitas aqui
      ))}
    </div>
  );
}

export default MealCard;
