import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NUMBER_12, NUMBER_5 } from '../utils/constants';
import {
  pathContextFinder,
  pathURLCategoryFinder,
} from '../utils/pathFinder';
import { fetchData } from '../services/FetchFunctions';

function Recipes() {
  const location = useLocation();
  const history = useHistory();
  const [filter, setFilter] = useState([]);
  const context = pathContextFinder(location);

  const {
    recipes,
    setRecipes,
    isLoading,
    setIdRecipe,
    categories,
    allRecipes,
  } = useContext(context);

  if (isLoading) {
    return <div>Carregando dados...</div>;
  }

  const handleRedirectDetails = (id) => {
    history.push(`${location.pathname}/${id}`);
    setIdRecipe(id);
  };

  const findByCategory = async ({ target: { value } }) => {
    if (filter.length > 0 && filter.includes(value)) {
      setFilter([]);
      setRecipes(allRecipes);
    } else {
      const dataQuery = await fetchData(pathURLCategoryFinder(location), value);
      const recipePath = dataQuery.meals || dataQuery.drinks;
      setRecipes(recipePath);
      setFilter([value]);
    }
  };

  const removeFilters = async () => {
    setRecipes(allRecipes);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ removeFilters }
      >
        All
      </button>
      {
        !isLoading && categories.map(({ strCategory }, index) => {
          const dataTestIdFilters = `${strCategory}-category-filter`;
          return index < NUMBER_5
          && (
            <button
              key={ index }
              type="button"
              data-testid={ dataTestIdFilters }
              onClick={ findByCategory }
              value={ strCategory }
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
    </div>

  );
}

export default Recipes;
