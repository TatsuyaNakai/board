import { useQuery, gql } from '@apollo/client';
import { LoginAdminQuery } from './__generated__/LoginAdminQuery'

const LOGIN_ADMIN_QUERY = gql`
  query LoginAdminQuery {
    loginAdmin {
      id
      accessToken
    }
  }
`;

export const useLoginAdminQuery = () => {
  const { data, loading, error } = useQuery<LoginAdminQuery>(LOGIN_ADMIN_QUERY);
  return { data, loading, error };
}
