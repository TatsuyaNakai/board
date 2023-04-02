import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { nanoid } from "nanoid";

import { usePostsQuery } from "./hooks/usePostsQuery";
import { useCreatePostMutation } from "./hooks/useCreatePostMutation";
import { Post as PostType, PostAttributes } from "./types/post";
import { initialPost } from "./constants/initialState";
import { AdminContext } from "./utils/AdminProvider";
import Post from "./Post";
import TextField from "./uikit/TextField";
import TextArea from "./uikit/TextArea";
import SubmitButton from "./uikit/SubmitButton";

type FormInputs = {
	title: string;
	authorName: string;
	email: string;
	body: string;
};

type Props = {
	id: string;
	categoryName: string;
};

export default function Posts(props: Props) {
	const { id, categoryName } = props;
	const currentAdmin = useContext(AdminContext);
	const { data, loading, error } = usePostsQuery(id);
	const { createPost } = useCreatePostMutation();
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
		setError,
		clearErrors,
	} = useForm<FormInputs>({ defaultValues: initialPost });
	const [cookies, setCookie] = useCookies(["token"]);

	// cookie生成
	if (!cookies.token) setCookie("token", nanoid());

	const filterCategoryPosts = (posts: PostType[]) => {
		if (!currentAdmin) {
			return posts.filter((post) => post.status === "public");
		} else {
			return posts;
		}
	};

	const isErrorPostAttributes = (
		attribute: string
	): attribute is PostAttributes => attribute.includes(attribute);
	const setValidationErrors = (errors) => {
		errors.forEach((error) => {
			const { attribute } = error;
			if (isErrorPostAttributes(attribute))
				setError(attribute, { message: error.messages.join(" ") });
		});
	};

	const onSubmit = async (input: FormInputs) => {
		try {
			// 投稿作成
			const res = await createPost({
				variables: {
					input: { ...input, categoryId: id, token: cookies.token },
				},
			});
			const { errors } = res.data.createPost;
			if (errors && errors.length !== 0) {
				setValidationErrors(errors);
			} else {
				clearErrors();
				reset(initialPost);
			}
		} catch (error) {
			// alert(`システムエラーが発生しました。\n${error}`)
			console.log(error);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div className='container-fluid'>
			<Link to='/'>トップへ戻る</Link>
			<h2 className='text-center my-4'>{categoryName}</h2>
			<ul className='list-group list-group-flush mb-4'>
				{filterCategoryPosts(data.categoryPosts).length === 0 ? (
					<p className='text-center my-4'>
						まだ投稿がありません、投稿してみましょう！
					</p>
				) : (
					filterCategoryPosts(data.categoryPosts).map((post, index) => (
						<Post key={index} post={post} />
					))
				)}
			</ul>
			{!currentAdmin && (
				<form className='row g-3 mb-4' onSubmit={handleSubmit(onSubmit)}>
					<TextField
						klass='col-md-6'
						id='authorName'
						label='名前'
						register={register("authorName")}
						errorText={errors.authorName?.message}
					/>
					<TextField
						klass='col-md-6'
						id='email'
						label='メールアドレス'
						register={register("email")}
						errorText={errors.email?.message}
					/>
					<TextField
						klass='col-12'
						id='title'
						label='件名'
						register={register("title")}
						errorText={errors.title?.message}
					/>
					<TextArea
						klass='col-12'
						id='body'
						label='本文'
						register={register("body")}
						errorText={errors.body?.message}
					/>
					<SubmitButton label='投稿' />
				</form>
			)}
		</div>
	);
}
