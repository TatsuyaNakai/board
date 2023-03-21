import { useMutation, gql } from '@apollo/client';
import { UpdatePostMutation } from '../gql/graphql'

const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($input: UpdatePostInput!) {
    updatePost(input: $input) {
      result
    }
  }
`;

export const useUpdatePostMutation = () => {
  const [updatePost, { loading, error }] = useMutation<UpdatePostMutation>(UPDATE_POST_MUTATION, {
    refetchQueries: ['PostsQuery'],
  });

  return { updatePost, loading, error };
};
