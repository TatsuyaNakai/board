/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePostMutation
// ====================================================

export interface UpdatePostMutation_updatePost {
  __typename: "UpdatePostPayload";
  result: boolean;
}

export interface UpdatePostMutation {
  updatePost: UpdatePostMutation_updatePost | null;
}

export interface UpdatePostMutationVariables {
  input: UpdatePostInput;
}
