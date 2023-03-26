import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { usePostsQuery } from './hooks/usePostsQuery';
import { useCreatePostMutation } from './hooks/useCreatePostMutation';
import { PostAttributes } from './types/post';
import { initialPost } from './constants/initialState';
import Post from './Post';
import FullMessages from './FullMessages';
import TextField from './uikit/textField';
import SubmitButton from './uikit/SubmitButton';

type FormInputs = {
  title: string;
  authorName: string;
  email: string;
  body: string;
}

export default function Posts({ id, categoryName, postsCnt }: {id: any, categoryName: string, postsCnt: number}) {
  const [fullMessages, setFullMessages] = useState([]);
  const { data, loading, error } = usePostsQuery(id)
  const { createPost } = useCreatePostMutation();
  const { formState: { errors }, register, handleSubmit, reset, setError, clearErrors } = useForm<FormInputs>({ defaultValues: initialPost });

  const isErrorPostAttributes = (attribute: string): attribute is PostAttributes => attribute.includes(attribute);
  const setValidationErrors = (errors, errorFullMessages: string[]) => {
    clearErrors();

    setFullMessages(errorFullMessages);
    errors.forEach(error => {
      const { attribute } = error;
      if (isErrorPostAttributes(attribute)) setError(attribute, { message: error.messages.join(' ') })
    });
  }

  const onSubmit = async (input: FormInputs) => {
    try {
      // 投稿作成
      const res = await createPost({ variables: { input: { ...input, categoryId: id } } });
      const { errors, fullMessages } = res.data.createPost
      if (errors && errors.length !== 0) {
        setValidationErrors(errors, fullMessages);

      } else {
        clearErrors();
        reset(initialPost)
      }
    }
    catch(error) {
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  };

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  return (
    <>
      <Link to='/' >トップへ戻る</Link>
      <FullMessages fullMessages={fullMessages}/>
      <h2>カテゴリ名：{categoryName}</h2>
      { data!.categoryPosts!.map((post, index) => (<Post key={index} post={post} />)) }
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id='authorName' label='authorName' register={register('authorName')} errorText={errors.authorName?.message} />
        <TextField id='email' label='email' register={register('email')} errorText={errors.email?.message} />
        <TextField id='title' label='title' register={register('title')} errorText={errors.title?.message} />
        <TextField id='body' label='body' register={register('body')} errorText={errors.body?.message} />
        <SubmitButton label='投稿'/>
      </form>
    </>
  )
}
