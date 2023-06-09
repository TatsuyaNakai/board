import { useMutation, gql } from "@apollo/client";
import { UpdateCategoryMutationMutation as UpdateCategoryMutation } from "../gql/graphql";

const UPDATE_CATEGORY_MUTATION = gql`
	mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {
		updateCategory(input: $input) {
			result
			errors {
				attribute
				messages
			}
			fullMessages
		}
	}
`;

export const useUpdateCategoryMutation = () => {
	const [updateCategory, { loading, error }] = useMutation<UpdateCategoryMutation>(UPDATE_CATEGORY_MUTATION, {
		refetchQueries: ["CategoriesQuery"],
	});

	return { updateCategory, loading, error };
};
