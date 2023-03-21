import { useQuery, gql } from '@apollo/client';
import { PostsQuery } from '../gql/graphql';

const POSTS_QUERY = gql`
  query PostsQuery($categoryId: ID!) {
    categoryPosts(categoryId: $categoryId) {
      id
      status
      authorName
      email
      title
      body
    }
  }
`;

export const usePostsQuery = () => {
  const { data, loading, error } = useQuery<PostsQuery>(POSTS_QUERY);
  return { data, loading, error };
}
