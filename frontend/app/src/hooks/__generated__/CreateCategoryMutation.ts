/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateCategoryInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCategoryMutation
// ====================================================

export interface CreateCategoryMutation_createCategory_errors {
  __typename: "Error";
  attribute: string;
  messages: string[];
}

export interface CreateCategoryMutation_createCategory {
  __typename: "CreateCategoryPayload";
  result: boolean;
  errors: CreateCategoryMutation_createCategory_errors[] | null;
  fullMessages: string[] | null;
}

export interface CreateCategoryMutation {
  createCategory: CreateCategoryMutation_createCategory | null;
}

export interface CreateCategoryMutationVariables {
  input: CreateCategoryInput;
}
