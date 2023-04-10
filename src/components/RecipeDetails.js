import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { fetchData } from '../services/FetchFunctions';
import pathFinder from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS } from '../utils/constants';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams();
  const context = pathFinder(location);
  const {
    setDataRecipe,
    dataRecipe,
  } = useContext(context);

  useEffect(() => {
    const requestRecipe = async (params) => {
      if (location.pathname.includes('/meals')) {
        const detailsData = await fetchData(DETAILS_MEALS, params);
        // console.log(detailsData);
        setDataRecipe(detailsData);
        return detailsData;
      }
      if (location.pathname.includes('/drinks')) {
        const detailsData = await fetchData(DETAILS_DRINKS, params);
        setDataRecipe(detailsData);
        return detailsData;
      }
    };
    requestRecipe(id);
  }, [id, location, setDataRecipe]);

  return (
    <>
      <h1> Recipe Details</h1>
      { dataRecipe
        && dataRecipe.map((recipe, index) => {
          const { strMeal, strDrink, strDrinkThumb,
            strMealThumb,
            // strIngredient2, strIngredient3,
            // strIngredient4, strIngredient5,
            // strIngredient6, strIngredient7,
            // strIngredient8, strIngredient9,
            // strIngredient10, strIngredient11,
            // strIngredient12, strIngredient13,
            // strIngredient14, strIngredient15,
            // strIngredient16, strIngredient17,
            // strIngredient18, strIngredient19,
            // strIngredient20, strInstructions, strYoutube,
          } = recipe;
          const strRecipe = strMeal || strDrink;
          const strThumb = strMealThumb || strDrinkThumb;
          // const id = idMeal || idDrink;
          return (
            <div key={ index }>
              <img
                data-testid="recipe-photo"
                src={ strThumb }
                alt={ strRecipe }
              />
            </div>
          );
        })}
    </>
  );
}

export default RecipeDetails;
