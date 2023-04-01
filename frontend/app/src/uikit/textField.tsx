import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
	klass?: string;
	id: string;
	label: string;
	type?: string;
	register: UseFormRegisterReturn;
	errorText?: string;
};

export default function TextField(props: Props) {
	const { klass, id, label, type, register, errorText } = props;

	return (
		<div className={klass}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type ? type : "text"}
				className='form-control'
				id={id}
				{...register}
			/>
			{errorText && <p className='text-danger'>{errorText}</p>}
		</div>
	);
}
