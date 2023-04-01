import { useMutation, gql } from "@apollo/client";
import { CreateCategoryMutationMutation as CreateCategoryMutation } from "../gql/graphql";

const CREATE_CATEGORY_MUTATION = gql`
	mutation CreateCategoryMutation($input: CreateCategoryInput!) {
		createCategory(input: $input) {
			result
			errors {
				attribute
				messages
			}
			fullMessages
		}
	}
`;

export const useCreateCategoryMutation = () => {
	const [createCategory, { loading, error }] =
		useMutation<CreateCategoryMutation>(CREATE_CATEGORY_MUTATION, {
			refetchQueries: ["CategoriesQuery"],
		});

	return { createCategory, loading, error };
};
