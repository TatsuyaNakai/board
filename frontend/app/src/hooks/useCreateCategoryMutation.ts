import { useMutation, gql } from '@apollo/client';

const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategoryMutation($input: createCategoryInput!) {
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
  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY_MUTATION);

  return { createCategory, loading, error };
};
