import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer';
import RecipePage from './pages/RecipePage';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
      <main>
        <Switch>
          <Route path="/drinks/:id-da-receita/in-progress" component={}/>
          <Route path="/meals/:id-da-receita/in-progress"  component={}/>
          <Route path="/drinks/:id-da-receita"  component={}/>
          <Route path="/meals/:id-da-receita" component={}/>
          <Route path="/favorite-recipes"  component={FavoriteRecipes}/>
          <Route path="/done-recipes" component={DoneRecipes}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/drinks" component={Drinks}/>
          <Route exact path="/meals" component={ RecipePage } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </main>
  );
}

export default App;
