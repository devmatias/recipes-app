import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from './Header';
import Footer from './Footer';
import { defaultSearch, filterByCategory, getCategories }
  from '../services/FetchFunctions';

function MealCard() {
  const { drinks,
    categories,
    setCategories,
    lastFilter,
    setLastFilter,
    setRecipe,
  } = useContext(AppContext);
  const number = 12;
  const five = 5;

  const getMeals = async () => {
    const api = await defaultSearch('meals');
    setRecipe(api.meals);
    const foundCategories = await getCategories('meals');
    setCategories(foundCategories.meals);
  };
  const allButtonClick = () => {
    getMeals();
    setLastFilter('');
  };

  useEffect(() => {
    getMeals();
  }, []);

  const filteredCategory = async (category) => {
    if (lastFilter === category) {
      getMeals();
      setLastFilter('');
    } else {
      const recipes = await filterByCategory(category, 'meals');
      setRecipe(recipes.meals);
      setLastFilter(category);
    }
  };

  return (
    <>
      <div><Header isRender namePage="Meals" /></div>

      <div>
        <button data-testid="All-category-filter" onClick={ allButtonClick }>All</button>
        { categories?.slice(0, five).map((category, index) => (
          <button
            onClick={ () => filteredCategory(category.strCategory) }
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {drinks ? (

        drinks.slice(0, number).map((meal, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <Link to={ `/meals/${meal.idMeal}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
                width={ 300 }
              />
              <div
                data-testid={ `${index}-card-name` }
              >
                {meal.strMeal}
              </div>
            </Link>
          </div>

        ))
      )
        : <div><Footer /></div>}
    </>
  );
}

export default MealCard;
