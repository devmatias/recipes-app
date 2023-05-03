import { useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { pathContextFinder, pathURLRecipeFinder } from '../utils/pathFinder';
import { fetchData } from '../services/FetchFunctions';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/RecipeInProgress.css';
import {
  CustomLabel,
  FloatMsg,
  ImageContainer,
  InvisibleInput,
  MainRecipeDetails,
  RecipeButton,
  RecipeImage,
  RecipeSection,
  SectionButtonsRecipe,
  StartRecipe,
} from '../styles/styledRecipe';

const copy = require('clipboard-copy');

function RecipeInProgress() {
  const location = useLocation();
  const { id } = useParams();
  const context = pathContextFinder(location);
  const url = pathURLRecipeFinder(location);
  const {
    setDataRecipe,
    dataRecipe,
    isLoading,
    setIsLoading,
  } = useContext(context);
  const [clickShare, setClickShare] = useState(false);
  const [itemsChecked, setItemsChecked] = useState({});
  const [favoriteClick, setFavoriteClick] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(url, id)
      .then((data) => {
        const dataFetched = data.meals || data.drinks;
        setDataRecipe(dataFetched);
        setIsLoading(false);
      });
  }, [id, url, setIsLoading, setDataRecipe]);

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

  if (isLoading) {
    return <div>Carregando dados...</div>;
  }

  const handleCheckboxClick = ({ target }) => {
    const { name, checked } = target;
    setItemsChecked({
      ...itemsChecked,
      [name]: checked,
    });
  };

  return (
    <MainRecipeDetails>
      {
        dataRecipe
      && dataRecipe.map((recipe, index) => {
        const { strMeal, strDrink, strDrinkThumb,
          strMealThumb, strCategory, strAlcoholic,
          strInstructions,
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
        console.log(ingredientsAndMeasures);
        const formatInstrunctions = strInstructions
          .replace(/\n/g, '')
          .split('\r')
          .filter((elem) => elem);
        return (
          <RecipeSection key={ index }>
            <ImageContainer>
              <h1
                data-testid="recipe-title"
              >
                Name:
                {' '}
                {strRecipe}
              </h1>
              <h2
                data-testid="recipe-category"
              >
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
                      <CustomLabel
                        lineThrough={
                          itemsChecked[`${indexIngredient}-ingredient`]
                        }
                        data-testid={ `${indexIngredient}-ingredient-step` }
                        htmlFor={ `${indexIngredient}-checkbox` }
                      >
                        <InvisibleInput
                          type="checkbox"
                          name={ `${indexIngredient}-ingredient` }
                          id={ `${indexIngredient}-checkbox` }
                          onClick={ handleCheckboxClick }
                          checked={ itemsChecked[`${indexIngredient}-ingredient`] }
                        />
                        {`${ingredient[1]} - ${ingredient[3]}`}
                      </CustomLabel>
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
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </StartRecipe>

          </RecipeSection>
        );
      })
      }
    </MainRecipeDetails>
  );
}

export default RecipeInProgress;
