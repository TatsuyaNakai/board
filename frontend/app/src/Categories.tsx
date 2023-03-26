import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useCreateCategoryMutation } from './hooks/useCreateCategoryMutation';
import { CategoryAttributes } from './types/category'
import { initialCategory } from './constants/initialState';
import { AdminContext } from './utils/AdminProvider';
import Category from './Category';
import TextField from './uikit/textField';
import SubmitButton from './uikit/SubmitButton';
import FullMessages from './FullMessages';

type CategoryInputs = {
  name: string
}

type CategoryType = {
  __typename?: "Category";
  id: string;
  name: string;
  postsCnt: number;
}

type Props = {
  categories: CategoryType[]
}

export default function Categories(props: Props) {
  const { categories } = props;
  const currentAdmin = useContext(AdminContext);
  const [fullMessages, setFullMessages] = useState([]);
  const { createCategory } = useCreateCategoryMutation();
  const { formState: { errors }, register, handleSubmit, reset, setError, clearErrors } = useForm<CategoryInputs>({ defaultValues: initialCategory });

  const isErrorCategoryAttributes = (attribute: string): attribute is CategoryAttributes => attribute.includes(attribute);
  const setValidationErrors = (errors, errorFullMessages: string[]) => {
    clearErrors();

    setFullMessages(errorFullMessages);
    errors.forEach(error => {
      const { attribute } = error;
      if (isErrorCategoryAttributes(attribute)) setError(attribute, { message: error.messages.join(' ') })
    });
  }

  const onSubmit = async (input: any) => {
    try {
      const res = await createCategory({ variables: { input: input }});
      console.log(res)
      const { errors, fullMessages } = res.data.createCategory
      if (errors && errors.length !== 0) {
        setValidationErrors(errors, fullMessages);
      } else {
        clearErrors();
        reset(initialCategory);
      }
    }
    catch(error) {
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  }

  const handleLogout = () => {
    localStorage.setItem('token', '');
    window.location.href = '/';
  }

  return (
    <>
      <FullMessages fullMessages={fullMessages}/>
      { categories!.map((category, index: number) => (<Category key={index} category={category}/>)) }
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id='name' label='name' register={register('name')} errorText={errors.name?.message} />
        <SubmitButton label='カテゴリ作成'/>
      </form>
      { currentAdmin ? <button onClick={handleLogout}>ログアウト</button> : <Link to='/login'>管理者ログイン</Link> }
    </>
  )
}
