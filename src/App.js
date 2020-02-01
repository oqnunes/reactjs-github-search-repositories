import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact 
               path='/' 
               render={props => <Index {...props} />} />
        <Route exact 
               path='/home' 
               render={props => <Home {...props} />} 
               thistitle="Home - Search GitHub Repos" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;