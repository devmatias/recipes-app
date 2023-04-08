import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NUMBER_12 } from '../utils/constants';
import pathFinder from '../utils/pathFinder';

function Recipes() {
  const location = useLocation();
  const context = pathFinder(location);

  const {
    recipes,
    isLoading,
  } = useContext(context);

  if (isLoading) {
    return <div>Carregando dados...</div>;
  }
  return (
    <div>
      {
        !isLoading && recipes.map((recipe, index) => {
          const { strMeal, strDrink, strDrinkThumb, strMealThumb } = recipe;
          const strRecipe = strMeal || strDrink;
          const strThumb = strMealThumb || strDrinkThumb;
          return index < NUMBER_12
           && (
             <div
               key={ index }
               data-testid={ `${index}-recipe-card` }
             >
               <p
                 data-testid={ `${index}-card-name` }
               >
                 {strRecipe}
               </p>
               <img
                 src={ strThumb }
                 alt={ strRecipe }
                 data-testid={ `${index}-card-img` }
               />
             </div>
           );
        })

      }
    </div>
  );
}

export default Recipes;
