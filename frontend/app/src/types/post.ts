import { PostStatus } from "../gql/graphql";

export type Post = {
	id?: string;
	status: PostStatus;
	token: string;
	authorName?: string;
	email?: string;
	title?: string;
	body: string;
};

export type PostAttributes = keyof Omit<Post, "id" | "status" | "token">;
