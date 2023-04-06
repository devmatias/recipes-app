import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/Context';
import Header from './Header';
import Footer from './Footer';
import { fetchData }
  from '../services/FetchFunctions';
import { MEALS_BRIEF_URL, MEALS_CATEGORY_URL, MEALS_NAME_URL } from '../utils/constants';

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
    const api = await fetchData(MEALS_NAME_URL);
    setRecipe(api.meals);
    const foundCategories = await fetchData(MEALS_CATEGORY_URL);
    setCategories(foundCategories.meals);
  };
  const allButtonClick = () => {
    getMeals();
    setLastFilter('');
  };

  useEffect(() => {
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCategory = async (category) => {
    if (lastFilter === category) {
      getMeals();
      setLastFilter('');
    } else {
      const recipes = await fetchData(MEALS_BRIEF_URL, category);
      setRecipe(recipes.meals);
      setLastFilter(category);
    }
  };

  return (
    <>
      <div><Header isRender namePage="Meals" /></div>

      <div>
        <button data-testid="All-category-filter" onClick={allButtonClick}>All</button>
        {categories?.slice(0, five).map((category, index) => (
          <button
            onClick={() => filteredCategory(category.strCategory)}
            key={index}
            data-testid={`${category.strCategory}-category-filter`}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {drinks ? (

        drinks.slice(0, number).map((meal, index) => (
          <div
            key={index}
            data-testid={`${index}-recipe-card`}
          >
            <Link to={`/meals/${meal.idMeal}`}>
              <img
                data-testid={`${index}-card-img`}
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={300}
              />
              <div
                data-testid={`${index}-card-name`}
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
