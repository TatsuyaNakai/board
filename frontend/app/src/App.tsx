import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { useCategoriesQuery } from './hooks/useCategoriesQuery';
import Categories from './Categories';
import Category from './Category';
import NoRouteMatch from './NoRouteMatch';

function App() {
  const { data, loading, error } = useCategoriesQuery();

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  return (
    <>
      <Routes>
        <Route index element={<Categories categories={data!.categories} />} />
        {data!.categories!.map(
            (category, _) => (
              <Route path={`/categories/${category.id}`} element={<Category id={category.id} categoryName={category.name} postsCnt={category.postsCnt} />} />
            )
          )
        }
        <Route path="*" element={<NoRouteMatch />}/>
      </Routes>
    </>
  )
}

export default App;
