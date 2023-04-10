import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NUMBER_12 } from '../utils/constants';
import pathFinder from '../utils/pathFinder';
import { requestCategorys } from '../utils/requestRecipes';

function Recipes() {
  const location = useLocation();
  const history = useHistory();
  const context = pathFinder(location);

  const {
    recipes,
    isLoading,
    setIdRecipe,
    category,
    setCategory,
  } = useContext(context);

  useEffect(() => {
    const getCategory = async () => {
      if (isLoading) {
        return <div>Carregando dados...</div>;
      }
      const request = await requestCategorys(location.pathname);
      setCategory(request);
    };
    getCategory();
  }, [location, setCategory, isLoading]);

  const handleRedirectDetails = (id) => {
    history.push(`${location.pathname}/${id}`);
    setIdRecipe(id);
  };

  return (
    <div>
      {
        !isLoading && category.map(({ strCategory }, index) => {
          const dataTestIdFilters = `${strCategory}-category-filter`;
          return (
            <button
              key={ index }
              type="button"
              data-testid={ dataTestIdFilters }
            >
              {strCategory}

            </button>
          );
        })
      }
      {
        !isLoading && recipes.map((recipe, index) => {
          const { strMeal, strDrink, strDrinkThumb,
            strMealThumb, idMeal, idDrink } = recipe;
          const strRecipe = strMeal || strDrink;
          const strThumb = strMealThumb || strDrinkThumb;
          const id = idMeal || idDrink;
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
               <button
                 onClick={ () => handleRedirectDetails(id) }
               >
                 <img
                   src={ strThumb }
                   alt={ strRecipe }
                   data-testid={ `${index}-card-img` }
                 />
               </button>
             </div>
           );
        })
      }
      <div />
      <button>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</button>
    </div>

  );
}

export default Recipes;
