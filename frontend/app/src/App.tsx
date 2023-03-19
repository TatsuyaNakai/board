import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { useCategoriesQuery } from './hooks/useCategoriesQuery';
import Post from './Post';

function App() {
  const { data, loading, error } = useCategoriesQuery();

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;
  console.log(data)

  return (
    <>
      <ul>
        {data!.categories!.map(
          (category, index) => (
                <li key={index}>
                  <Link to={`/posts/${category.id}`}>{category.name}</Link>
                </li>
                )
          )
        }
      </ul>
      <Routes>
        <Route path="/posts">
          <Route path=":postId" element={<Post />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
