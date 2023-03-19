import { useQuery, gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query PostsQuery($category_id: ID!) {
    posts(id: $id) {
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
  const { data, loading, error } = useQuery(POSTS_QUERY);
  return { data, loading, error };
}
