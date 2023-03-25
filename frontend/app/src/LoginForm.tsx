import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useLoginAdminQuery } from './hooks/useLoginAdminQuery';
import { AdminAttributes } from './types/admin';
import { initialAdmin } from './constants/initialState';
import TextField from './uikit/textField';
import SubmitButton from './uikit/SubmitButton';
import FullMessages from './FullMessages';

type AdminInputs = {
  email: string,
  password: string,
}

export default function LoginForm() {
  const [fullMessages, setFullMessages] = useState([]);
  const { formState: { errors }, register, handleSubmit, setError, clearErrors } = useForm<AdminInputs>({ defaultValues: initialAdmin });
  const { refetch: loginAdmin } = useLoginAdminQuery({ email: null, password: null });

  const isErrorPostAttributes = (attribute: string): attribute is AdminAttributes => attribute.includes(attribute);
  const setValidationErrors = (errors, errorFullMessages: string[]) => {
    clearErrors();

    setFullMessages(errorFullMessages);
    errors.forEach(error => {
      const { attribute } = error;
      if (isErrorPostAttributes(attribute)) setError(attribute, { message: error.messages.join(' ') })
    });
  }

  const onSubmit = async (input: any) => {
    const { email, password } = input
    try {
      // https://stackoverflow.com/questions/62122523/wait-for-uselazyquery-response
      const res = await loginAdmin({ email, password });
      console.log(res.data);
      const { admin, errors, fullMessages } = res.data.loginAdmin
      if (errors && errors.length !== 0) {
        setValidationErrors(errors, fullMessages);
      } else {
        localStorage.setItem('token', admin.accessToken);
        window.location.href = '/'
      }
    }
    catch(error) {
      // alert(`システムエラーが発生しました。\n${error}`)
      console.log(error)
    }
  }


  return (
    // ログイン画面があって、VKのログインのUIが出る、
    // ログインに成功した場合には、ホーム画面に戻るような設計
    <>
      <Link to='/' >トップへ戻る</Link>
      <FullMessages fullMessages={fullMessages}/>
      <div>管理者ログイン</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id='email' label='email' register={register('email')} errorText={errors.email?.message} />
        <TextField id='password' label='password' register={register('password')} errorText={errors.password?.message} />
        <SubmitButton label='ログイン' />
      </form>
    </>
  )
}
