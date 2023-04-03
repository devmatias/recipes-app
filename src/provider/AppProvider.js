import { useState } from 'react';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const [state, setState] = useState('');

  const value = useMemo(() => ({
    state,
    setState,
  }), [state]);

  return (
    <AppContext.Provider value={ value }>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
