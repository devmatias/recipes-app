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
        console.log(detailsData);
        setDataRecipe(detailsData.meals);
        return detailsData;
      }
      if (location.pathname.includes('/drinks')) {
        const detailsData = await fetchData(DETAILS_DRINKS, params);
        setDataRecipe(detailsData.drinks);
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
          const { idMeal, idDrink, strMeal, strDrink, strDrinkThumb,
            strMealThumb, strCategory, strIngredient1,
            strIngredient2, strIngredient3,
            strIngredient4, strIngredient5,
            strIngredient6, strIngredient7,
            strIngredient8, strIngredient9,
            strIngredient10, strIngredient11,
            strIngredient12, strIngredient13,
            strIngredient14, strIngredient15,
            strIngredient16, strIngredient17,
            strIngredient18, strIngredient19,
            strIngredient20, strInstructions, strYoutube,
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
              <h1 data-testid="recipe-title">{strRecipe}</h1>
              <h2 data-testid="recipe-category">{strCategory}</h2>
              <ul>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient1}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient2}
                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient3}
                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient4}
                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient5}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient6}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient7}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient8}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient9}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient10}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient11}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient12}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient13}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient14}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient15}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient16}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient17}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient18}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient19}

                </li>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {strIngredient20}

                </li>
              </ul>
              <p data-testid="instructions">{strInstructions}</p>
              <iframe
                data-testid="video"
                width="420"
                height="315"
                src={ strYoutube }
                title={ strRecipe }
              />
            </div>
          );
        })}
    </>
  );
}

export default RecipeDetails;
