import { useMutation, gql } from '@apollo/client';
import { DeleteCategoryMutation } from './__generated__/DeleteCategoryMutation'

const DELETE_CATEGORY_MUTATION = gql`
  mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
      result
    }
  }
`;

export const useDeleteCategoryMutation = () => {
  const [deleteCategory, { loading, error }] = useMutation<DeleteCategoryMutation>(DELETE_CATEGORY_MUTATION);

  return { deleteCategory, loading, error };
};
