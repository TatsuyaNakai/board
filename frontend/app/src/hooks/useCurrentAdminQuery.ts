import { useQuery, gql } from '@apollo/client';
import { CurrentAdminQuery } from './__generated__/CurrentAdminQuery'

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
