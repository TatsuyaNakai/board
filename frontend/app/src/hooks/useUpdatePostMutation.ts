import { useMutation, gql } from "@apollo/client";
import { UpdatePostMutationMutation as UpdatePostMutation } from "../gql/graphql";

import { POSTS_QUERY } from "./usePostsQuery";

const UPDATE_POST_MUTATION = gql`
	mutation UpdatePostMutation($input: UpdatePostInput!) {
		updatePost(input: $input) {
			result
			categoryId
		}
	}
`;

export const useUpdatePostMutation = () => {
	const [updatePost, { loading, error }] = useMutation<UpdatePostMutation>(UPDATE_POST_MUTATION, {
		refetchQueries: (mutationResult) => [
			{
				query: POSTS_QUERY,
				variables: { id: mutationResult.data.updatePost.categoryId },
			},
		],
	});

	return { updatePost, loading, error };
};
