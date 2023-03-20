import { useQuery, gql } from '@apollo/client';

const CATEGORY_QUERY = gql`
  query CategoryQuery($id: ID!) {
    categories(id: $id) {
      id
      name
      postsCnt
    }
  }
`;

export const useCategoryQuery = (id: any) => {
  const { data, loading, error } = useQuery(CATEGORY_QUERY, { variables: { id } });
  return { data, loading, error };
}
