import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DrinksContext } from '../context/Context';
import { DRINKS_CATEGORY, DRINKS_NAME_URL } from '../utils/constants';
import { fetchData } from '../services/FetchFunctions';

function DrinksProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [idRecipe, setIdRecipe] = useState('');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const recipesData = fetchData(DRINKS_NAME_URL)
      .then((dataDrinks) => {
        setRecipes(dataDrinks.drinks);
        setIsLoading(false);
      });
    const categoriesData = fetchData(DRINKS_CATEGORY)
      .then((categories) => {
        setCategory(categories.drinks);
      });
    Promise.all([recipesData, categoriesData])
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  const value = useMemo(() => ({
    setRadio,
    category,
    setCategory,
    setSearchValue,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    idRecipe,
    setIdRecipe,
  }), [
    setRadio,
    setSearchValue,
    category,
    searchValue,
    radio,
    setRecipes,
    recipes,
    isLoading,
    idRecipe,
    setIdRecipe,
  ]);

  return (
    <DrinksContext.Provider value={ value }>{children}</DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
