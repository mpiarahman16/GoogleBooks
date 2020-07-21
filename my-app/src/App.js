import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// pages
import Search from './pages/search';
import Saved from './pages/saved';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect to="/search" path="/" exact />
        <Route path="/search" component={Search} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
