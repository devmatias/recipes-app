import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NUMBER_12, NUMBER_5 } from '../utils/constants';
import {
  pathContextFinder,
  pathURLCategoryFinder,
} from '../utils/pathFinder';
import { fetchData } from '../services/FetchFunctions';
import {
  CardRecipe,
  CategoryButton,
  H3,
  MainRecipes,
  SectionButtons,
  SectionRecipes,
} from '../styles/styledRecipes';

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
  const titleByLocation = location.pathname.slice(1);
  console.log(titleByLocation);

  const handleRedirectDetails = (id) => {
    setIdRecipe(id);
    const type = location.pathname.split('/');
    history.push(`/${type[1]}/${id}`);
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
  console.log(recipes);
  return (
    <MainRecipes>
      <SectionButtons>
        <CategoryButton
          type="button"
          data-testid="All-category-filter"
          onClick={ removeFilters }
        >
          All
        </CategoryButton>
        {
          !isLoading && categories.map(({ strCategory }, index) => {
            const dataTestIdFilters = `${strCategory}-category-filter`;
            return index < NUMBER_5
          && (
            <CategoryButton
              key={ index }
              type="button"
              data-testid={ dataTestIdFilters }
              onClick={ findByCategory }
              value={ strCategory }
              className="filter-btn"
            >
              {strCategory}

            </CategoryButton>
          );
          })
        }
      </SectionButtons>
      <H3 data-testid="page-title">
        Try our
        {' '}
        { titleByLocation }
        {' '}
        available!
      </H3>
      <SectionRecipes>
        {
          !isLoading && recipes.map((recipe, index) => {
            const { strMeal, strDrink, strDrinkThumb,
              strMealThumb, idMeal, idDrink } = recipe;
            const strRecipe = strMeal || strDrink;
            const strThumb = strMealThumb || strDrinkThumb;
            const id = idMeal || idDrink;
            return index < NUMBER_12
           && (
             <CardRecipe
               key={ index }
               data-testid={ `${index}-recipe-card` }
             >
               <button
                 onClick={ () => handleRedirectDetails(id) }
               >
                 <h3
                   data-testid={ `${index}-card-name` }
                 >
                   {strRecipe}
                 </h3>
                 <img
                   src={ strThumb }
                   alt={ strRecipe }
                   data-testid={ `${index}-card-img` }
                   width="200px"
                 />
               </button>
             </CardRecipe>
           );
          })
        }
      </SectionRecipes>
      <div />
    </MainRecipes>

  );
}

export default Recipes;
