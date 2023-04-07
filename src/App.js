import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Meals from './pages/Meals';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/drinks/:id-da-receita/in-progress" component={ Drinks } />
        <Route path="/meals/:id-da-receita/in-progress" component={ Meals } />
        <Route path="/drinks/" component={ Drinks } />
        <Route path="/meals/" component={ Meals } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/profile" component={ Profile } />
        <Route path="/drinks" component={ Drinks } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </main>
  );
}

export default App;
