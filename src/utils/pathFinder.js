import { MealsContext, DrinksContext } from '../context/Context';
import {
  DETAILS_DRINKS,
  DETAILS_MEALS,
  DRINKS_BRIEF_URL,
  MEALS_BRIEF_URL,
} from './constants';

export function pathContextFinder(location) {
  let context = null;
  if (location.pathname.includes('/meals')) context = MealsContext;
  if (location.pathname.includes('/drinks')) context = DrinksContext;
  return context;
}

export function pathURLCategoryFinder(location) {
  let url = '';
  if (location.pathname.includes('/meals')) url = MEALS_BRIEF_URL;
  if (location.pathname.includes('/drinks')) url = DRINKS_BRIEF_URL;
  return url;
}

export function pathURLRecipeFinder(location) {
  let url = '';
  if (location.pathname.includes('/meals')) url = DETAILS_MEALS;
  if (location.pathname.includes('/drinks')) url = DETAILS_DRINKS;
  return url;
}
