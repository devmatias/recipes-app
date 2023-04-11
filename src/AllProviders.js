import React from 'react';
import PropTypes from 'prop-types';
import AppProvider from './provider/AppProvider';
import MealsProvider from './provider/MealsProvider';
import DrinksProvider from './provider/DrinksProvider';

function AllProviders({ children }) {
  return (
    <AppProvider>
      <MealsProvider>
        <DrinksProvider>
          {children}
        </DrinksProvider>
      </MealsProvider>
    </AppProvider>
  );
}

export default AllProviders;

AllProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};
