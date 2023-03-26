import { useQuery, gql } from '@apollo/client';
import { CurrentAdminQueryQuery as CurrentAdminQuery } from '../gql/graphql';

const CURRENT_ADMIN_QUERY = gql`
  query CurrentAdminQuery {
    currentAdmin {
      id
      accessToken
    }
  }
`;

export const useCurrentAdminQuery = () => {
  const { data, loading, error } = useQuery<CurrentAdminQuery>(CURRENT_ADMIN_QUERY);
  return { data, loading, error };
}
