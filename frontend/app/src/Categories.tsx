import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories({ categories }: { categories: any }) {

  return (
    <ul>
      {categories!.map(
        (category: any, index: number) => (
          <li key={index}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
          )
        )
      }
    </ul>
  )
}
