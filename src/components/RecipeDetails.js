import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchData } from '../services/FetchFunctions';
// import pathFinder from '../utils/pathFinder';
import { DETAILS_DRINKS, DETAILS_MEALS } from '../utils/constants';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams();
  // const context = pathFinder(location);
  // const {
  //   idRecipe,
  // } = useContext(context);

  useEffect(() => {
    const requestRecipe = async (params) => {
      if (location.pathname.includes('/meals')) {
        const detailsData = await fetchData(DETAILS_MEALS, params);
        console.log(detailsData);
        return detailsData;
      }
      if (location.pathname.includes('/drinks')) {
        const detailsData = await fetchData(DETAILS_DRINKS, params);
        return detailsData;
      }
    };
    requestRecipe(id);
  }, [id, location]);

  return (
    <h1> Recipe Details</h1>
  );
}

export default RecipeDetails;
