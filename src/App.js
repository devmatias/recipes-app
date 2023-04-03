import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ RecipePage } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
