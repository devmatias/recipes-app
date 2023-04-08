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

function App() {
  return (
    <main>
      <Switch>
        <Route path="/drinks/:id-da-receita/in-progress" component={ Drinks } />
        <Route path="/meals/:id-da-receita/in-progress" component={ Meals } />
        <Route path="/drinks/:id-da-receita" component={ RecipeDetails } />
        <Route path="/meals/:id-da-receita" component={ RecipeDetails } />
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
    </main>
  );
}

export default App;
