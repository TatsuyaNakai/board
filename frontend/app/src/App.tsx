import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Category from './Category';
import Categories from './Categories';
import NoRouteMatch from './NoRouteMatch';

export default function App() {
  return (
    <Routes>
      <Route index element={<Categories/>} />
      <Route path="/categories">
        <Route path=":categoryId" element={<Category />} />
      </Route>
      <Route path="*" element={<NoRouteMatch />}/>
    </Routes>
  )
}
