import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

import { useDeleteCategoryMutation } from "./hooks/useDeleteCategoryMutation";
import { useUpdateCategoryMutation } from "./hooks/useUpdateCategoryMutation";
import { CategoryAttributes } from "./types/category";
import { AdminContext } from "./utils/AdminProvider";
import TextField from "./uikit/TextField";
import SubmitButton from "./uikit/SubmitButton";

type Props = {
	category: {
		id: string;
		name: string;
		postsCnt: number;
	};
};

type CategoryInputs = {
	id: string;
	name: string;
};

export default function Category(props: Props) {
	const currentAdmin = useContext(AdminContext);
	const {
		category: { id, name, postsCnt },
	} = props;
	const { deleteCategory } = useDeleteCategoryMutation();
	const { updateCategory } = useUpdateCategoryMutation();
	const {
		formState: { errors },
		register,
		handleSubmit,
		setError,
		clearErrors,
	} = useForm<CategoryInputs>({ defaultValues: { name: name } });

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const isErrorCategoryAttributes = (attribute: string): attribute is CategoryAttributes =>
		attribute.includes(attribute);
	const setValidationErrors = (errors) => {
		errors.forEach((error) => {
			const { attribute } = error;
			if (isErrorCategoryAttributes(attribute)) setError(attribute, { message: error.messages.join(" ") });
		});
	};

	const onSubmit = async (input: any) => {
		handleClose();
		try {
			const res = await updateCategory({
				variables: { input: { id, ...input } },
			});
			const { errors } = res.data.updateCategory;
			if (errors && errors.length !== 0) {
				setValidationErrors(errors);
			} else {
				clearErrors();
			}
		} catch (error) {
			alert(`システムエラーが発生しました。\n${error}`);
		}
	};

	const callDeleteCategory = (id: string) => {
		if (window.confirm("カテゴリ内の投稿も削除されますがよろしいですか？")) {
			try {
				deleteCategory({ variables: { input: { id } } });
			} catch (error) {
				alert(`システムエラーが発生しました。\n${error}`);
			}
		}
	};

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<Link to={`/categories/${id}`}>{name}</Link>
			{currentAdmin && (
				<>
					<Badge pill bg="secondary">
						{postsCnt}
					</Badge>
					<Button variant="danger" onClick={() => callDeleteCategory(id)}>
						削除する
					</Button>
					<Button variant="primary" onClick={handleShow}>
						編集する
					</Button>
					{/* Modal */}
					<Modal show={show} onHide={handleClose}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Modal.Header closeButton>
								<Modal.Title>カテゴリ編集</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<TextField
									klass=""
									id="name"
									label="カテゴリ名"
									register={register("name")}
									errorText={errors.name?.message}
								/>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									閉じる
								</Button>
								<SubmitButton label="更新" />
							</Modal.Footer>
						</form>
					</Modal>
				</>
			)}
		</li>
	);
}
