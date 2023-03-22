import { useQuery, gql } from '@apollo/client';
import { PostsQuery } from '../gql/graphql';

const POSTS_QUERY = gql`
  query PostsQuery($id: ID!) {
    categoryPosts(categoryId: $id) {
      id
      status
      authorName
      email
      title
      body
    }
  }
`;

export const usePostsQuery = (id: any) => {
  const { data, loading, error } = useQuery<PostsQuery>(POSTS_QUERY, { variables: { id } });
  return { data, loading, error };
}
