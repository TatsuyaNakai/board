import { useMutation, gql } from '@apollo/client';
import { CreateAdminMutation } from './__generated__/CreateAdminMutation';

const CREATE_ADMIN_MUTATION = gql`
  mutation CreateAdminMutation($input: CreateAdminInput!) {
    createAdmin(input: $input) {
      admin {
        id
        email
        accessToken
      }
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useCreateAdminMutation = () => {
  const [createAdmin, { loading, error }] = useMutation<CreateAdminMutation>(CREATE_ADMIN_MUTATION);

  return { createAdmin, loading, error };
};
