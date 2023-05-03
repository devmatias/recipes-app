import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { fetchData } from '../services/FetchFunctions';
import { pathContextFinder } from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS,
  MEALS_NAME_URL, DRINKS_NAME_URL } from '../utils/constants';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  FloatMsg,
  ImageContainer,
  MainRecipeDetails,
  RecipeButton,
  RecipeImage,
  RecipeSection,
  SectionButtonsRecipe,
  StartRecipe,
} from '../styles/styledRecipe';

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
  const [favoriteClick, setFavoriteClick] = useState(false);

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
      }
      if (location.pathname.includes('/meals')) {
        const recommendationData = await fetchData(DRINKS_NAME_URL);
        setRecommendationDrinks(recommendationData);
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

  const handleClick = () => {
    const { idDrink, idMeal,
      strMeal, strDrink,
      strDrinkThumb, strMealThumb,
      strCategory, strAlcoholic, strArea,
    } = dataRecipe[0];
    const idRecipe = idMeal || idDrink;
    const typeRecipe = idDrink ? 'drink' : 'meal';
    const strRecipe = strMeal || strDrink;
    const strThumb = strMealThumb || strDrinkThumb;

    const settingFavorites = {
      id: idRecipe,
      type: typeRecipe,
      nationality: strArea || '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic || '',
      name: strRecipe,
      image: strThumb,
    };
    const saveStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (!favoriteClick) {
      setFavoriteClick(true);
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...saveStorage, settingFavorites]),
      );
    } else {
      setFavoriteClick(false);
      const removeFavorite = saveStorage
        .filter((item) => (item.id !== settingFavorites.id));
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(removeFavorite),
      );
    }
  };

  useEffect(() => {
    const favoriteRecipeSaved = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const isRecipeFavorite = favoriteRecipeSaved.some((item) => (
      item.id === id
    ));
    setFavoriteClick(isRecipeFavorite);
  }, [id]);

  return (
    <MainRecipeDetails>
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

          const ingredientsAndMeasures = ingredients
            .map((ingred, indexIngred) => [...ingred, ...measures[indexIngred]]);

          const formatInstrunctions = strInstructions
            .replace(/\n/g, '')
            .split('\r')
            .filter((elem) => elem);
          console.log(formatInstrunctions);
          return (
            <RecipeSection key={ index }>
              <ImageContainer>
                <h1 data-testid="recipe-title">
                  Name:
                  {' '}
                  {strRecipe}
                </h1>
                <h2 data-testid="recipe-category">
                  Category:
                  {' '}
                  {strDescription}
                </h2>
                <RecipeImage
                  data-testid="recipe-photo"
                  src={ strThumb }
                  alt={ strRecipe }
                />
                <ul>
                  {
                    ingredientsAndMeasures.map((ingredient, indexIngredient) => (
                      <li
                        key={ indexIngredient }
                        data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
                      >
                        {`${ingredient[1]} - ${ingredient[3]}`}
                      </li>
                    ))
                  }
                </ul>
              </ImageContainer>

              <div data-testid="instructions">
                {
                  formatInstrunctions
                   && formatInstrunctions.map((step, indexInstruc) => (
                     <div key={ indexInstruc }>
                       { step }
                     </div>
                   ))
                }
              </div>
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
              <SectionButtonsRecipe>
                <RecipeButton
                  onClick={ () => handleShareButton() }
                  data-testid="share-btn"
                >
                  <img
                    src={ shareIcon }
                    alt="Icone de compartilhamento"
                  />
                  {
                    clickShare && <FloatMsg>Link copied!</FloatMsg>
                  }
                </RecipeButton>
                {
                  favoriteClick ? (
                    <RecipeButton
                      onClick={ handleClick }
                    >
                      <img
                        data-testid="favorite-btn"
                        src={ blackHeartIcon }
                        alt="Imagem de coracao"
                      />
                    </RecipeButton>
                  ) : (
                    <RecipeButton
                      onClick={ handleClick }
                    >
                      <img
                        data-testid="favorite-btn"
                        src={ whiteHeartIcon }
                        alt="Imagem de coracao"
                      />
                    </RecipeButton>
                  )
                }
              </SectionButtonsRecipe>
              <StartRecipe
                data-testid="start-recipe-btn"
                onClick={ handleStartButton }
              >
                Start Recipe
              </StartRecipe>
            </RecipeSection>
          );
        })}
    </MainRecipeDetails>
  );
}

export default RecipeDetails;
