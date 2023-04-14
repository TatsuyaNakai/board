import { useMutation, gql } from "@apollo/client";
import { DeleteCategoryMutationMutation as DeleteCategoryMutation } from "../gql/graphql";

const DELETE_CATEGORY_MUTATION = gql`
	mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {
		deleteCategory(input: $input) {
			result
		}
	}
`;

export const useDeleteCategoryMutation = () => {
	const [deleteCategory, { loading, error }] = useMutation<DeleteCategoryMutation>(DELETE_CATEGORY_MUTATION, {
		refetchQueries: ["CategoriesQuery"],
	});

	return { deleteCategory, loading, error };
};
