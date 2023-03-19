import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Categories from './Categories';
import Posts from './Posts';

function App() {
  const NotFound = () => {
    return <h2>Not Found Page</h2>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/">
              <Categories />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
