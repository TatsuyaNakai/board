import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDeleteCategoryMutation } from './hooks/useDeleteCategoryMutation';
import { useUpdateCategoryMutation } from './hooks/useUpdateCategoryMutation';
import { CategoryAttributes } from './types/category'
import { AdminContext } from './utils/AdminProvider';
import TextField from './uikit/textField';
import SubmitButton from './uikit/SubmitButton';
import FullMessages from './FullMessages';

type Props = {
  category: {
    id: string;
    name: string;
  }
}

type CategoryInputs = {
  id: string;
  name: string;
}

export default function Category(props: Props) {
  const currentAdmin = useContext(AdminContext);
  const { category: { id, name } } = props;
  const [fullMessages, setFullMessages] = useState([]);
  const { deleteCategory } = useDeleteCategoryMutation();
  const { updateCategory } = useUpdateCategoryMutation();
  const { formState: { errors }, register, handleSubmit, setError, clearErrors } = useForm<CategoryInputs>({ defaultValues: { name: name } });

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
      const res = await updateCategory({ variables: { input: {id, ...input} }});
      console.log(res)
      const { errors, fullMessages } = res.data.updateCategory
      if (errors && errors.length !== 0) {
        setValidationErrors(errors, fullMessages);
      } else {
        clearErrors();
      }
    }
    catch(error) {
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  }

  const callDeleteCategory = (id: string) => {
    try {
      deleteCategory({ variables: { input: { id } } })
    }
    catch(error){
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  };

  return (
    <div>
      <FullMessages fullMessages={fullMessages}/>
      <Link to={`/categories/${id}`}>{name}</Link>
      {
        currentAdmin &&
          <>
            <button onClick={() => callDeleteCategory(id)}>削除する</button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField id='name' label='name' register={register('name')} errorText={errors.name?.message} />
              <SubmitButton label='編集する'/>
            </form>
          </>
      }
    </div>
  )
}
