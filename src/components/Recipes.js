import React, { useContext } from 'react';
import { MealsContext } from '../context/Context';
import { NUMBER_12 } from '../utils/constants';

function Recipes() {
  const {
    recipes,
    isLoading,
  } = useContext(MealsContext);
  if (isLoading) {
    return <div>Carregando dados...</div>;
  }
  return (
    <div>
      {
        !isLoading && recipes.map((meal, index) => index < NUMBER_12
           && (
             <div
               key={ meal.idMeal }
               data-testid={ `${index}-recipe-card` }
             >
               <p
                 data-testid={ `${index}-card-name` }
               >
                 {meal.strMeal}
               </p>
               <img
                 src={ meal.strMealThumb }
                 alt={ meal.strMeal }
                 data-testid={ `${index}-card-img` }
               />
             </div>
           ))
      }
    </div>
  );
}

export default Recipes;
