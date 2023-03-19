import { useMutation, gql } from '@apollo/client';

const DELETE_CATEGORY_MUTATION = gql`
  mutation DeleteCategoryMutation($input: deleteCategoryInput!) {
    deleteCategory(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useDeleteCategoryMutation = () => {
  const [deleteCategory, { loading, error }] = useMutation(DELETE_CATEGORY_MUTATION);

  return { deleteCategory, loading, error };
};
