import { useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { pathContextFinder, pathURLRecipeFinder } from '../utils/pathFinder';
import { fetchData } from '../services/FetchFunctions';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/RecipeInProgress.css';

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
    console.log(dataRecipe);
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

    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...saveStorage, settingFavorites]),
    );
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
    <div>
      Recipe In Progress
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
        return (
          <div key={ index }>
            <h3
              data-testid="recipe-title"
            >
              {strRecipe}
            </h3>
            <img
              data-testid="recipe-photo"
              src={ strThumb }
              alt={ strRecipe }
              width="200px"
            />
            <p
              data-testid="recipe-category"
            >
              {strDescription}
            </p>
            <ul>
              {
                ingredientsAndMeasures.map((ingredient, indexIngredient) => (
                  <li
                    key={ indexIngredient }
                    data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
                  >
                    <label
                      className={
                        itemsChecked[`${indexIngredient}-ingredient`] && 'sublinhado'
                      }
                      data-testid={ `${indexIngredient}-ingredient-step` }
                      htmlFor={ `${indexIngredient}-checkbox` }
                    >
                      {`${ingredient[1]} - ${ingredient[3]}`}
                      <input
                        type="checkbox"
                        name={ `${indexIngredient}-ingredient` }
                        id={ `${indexIngredient}-checkbox` }
                        onClick={ handleCheckboxClick }
                        checked={ itemsChecked[`${indexIngredient}-ingredient`] }
                      />
                    </label>
                  </li>

                ))
              }
            </ul>
            <p data-testid="instructions">{strInstructions}</p>
            <button
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </button>
            <button
              onClick={ () => handleShareButton() }
              data-testid="share-btn"
            >
              <img
                src={ shareIcon }
                alt="Icone de compartilhamento"
              />
            </button>
            <button
              data-testid="favorite-btn"
              onClick={ () => handleClick() }
            >
              <img
                src={ whiteHeartIcon }
                alt="Imagem de coracao"
              />
            </button>
          </div>
        );
      })
      }
    </div>
  );
}

export default RecipeInProgress;
