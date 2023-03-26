import { useQuery, gql } from '@apollo/client';
import { CategoriesQueryQuery as CategoriesQuery } from '../gql/graphql'

export const CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
      postsCnt
    }
  }
`;

export const useCategoriesQuery = () => {
  const { data, loading, error } = useQuery<CategoriesQuery>(CATEGORIES_QUERY);
  return { data, loading, error };
}
