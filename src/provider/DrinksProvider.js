import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DrinksContext } from '../context/Context';
import { DRINKS_CATEGORY, DRINKS_NAME_URL } from '../utils/constants';
import { fetchData } from '../services/FetchFunctions';

function DrinksProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [allRecipes, setAllRecipes] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataRecipe, setDataRecipe] = useState([]);
  const [idRecipe, setIdRecipe] = useState('');
  const [categories, setCategories] = useState([]);
  const [recommendationMeals, setRecommendationMeals] = useState([]);

  useEffect(() => {
    const recipesData = fetchData(DRINKS_NAME_URL)
      .then((dataRecipes) => {
        setAllRecipes(dataRecipes.drinks);
        setRecipes(dataRecipes.drinks);
      });
    const categoriesData = fetchData(DRINKS_CATEGORY)
      .then((catData) => {
        setCategories(catData.drinks);
      });
    Promise.all([recipesData, categoriesData])
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const value = useMemo(() => ({
    setRadio,
    categories,
    setCategories,
    setSearchValue,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    setIsLoading,
    dataRecipe,
    setDataRecipe,
    idRecipe,
    setIdRecipe,
    allRecipes,
    recommendationMeals,
    setRecommendationMeals,
  }), [
    setRadio,
    setSearchValue,
    categories,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    setIsLoading,
    dataRecipe,
    setDataRecipe,
    idRecipe,
    setIdRecipe,
    allRecipes,
    recommendationMeals,
    setRecommendationMeals,
  ]);

  return (
    <DrinksContext.Provider value={ value }>{children}</DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
