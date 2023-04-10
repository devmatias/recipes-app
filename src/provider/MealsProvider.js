import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MealsContext } from '../context/Context';
import { fetchData } from '../services/FetchFunctions';
import { MEALS_CATEGORY, MEALS_NAME_URL } from '../utils/constants';

function MealsProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [allRecipes, setAllRecipes] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataRecipe, setDataRecipe] = useState([]);
  const [idRecipe, setIdRecipe] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const recipesData = fetchData(MEALS_NAME_URL)
      .then((dataRecipes) => {
        setAllRecipes(dataRecipes.meals);
        setRecipes(dataRecipes.meals);
      });
    const categoriesData = fetchData(MEALS_CATEGORY)
      .then((catData) => {
        setCategories(catData.meals);
      });
    Promise.all([recipesData, categoriesData])
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const value = useMemo(() => ({
    setRadio,
    setCategories,
    setSearchValue,
    categories,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    dataRecipe,
    setDataRecipe,
    idRecipe,
    setIdRecipe,
    allRecipes,
  }), [
    radio,
    searchValue,
    categories,
    setRadio, setSearchValue,
    setRecipes, recipes,
    isLoading,
    dataRecipe,
    setDataRecipe,
    isLoading, idRecipe, setIdRecipe,
    allRecipes,
  ]);

  return (
    <MealsContext.Provider value={ value }>{children}</MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MealsProvider;
