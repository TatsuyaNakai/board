import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
	klass?: string;
	id: string;
	label: string;
	register: UseFormRegisterReturn;
	errorText?: string;
};

export default function TextArea(props: Props) {
	const { klass, id, label, register, errorText } = props;

	return (
		<div className={`form-group ${klass}`}>
			<label htmlFor={id}>{label}</label>
			<textarea className='form-control' id={id} {...register} rows={4} />
			{errorText && <p className='text-danger'>{errorText}</p>}
		</div>
	);
}
