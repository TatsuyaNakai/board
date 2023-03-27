import React, { useContext } from 'react';
import { useCookies } from 'react-cookie'

import { useUpdatePostMutation } from './hooks/useUpdatePostMutation';
import { PostStatus } from './gql/graphql';
import { AdminContext } from './utils/AdminProvider';

type Props = {
  post: {
    id?: string;
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
    <li className="list-group-item">
      <div className="container">
        <div className="row mb-2">
          <div className="col">{authorName}</div>
          <div className="col">{email}</div>
        </div>
        <div className="mb-2">{title}</div>
        <div className="mb-2">{body}</div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        { !currentAdmin && status === 'public' && cookies.token === token &&
          <button
            type='button'
            className='btn btn-primary'
            onClick={()=> updatePostStatus(id, 'private')}
          >
            非表示
          </button>
        }
        { currentAdmin && status === 'private' &&
          <button
            type='button'
            className='btn btn-primary'
            onClick={()=> updatePostStatus(id, 'public')}
          >
             再表示
          </button>
        }
      </div>
  </li>
  )
}
