/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateAdminInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAdminMutation
// ====================================================

export interface CreateAdminMutation_createAdmin_admin {
  __typename: "Admin";
  id: string;
  email: string;
  accessToken: string;
}

export interface CreateAdminMutation_createAdmin_errors {
  __typename: "Error";
  attribute: string;
  messages: string[];
}

export interface CreateAdminMutation_createAdmin {
  __typename: "CreateAdminPayload";
  admin: CreateAdminMutation_createAdmin_admin | null;
  errors: CreateAdminMutation_createAdmin_errors[] | null;
  fullMessages: string[] | null;
}

export interface CreateAdminMutation {
  createAdmin: CreateAdminMutation_createAdmin | null;
}

export interface CreateAdminMutationVariables {
  input: CreateAdminInput;
}
