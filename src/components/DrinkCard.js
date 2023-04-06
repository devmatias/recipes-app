import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/Context';
import Header from './Header';
import Footer from './Footer';
import { fetchData } from '../services/FetchFunctions';
import {
  DRINKS_BRIEF_URL,
  DRINKS_CATEGORY_URL,
  DRINKS_NAME_URL,
} from '../utils/constants';

function DrinkCards() {
  const { drinks,
    categories,
    setCategories,
    lastFilter,
    setLastFilter,
    setRecipe,
  } = useContext(AppContext);
  const number = 12;
  const five = 5;

  const getDrinks = async () => {
    const api = await fetchData(DRINKS_NAME_URL);
    setRecipe(api.drinks);
    const foundCategories = await fetchData(DRINKS_CATEGORY_URL);
    setCategories(foundCategories.drinks);
  };

  const allButtonClick = () => {
    getDrinks();
    setLastFilter('');
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const filteredCategory = async (category) => {
    if (lastFilter === category) {
      getDrinks();
      setLastFilter('');
    } else {
      const recipes = await fetchData(DRINKS_BRIEF_URL, category);
      setRecipe(recipes.drinks);
      setLastFilter(category);
    }
  };
  return (

    <>
      <div><Header isRender namePage="Drinks" /></div>

      <div>
        <button data-testid="All-category-filter" onClick={allButtonClick}>All</button>

        {categories?.slice(0, five).map((category, index) => (
          <button
            key={index}
            data-testid={`${category.strCategory}-category-filter`}
            onClick={() => filteredCategory(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {drinks ? (
        drinks.slice(0, number).map((drink, index) => (
          <div
            key={index}
            data-testid={`${index}-recipe-card`}
          >
            <Link to={`/drinks/${drink.idDrink}`}>
              <img
                data-testid={`${index}-card-img`}
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width={300}
              />
              <div
                data-testid={`${index}-card-name`}
              >
                {drink.strDrink}
              </div>
            </Link>
          </div>

        ))
      )
        : <div><Footer /></div>}

    </>
  );
}

export default DrinkCards;
