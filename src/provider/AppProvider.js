import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import {
  fetchMealsByFirstLetter,
  fetchMealsByIngredient,
  fetchMealsByName,
} from '../services/FetchFunctions';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      switch (radio) {
      case 'ingredient':
        { const mealsByIngredient = await fetchMealsByIngredient(searchValue);
          setMeals(mealsByIngredient); }
        break;
      case 'first-letter':
        if (searchValue.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          const mealsByFirstLetter = await fetchMealsByFirstLetter(searchValue);
          setMeals(mealsByFirstLetter);
        }
        break;
      case 'name':
        { const mealsByName = await fetchMealsByName(searchValue);
          setMeals(mealsByName); }

        break;
      default:
        break;
      }
    };
    console.log(meals);
    fetchMeals();
  }, [radio, searchValue]);

  const value = useMemo(() => ({
    email,
    password,
    setPassword,
    setEmail,
    setRadio,
    setSearchValue,
    radio,
  }), [email, password]);

  return (
    <AppContext.Provider value={ value }>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
