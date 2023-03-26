import React, { useContext } from 'react';
import { useCookies } from 'react-cookie'

import { useUpdatePostMutation } from './hooks/useUpdatePostMutation';
import { PostStatus } from './gql/graphql';
import { AdminContext } from './utils/AdminProvider';

type Props = {
  post: {
    __typename?: "Post";
    id: string;
    status: PostStatus;
    token: string;
    authorName?: string;
    email?: string;
    title?: string;
    body: string;
  }
}

export default function Post(props: Props) {
  const { post: { id, authorName, email, title, body, status, token } } = props;
  const currentAdmin = useContext(AdminContext);
  const [cookies] = useCookies(['token']);
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
      { status === 'public' && cookies.token === token &&
        <button onClick={()=> updatePostStatus(id, 'private')}>非表示にする</button>
      }
      { currentAdmin && 
        <button onClick={()=> updatePostStatus(id, status === 'public' ? 'private': 'public')}>
          { status === 'public' ? '非表示にする' : '表示する' }
        </button>
      }
  </>
  )
}
