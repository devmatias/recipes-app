import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NUMBER_12 } from '../utils/constants';
import pathFinder from '../utils/pathFinder';

function Recipes() {
  const location = useLocation();
  const history = useHistory();
  const context = pathFinder(location);

  const {
    recipes,
    isLoading,
  } = useContext(context);

  if (isLoading) {
    return <div>Carregando dados...</div>;
  }
  const handleRedirectDetails = (id) => history.push(`/${location.pathname}/${id}`);
  return (
    <div>
      {
        !isLoading && recipes.map((recipe, index) => {
          const { strMeal, strDrink, strDrinkThumb,
            strMealThumb, idMeal, idDrink } = recipe;
          const strRecipe = strMeal || strDrink;
          const strThumb = strMealThumb || strDrinkThumb;
          const id = idMeal || idDrink;
          return index < NUMBER_12
           && (
             <button
               key={ index }
               data-testid={ `${index}-recipe-card` }
               onClick={ handleRedirectDetails(id) }
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
             </button>
           );
        })

      }
    </div>
  );
}

export default Recipes;
