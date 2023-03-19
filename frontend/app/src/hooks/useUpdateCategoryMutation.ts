import { useMutation, gql } from '@apollo/client';

const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategoryMutation($input: updateCategoryInput!) {
    updateCategory(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useUpdateCategoryMutation = () => {
  const [updateCategory, { loading, error }] = useMutation(UPDATE_CATEGORY_MUTATION, {
    refetchQueries: ['CategoriesQuery'],
  });

  return { updateCategory, loading, error };
};
