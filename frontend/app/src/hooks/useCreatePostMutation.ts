import { useMutation, gql } from '@apollo/client';

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: createPostInput!) {
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
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION);

  return { createPost, loading, error };
};
