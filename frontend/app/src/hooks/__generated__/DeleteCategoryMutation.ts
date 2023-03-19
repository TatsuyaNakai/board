/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DeleteCategoryInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteCategoryMutation
// ====================================================

export interface DeleteCategoryMutation_deleteCategory {
  __typename: "DeleteCategoryPayload";
  result: boolean;
}

export interface DeleteCategoryMutation {
  deleteCategory: DeleteCategoryMutation_deleteCategory | null;
}

export interface DeleteCategoryMutationVariables {
  input: DeleteCategoryInput;
}
