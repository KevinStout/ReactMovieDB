// eslint-disable-next-line
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="./">
          <img src="https://movie-viewer-f42e1.firebaseapp.com/static/media/logo.323b1b0b.svg" className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;


// 72aa4def65493ab3a68956fa3b0073fa   api key
