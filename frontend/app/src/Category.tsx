import React from 'react';

import { usePostsQuery } from './hooks/usePostsQuery';

export default function Category({ id, categoryName, postsCnt }: {id: any, categoryName: string, postsCnt: number}) {
  // debugger
  const { data, loading, error } = usePostsQuery(id)

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  return (
    <>
      <h2>カテゴリ名：{categoryName}</h2>
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
