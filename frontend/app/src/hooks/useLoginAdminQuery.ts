import { useQuery, gql } from '@apollo/client';

const LOGIN_ADMIN_QUERY = gql`
  query LoginAdminQuery {
    admin {
      id
      accessToken
    }
  }
`;

export const useLoginAdminQuery = () => {
  const { data, loading, error } = useQuery(LOGIN_ADMIN_QUERY);
  return { data, loading, error };
}
