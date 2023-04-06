import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { errorMessage } from '../helpers/ErrorMessage';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radio, setRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // useEffect(() => {
  //   if (meals === null || drinks) {
  //     globalThis.alert(errorMessage);
  //   }
  // }, [meals, drinks]);

  const value = useMemo(() => ({
    email,
    password,
    setPassword,
    setEmail,
    setRadio,
    setSearchValue,
    searchValue,
    setMeals,
    meals,
    radio,
    drinks,
    setDrinks,

  }), [email, password, radio, searchValue, meals, drinks]);

  return (
    <AppContext.Provider value={ value }>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
