import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useCategoriesQuery } from './hooks/useCategoriesQuery';

function App() {
  const { data, loading: categoriesQueryLoading } = useCategoriesQuery();
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>20230313</p>
      </header>
    </div>
  );
}

export default App;
