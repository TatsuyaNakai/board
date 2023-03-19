import { useQuery, gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
      postsCnt
    }
  }
`;

export const useCategoriesQuery = () => {
  const { data, loading, error } = useQuery(CATEGORIES_QUERY);
  return { data, loading, error };
}