import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useLoginAdminQuery } from './hooks/useLoginAdminQuery';
import { AdminAttributes } from './types/admin';
import { initialAdmin } from './constants/initialState';
import TextField from './uikit/TextField';
import SubmitButton from './uikit/SubmitButton';

type AdminInputs = {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { formState: { errors }, register, handleSubmit, setError, clearErrors } = useForm<AdminInputs>({ defaultValues: initialAdmin });
  const { refetch: loginAdmin } = useLoginAdminQuery({ email: null, password: null });

  const isErrorPostAttributes = (attribute: string): attribute is AdminAttributes => attribute.includes(attribute);
  const setValidationErrors = (errors) => {
    clearErrors();

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
      const { admin, errors } = res.data.loginAdmin
      if (errors && errors.length !== 0) {
        setValidationErrors(errors);
      } else {
        localStorage.setItem('token', admin.accessToken);
        window.location.href = '/'
      }
    }
    catch(error) {
      alert(`システムエラーが発生しました。\n${error}`)
    }
  }


  return (
    <div className="container-fluid">
      <Link to='/' >トップへ戻る</Link>
      <h1 className="text-center">管理者ログイン</h1>
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          klass='mb-3'
          id='email'
          label='メールアドレス'
          register={register('email')}
          errorText={errors.email?.message}
        />
        <TextField
          klass='mb-3'
          id='password'
          label='パスワード'
          type='password'
          register={register('password')}
          errorText={errors.password?.message}
        />
        <SubmitButton label='ログイン' />
      </form>
    </div>
  )
}
