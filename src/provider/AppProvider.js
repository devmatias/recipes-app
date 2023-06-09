import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/Context';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const value = useMemo(() => ({
    email,
    password,
    setPassword,
    setEmail,
  }), [email, password]);

  return (
    <AppContext.Provider value={ value }>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
