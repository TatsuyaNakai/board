/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CategoriesQuery {\n    categories {\n      id\n      name\n      postsCnt\n    }\n  }\n": types.CategoriesQueryDocument,
    "\n  mutation CreateAdminMutation($input: CreateAdminInput!) {\n    createAdmin(input: $input) {\n      admin {\n        id\n        email\n        accessToken\n      }\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n": types.CreateAdminMutationDocument,
    "\n  mutation CreateCategoryMutation($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n": types.CreateCategoryMutationDocument,
    "\n  mutation CreatePostMutation($input: CreatePostInput!) {\n    createPost(input: $input) {\n      result\n      categoryId\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n": types.CreatePostMutationDocument,
    "\n  query CurrentAdminQuery {\n    currentAdmin {\n      id\n      accessToken\n    }\n  }\n": types.CurrentAdminQueryDocument,
    "\n  mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n    deleteCategory(input: $input) {\n      result\n    }\n  }\n": types.DeleteCategoryMutationDocument,
    "\n  query LoginAdminQuery($email: String, $password: String) {\n    loginAdmin(email: $email, password: $password) {\n      admin {\n        id\n        accessToken\n      }\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n": types.LoginAdminQueryDocument,
    "\n  query PostsQuery($id: ID!) {\n    categoryPosts(categoryId: $id) {\n      id\n      status\n      authorName\n      email\n      title\n      body\n    }\n  }\n": types.PostsQueryDocument,
    "\n  mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {\n    updateCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n": types.UpdateCategoryMutationDocument,
    "\n  mutation UpdatePostMutation($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      result\n      categoryId\n    }\n  }\n": types.UpdatePostMutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CategoriesQuery {\n    categories {\n      id\n      name\n      postsCnt\n    }\n  }\n"): (typeof documents)["\n  query CategoriesQuery {\n    categories {\n      id\n      name\n      postsCnt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAdminMutation($input: CreateAdminInput!) {\n    createAdmin(input: $input) {\n      admin {\n        id\n        email\n        accessToken\n      }\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAdminMutation($input: CreateAdminInput!) {\n    createAdmin(input: $input) {\n      admin {\n        id\n        email\n        accessToken\n      }\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCategoryMutation($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategoryMutation($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePostMutation($input: CreatePostInput!) {\n    createPost(input: $input) {\n      result\n      categoryId\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePostMutation($input: CreatePostInput!) {\n    createPost(input: $input) {\n      result\n      categoryId\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CurrentAdminQuery {\n    currentAdmin {\n      id\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  query CurrentAdminQuery {\n    currentAdmin {\n      id\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n    deleteCategory(input: $input) {\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n    deleteCategory(input: $input) {\n      result\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginAdminQuery($email: String, $password: String) {\n    loginAdmin(email: $email, password: $password) {\n      admin {\n        id\n        accessToken\n      }\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"): (typeof documents)["\n  query LoginAdminQuery($email: String, $password: String) {\n    loginAdmin(email: $email, password: $password) {\n      admin {\n        id\n        accessToken\n      }\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PostsQuery($id: ID!) {\n    categoryPosts(categoryId: $id) {\n      id\n      status\n      authorName\n      email\n      title\n      body\n    }\n  }\n"): (typeof documents)["\n  query PostsQuery($id: ID!) {\n    categoryPosts(categoryId: $id) {\n      id\n      status\n      authorName\n      email\n      title\n      body\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {\n    updateCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {\n    updateCategory(input: $input) {\n      result\n      errors {\n        attribute\n        messages\n      }\n      fullMessages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePostMutation($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      result\n      categoryId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePostMutation($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      result\n      categoryId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
