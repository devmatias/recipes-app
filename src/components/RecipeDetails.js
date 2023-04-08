import { useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { fetchData } from '../services/FetchFunctions';
import pathFinder from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS } from '../utils/constants';

function RecipeDetails() {
  const location = useLocation();
  const context = pathFinder(location);
  const {
    idRecipe,
  } = useContext(context);

  useEffect(() => {
    const requestRecipe = async () => {
      if (location.pathname.includes('/meals')) {
        const detailsData = await fetchData(DETAILS_MEALS, idRecipe);
        return console.log(idRecipe);
      }
      if (location.pathname.includes('/drinks')) {
        const detailsData = await fetchData(DETAILS_DRINKS, idRecipe);
        return detailsData.drinks;
      }
    };
    requestRecipe();
  }, [idRecipe, location]);

  return (
    <h1> Recipe Details</h1>
  );
}

export default RecipeDetails;
