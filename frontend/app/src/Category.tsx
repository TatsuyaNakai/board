import React from 'react';
import { useParams } from 'react-router-dom';

import { usePostsQuery } from './hooks/usePostsQuery';

export default function Category() {
  const { categoryId } = useParams();
  const { data, loading, error } = usePostsQuery(Number(categoryId))

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  return (
    <>
      <h2>カテゴリ</h2>
      <ul>
        {data!.categoryPosts!.map(
          (post, index) => (
            <li key={index}>
              <div>{post.title}</div>
              <div>{post.body}</div>
              <div>{post.authorName}</div>
              <div>{post.email}</div>
            </li>
            )
          )
        }
      </ul>
    </>
  )
}
