import { useQuery, gql } from '@apollo/client';

const CURRENT_ADMIN_QUERY = gql`
  query CurrentAdminQuery {
    admin {
      id
      accessToken
    }
  }
`;

export const useCurrentAdminQuery = () => {
  const { data, loading, error } = useQuery(CURRENT_ADMIN_QUERY);
  return { data, loading, error };
}
