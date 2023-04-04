import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer';
import RecipePage from './pages/RecipePage';

function App() {
  return (
      <main>
        <Switch>
          <Route path="/drinks/:id-da-receita/in-progress" component={}/>
          <Route path="/meals/:id-da-receita/in-progress"  component={}/>
          <Route path="/drinks/:id-da-receita"  component={}/>
          <Route path="/meals/:id-da-receita" component={}/>
          <Route path="/favorite-recipes"  component={}/>
          <Route path="/done-recipes" component={}/>
          <Route path="/profile" component={}/>
          <Route path="/drinks" component={}/>
          <Route exact path="/meals" component={ RecipePage } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </main>
  );
}

export default App;
