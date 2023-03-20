import React from 'react';
import { Link } from 'react-router-dom';

import { useCategoriesQuery } from './hooks/useCategoriesQuery';

export default function Categories() {
  const { data, loading, error } = useCategoriesQuery();

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  return (
    <ul>
      {data!.categories!.map(
        (category, index) => (
          <li key={index}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
          )
        )
      }
    </ul>
  )
}
