import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MealsContext } from '../context/Context';
import { fetchData } from '../services/FetchFunctions';
import { MEALS_NAME_URL } from '../utils/constants';

function MealsProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [idRecipe, setIdRecipe] = useState('');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchData(MEALS_NAME_URL)
      .then((dataMeals) => {
        setRecipes(dataMeals.meals);
        console.log(dataMeals.meals);
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {

  // }, [recipes]);

  const value = useMemo(() => ({
    setRadio,
    setCategory,
    setSearchValue,
    category,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    idRecipe,
    setIdRecipe,

  }), [
    radio,
    searchValue,
    category,
    setRadio, setSearchValue,
    setRecipes, recipes,
    isLoading, idRecipe, setIdRecipe,
  ]);

  return (
    <MealsContext.Provider value={ value }>{children}</MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MealsProvider;
