import { useMutation, gql } from "@apollo/client";
import { CreateAdminMutationMutation as CreateAdminMutation } from "../gql/graphql";

const CREATE_ADMIN_MUTATION = gql`
	mutation CreateAdminMutation($input: CreateAdminInput!) {
		createAdmin(input: $input) {
			admin {
				id
				email
				accessToken
			}
			errors {
				attribute
				messages
			}
			fullMessages
		}
	}
`;

export const useCreateAdminMutation = () => {
	const [createAdmin, { loading, error }] = useMutation<CreateAdminMutation>(
		CREATE_ADMIN_MUTATION
	);

	return { createAdmin, loading, error };
};
