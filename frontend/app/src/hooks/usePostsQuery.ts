import { useQuery, gql } from "@apollo/client";
import { PostsQueryQuery as PostsQuery } from "../gql/graphql";

export const POSTS_QUERY = gql`
	query PostsQuery($id: ID!) {
		categoryPosts(categoryId: $id) {
			id
			status
			token
			authorName
			email
			title
			body
		}
	}
`;

export const usePostsQuery = (id: any) => {
	const { data, loading, error } = useQuery<PostsQuery>(POSTS_QUERY, {
		variables: { id },
	});
	return { data, loading, error };
};
