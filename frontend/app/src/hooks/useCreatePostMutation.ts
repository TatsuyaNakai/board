import { useMutation, gql } from '@apollo/client';
import { CreatePostMutationMutation as CreatePostMutation } from '../gql/graphql';

import { POSTS_QUERY } from './usePostsQuery';

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      result
      categoryId
      errors {
        attribute
        messages
      }
      fullMessages
    }
  }
`;

export const useCreatePostMutation = () => {
  const [createPost, { loading, error }] = useMutation<CreatePostMutation>(CREATE_POST_MUTATION, {
    refetchQueries: ((mutationResult) => 
      [
        {
          query: POSTS_QUERY,
          variables: { id : mutationResult.data.createPost.categoryId }
        }
      ]
    )
  });

  return { createPost, loading, error };
};
