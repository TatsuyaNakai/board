import { useMutation, gql } from '@apollo/client';

const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($input: updatePostInput!) {
    updatePost(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useUpdatePostMutation = () => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    refetchQueries: ['PostsQuery'],
  });

  return { updatePost, loading, error };
};
