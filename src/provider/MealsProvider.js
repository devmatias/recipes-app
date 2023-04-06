import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { MealsContext } from '../context/Context';
import { fetchData } from '../services/FetchFunctions';
import { MEALS_NAME_URL } from '../utils/constants';

function MealsProvider({ children }) {
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [recipes, setRecipes] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(MEALS_NAME_URL)
      .then((dataMeals) => {
        setRecipes(dataMeals.meals);
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

  }), [
    radio, searchValue,
    setRadio, setSearchValue,
    setRecipes, recipes,
    isLoading,
  ]);

  return (
    <MealsContext.Provider value={ value }>{children}</MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MealsProvider;
