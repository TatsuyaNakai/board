import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useCreateCategoryMutation } from "./hooks/useCreateCategoryMutation";
import { CategoryAttributes } from "./types/category";
import { initialCategory } from "./constants/initialState";
import { AdminContext } from "./utils/AdminProvider";

import Category from "./Category";
import TextField from "./uikit/TextField";
import SubmitButton from "./uikit/SubmitButton";

type CategoryInputs = {
	name: string;
};

type CategoryType = {
	__typename?: "Category";
	id: string;
	name: string;
	postsCnt: number;
};

type Props = {
	categories: CategoryType[];
};

export default function Categories(props: Props) {
	const { categories } = props;
	const currentAdmin = useContext(AdminContext);
	const { createCategory } = useCreateCategoryMutation();
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
		setError,
		clearErrors,
	} = useForm<CategoryInputs>({ defaultValues: initialCategory });

	const isErrorCategoryAttributes = (attribute: string): attribute is CategoryAttributes =>
		attribute.includes(attribute);
	const setValidationErrors = (errors) => {
		errors.forEach((error) => {
			const { attribute } = error;
			if (isErrorCategoryAttributes(attribute)) setError(attribute, { message: error.messages.join(" ") });
		});
	};

	const onSubmit = async (input: any) => {
		try {
			const res = await createCategory({ variables: { input: input } });
			console.log(res);
			const { errors } = res.data.createCategory;
			if (errors && errors.length !== 0) {
				setValidationErrors(errors);
			} else {
				clearErrors();
				reset(initialCategory);
			}
		} catch (error) {
			alert(`システムエラーが発生しました。\n${error}`);
		}
	};

	const handleLogout = () => {
		localStorage.setItem("token", "");
		window.location.href = "/";
	};

	return (
		<div className="container-fluid">
			<h2 className="text-center my-4">カテゴリ一覧</h2>
			<ul className="list-group mb-4">
				{categories!.map((category, index: number) => (
					<Category key={index} category={category} />
				))}
			</ul>
			{currentAdmin && (
				<form className="row g-3 mb-4" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						klass="col-12"
						id="name"
						label="カテゴリ名"
						register={register("name")}
						errorText={errors.name?.message}
					/>
					<SubmitButton label="カテゴリ作成" />
				</form>
			)}
			<div>
				{currentAdmin ? (
					<button className="btn btn-secondary" onClick={handleLogout}>
						ログアウト
					</button>
				) : (
					<Link to="/login" className="btn btn-primary">
						管理者ログイン
					</Link>
				)}
			</div>
		</div>
	);
}
