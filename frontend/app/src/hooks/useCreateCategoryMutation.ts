import { useMutation, gql } from '@apollo/client';
import { CreateCategoryMutation } from './__generated__/CreateCategoryMutation'

const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategoryMutation($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useCreateCategoryMutation = () => {
  const [createCategory, { loading, error }] = useMutation<CreateCategoryMutation>(CREATE_CATEGORY_MUTATION);

  return { createCategory, loading, error };
};