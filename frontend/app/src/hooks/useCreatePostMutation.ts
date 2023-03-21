import { useMutation, gql } from '@apollo/client';
import { CreatePostMutation } from '../gql/graphql';

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      result
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useCreatePostMutation = () => {
  const [createPost, { loading, error }] = useMutation<CreatePostMutation>(CREATE_POST_MUTATION);

  return { createPost, loading, error };
};
