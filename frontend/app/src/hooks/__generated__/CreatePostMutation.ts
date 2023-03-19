/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreatePostInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePostMutation
// ====================================================

export interface CreatePostMutation_createPost_errors {
  __typename: "Error";
  attribute: string;
  messages: string[];
}

export interface CreatePostMutation_createPost {
  __typename: "CreatePostPayload";
  result: boolean;
  errors: CreatePostMutation_createPost_errors[] | null;
  fullMessages: string[] | null;
}

export interface CreatePostMutation {
  createPost: CreatePostMutation_createPost | null;
}

export interface CreatePostMutationVariables {
  input: CreatePostInput;
}
