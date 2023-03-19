/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesQuery
// ====================================================

export interface CategoriesQuery_categories {
  __typename: "Category";
  id: string;
  name: string;
  postsCnt: number;
}

export interface CategoriesQuery {
  categories: CategoriesQuery_categories[] | null;
}
