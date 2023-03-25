import React from 'react';

import { useUpdatePostMutation } from './hooks/useUpdatePostMutation';
import { PostStatus } from './gql/graphql';

type Props = {
  post: {
    __typename?: "Post",
    id: string,
    status: PostStatus,
    authorName?: string,
    email?: string,
    title?: string,
    body: string,
  }
}


export default function Post(props: Props) {
  const { post: { id, authorName, email, title, body, status } } = props;
  const { updatePost } = useUpdatePostMutation();

  const updatePostStatus = (id: string, status: 'private' | 'public') => {
    try {
      updatePost({ variables: { input: { id, status } } })
    }
    catch(error) {
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  };

  return (
    <>
      <div>{authorName}</div>
      <div>{email}</div>
      <div>{title}</div>
      <div>{body}</div>
      {
        status === 'public' ?
          <button onClick={()=> updatePostStatus(id, 'private')}>非表示にする</button> :
          <button onClick={()=> updatePostStatus(id, 'public')}>表示にする</button>
      }
  </>
  )
}
