/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentAdminQuery
// ====================================================

export interface CurrentAdminQuery_currentAdmin {
  __typename: "Admin";
  id: string;
  accessToken: string;
}

export interface CurrentAdminQuery {
  currentAdmin: CurrentAdminQuery_currentAdmin | null;
}
