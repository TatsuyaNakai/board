import { useLazyQuery, gql } from '@apollo/client';
import { LoginAdminQueryQuery as LoginAdminQuery } from '../gql/graphql';

const LOGIN_ADMIN_QUERY = gql`
  query LoginAdminQuery($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      admin {
        id
        accessToken
      }
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useLoginAdminQuery = () => {
  const [loginAdmin, { data, loading, error }] = useLazyQuery<LoginAdminQuery>(LOGIN_ADMIN_QUERY);
  return { loginAdmin, data, loading, error };
}
