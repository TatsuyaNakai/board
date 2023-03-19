/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PostStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PostsQuery
// ====================================================

export interface PostsQuery_categoryPosts {
  __typename: "Post";
  id: string;
  status: PostStatus;
  authorName: string | null;
  email: string | null;
  title: string | null;
  body: string;
}

export interface PostsQuery {
  categoryPosts: PostsQuery_categoryPosts[] | null;
}

export interface PostsQueryVariables {
  categoryId: string;
}
