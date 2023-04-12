import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { fetchData } from '../services/FetchFunctions';
import { pathContextFinder } from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS,
  MEALS_NAME_URL, DRINKS_NAME_URL } from '../utils/constants';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/RecipeDetails.css';

const copy = require('clipboard-copy');

function RecipeDetails() {
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  const context = pathContextFinder(location);
  const {
    setDataRecipe,
    dataRecipe,
    setRecommendationMeals,
    setRecommendationDrinks,
  } = useContext(context);
  const [clickShare, setClickShare] = useState(false);

  useEffect(() => {
    const requestRecipe = async (params) => {
      if (location.pathname.includes('/meals')) {
        const detailsData = await fetchData(DETAILS_MEALS, params);
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

    const recommendationRecipes = async () => {
      if (location.pathname.includes('/drinks')) {
        const recommendationData = await fetchData(MEALS_NAME_URL);
        setRecommendationMeals(recommendationData);
        console.log(recommendationData);
      }
      if (location.pathname.includes('/meals')) {
        const recommendationData = await fetchData(DRINKS_NAME_URL);
        setRecommendationDrinks(recommendationData);
        console.log(recommendationData);
      }
    };
    recommendationRecipes();
  }, [id, location, setDataRecipe, setRecommendationDrinks, setRecommendationMeals]);

  const handleStartButton = () => {
    history.push(`${location.pathname}/in-progress`);
  };

  const handleShareButton = () => {
    copy(`http://localhost:3000${location.pathname}`);
    setClickShare(true);
  };

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
              <section>
                <button
                  className="startRecipe"
                  data-testid="start-recipe-btn"
                  onClick={ () => handleStartButton() }
                >
                  Start Recipe
                </button>
              </section>
              <section>
                <button
                  onClick={ () => handleShareButton() }
                  data-testid="share-btn"
                >
                  <img
                    src={ shareIcon }
                    alt="Icone de compartilhamento"
                  />
                </button>
                {
                  clickShare && <h2>Link copied!</h2>
                }
              </section>
              <section>
                <button
                  data-testid="favorite-btn"

                >
                  <img
                    src={ whiteHeartIcon }
                    alt="Imagem de coracao"
                  />
                </button>
              </section>
            </div>
          );
        })}
    </>
  );
}

export default RecipeDetails;
