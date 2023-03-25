import React from 'react';
import { useForm } from 'react-hook-form';

import { useLoginAdminQuery } from './hooks/useLoginAdminQuery';
import { initialAdmin } from './constants/initialState';
import TextField from './uikit/textField';
import SubmitButton from './uikit/SubmitButton';

type AdminInputs = {
  email: string,
  password: string,
}

export default function LoginForm() {
  const { formState: { errors }, register, handleSubmit } = useForm<AdminInputs>({ defaultValues: initialAdmin });

  const onSubmit = async (input: any) => {
    const { email, password } = input
    try {
      const { data, error } = await useLoginAdminQuery(email, password)
      console.log(data);
      console.log(error);
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
      <div>管理者ログイン</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id='email' label='email' register={register('email')} errorText={errors.email?.message} />
        <TextField id='password' label='password' register={register('password')} errorText={errors.password?.message} />
        <SubmitButton label='編集する'/>
      </form>
    </>
  )
}
