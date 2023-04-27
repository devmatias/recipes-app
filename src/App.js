import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import MealsProvider from './provider/MealsProvider';
import DrinksProvider from './provider/DrinksProvider';
import Meals from './pages/Meals';
import RecipeDetails from './components/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <Switch>
      <Route
        path="/drinks/:id/in-progress"
        render={ (props) => (
          <DrinksProvider><RecipeInProgress { ...props } /></DrinksProvider>) }
      />
      <Route
        path="/meals/:id/in-progress"
        render={ (props) => (
          <MealsProvider><RecipeInProgress { ...props } /></MealsProvider>) }
      />
      <Route
        exact
        path="/meals/:id"
        render={ (props) => (
          <MealsProvider><RecipeDetails { ...props } /></MealsProvider>) }
      />
      <Route
        exact
        path="/drinks/:id"
        render={ (props) => (
          <DrinksProvider><RecipeDetails { ...props } /></DrinksProvider>) }
      />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/profile" component={ Profile } />
      <Route
        exact
        path="/drinks"
        render={ () => (<DrinksProvider><Drinks /></DrinksProvider>) }
      />
      <Route
        exact
        path="/meals"
        render={ (props) => (
          <MealsProvider><Meals { ...props } /></MealsProvider>) }
      />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
