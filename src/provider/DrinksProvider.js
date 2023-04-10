import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DrinksContext } from '../context/Context';
import { DRINKS_NAME_URL } from '../utils/constants';
import { fetchData } from '../services/FetchFunctions';

function DrinksProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataRecipe, setDataRecipe] = useState([]);
  const [recommendationMeals, setRecommendationMeals] = ([]);

  useEffect(() => {
    fetchData(DRINKS_NAME_URL)
      .then((dataMeals) => {
        setRecipes(dataMeals.drinks);
        setIsLoading(false);
      });
  }, []);

  const value = useMemo(() => ({
    setRadio,
    setSearchValue,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    dataRecipe,
    setDataRecipe,
  }), [
    setRadio,
    setSearchValue,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    dataRecipe,
    setDataRecipe,
  ]);

  return (
    <DrinksContext.Provider value={ value }>{children}</DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
