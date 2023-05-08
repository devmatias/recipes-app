export const recipeSetter = (payload) => {
  const { idDrink, idMeal,
    strMeal, strDrink,
    strDrinkThumb, strMealThumb,
    strCategory, strAlcoholic, strArea,
  } = payload;
  const idRecipe = idMeal || idDrink;
  const typeRecipe = idDrink ? 'drink' : 'meal';
  const strRecipe = strMeal || strDrink;
  const strThumb = strMealThumb || strDrinkThumb;

  return {
    id: idRecipe,
    type: typeRecipe,
    nationality: strArea || '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic || '',
    name: strRecipe,
    image: strThumb,
  };
};
