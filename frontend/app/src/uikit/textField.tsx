import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  errorText?: string;
}

export default function TextField(props: Props) {
  const { id, label, register, errorText } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} />
      {errorText && <p>{errorText}</p>}
    </div>
  )
}
