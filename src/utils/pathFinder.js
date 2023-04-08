import { MealsContext, DrinksContext } from '../context/Context';

export default function pathFinder(location) {
  let context = null;
  if (location.pathname.includes('/meals')) context = MealsContext;
  if (location.pathname.includes('/drinks')) context = DrinksContext;
  return context;
}
