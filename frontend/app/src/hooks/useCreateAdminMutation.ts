import { useMutation, gql } from '@apollo/client';

const CREATE_ADMIN_MUTATION = gql`
  mutation CreateAdminMutation($input: createAdminInput!) {
    createAdmin(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useCreateAdminMutation = () => {
  const [createAdmin, { loading, error }] = useMutation(CREATE_ADMIN_MUTATION);

  return { createAdmin, loading, error };
};
