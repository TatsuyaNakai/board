/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdateCategoryInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCategoryMutation
// ====================================================

export interface UpdateCategoryMutation_updateCategory_errors {
  __typename: "Error";
  attribute: string;
  messages: string[];
}

export interface UpdateCategoryMutation_updateCategory {
  __typename: "UpdateCategoryPayload";
  result: boolean;
  errors: UpdateCategoryMutation_updateCategory_errors[] | null;
  fullMessages: string[] | null;
}

export interface UpdateCategoryMutation {
  updateCategory: UpdateCategoryMutation_updateCategory | null;
}

export interface UpdateCategoryMutationVariables {
  input: UpdateCategoryInput;
}
