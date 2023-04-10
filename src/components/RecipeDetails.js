import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { fetchData } from '../services/FetchFunctions';
import { pathContextFinder } from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS } from '../utils/constants';
import '../styles/RecipeDetails.css';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams();
  const context = pathContextFinder(location);
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
          const { idMeal, strMeal, strDrink, strDrinkThumb,
            strMealThumb, strCategory, strInstructions, strYoutube, strAlcoholic,
          } = recipe;
          const strRecipe = strMeal || strDrink;
          const strThumb = strMealThumb || strDrinkThumb;
          const strDescription = strAlcoholic || strCategory;
          const ingredients = Object.entries(recipe)
            .filter((element) => element[0]
              .includes('strIngredient') && element[1] !== ' ' && element[1]);

          const measures = Object.entries(recipe)
            .filter((element) => element[0]
              .includes('strMeasure') && element[1] !== ' ' && element[1]);

          console.log(ingredients);
          return (
            <div key={ index }>
              <img
                data-testid="recipe-photo"
                src={ strThumb }
                alt={ strRecipe }
              />
              <h1 data-testid="recipe-title">{strRecipe}</h1>
              <h2 data-testid="recipe-category">{strDescription}</h2>
              <ul>
                {
                  ingredients.map((ingredient, indexIngredient) => (
                    <li
                      key={ indexIngredient }
                      data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
                    >
                      {ingredient[1]}
                    </li>

                  ))
                }
                {
                  measures.map((measure, indexMeasure) => (
                    <li
                      key={ indexMeasure }
                      data-testid={ `${indexMeasure}-ingredient-name-and-measure` }
                    >
                      {measure[1]}
                    </li>
                  ))
                }
              </ul>
              <p data-testid="instructions">{strInstructions}</p>
              {
                location.pathname === `/meals/${idMeal}` && (
                  <iframe
                    data-testid="video"
                    width="420"
                    height="315"
                    src={ `https://www.youtube.com/embed/${strYoutube}` }
                    title={ strRecipe }
                  />
                )
              }
              <button
                className="startRecipe"
                data-testid="start-recipe-btn"
              >
                Start Recipe
              </button>

            </div>
          );
        })}
    </>
  );
}

export default RecipeDetails;
