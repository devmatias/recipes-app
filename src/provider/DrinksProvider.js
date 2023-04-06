import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DrinksContext } from '../context/Context';
import { DRINKS_NAME_URL } from '../utils/constants';

function DrinksProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
    setRecipe,
    recipe,
    isLoading,
  }), [
    setRadio,
    setSearchValue,
    searchValue,
    radio,
    setRecipe,
    recipe,
    isLoading,
  ]);

  return (
    <DrinksContext.Provider value={ value }>{children}</DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
