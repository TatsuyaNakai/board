import { useQuery, gql } from '@apollo/client';
import { LoginAdminQueryQuery as LoginAdminQuery } from '../gql/graphql';

const LOGIN_ADMIN_QUERY = gql`
  query LoginAdminQuery {
    loginAdmin {
      id
      accessToken
    }
  }
`;

export const useLoginAdminQuery = (email, password) => {
  const { data, loading, error } = useQuery<LoginAdminQuery>(LOGIN_ADMIN_QUERY, {
    variables: { email: email, password: password }
  });
  return { data, loading, error };
}
