import { gql, useQuery } from "@apollo/client";
import { LoginAdminQueryQuery as LoginAdminQuery } from "../gql/graphql";

const LOGIN_ADMIN_QUERY = gql`
	query LoginAdminQuery($email: String, $password: String) {
		loginAdmin(email: $email, password: $password) {
			admin {
				id
				accessToken
			}
			result
			errors {
				attribute
				messages
			}
			fullMessages
		}
	}
`;

export const useLoginAdminQuery = (input: any) => {
	const { refetch } = useQuery<LoginAdminQuery>(LOGIN_ADMIN_QUERY, {
		skip: !input.email === null || !input.password === null,
	});
	return { refetch };
};
