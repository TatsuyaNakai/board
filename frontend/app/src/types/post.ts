export type Post = {
  id?: string;
  status:
    | 'private'
    | 'public';
  token: string;
  authorName: string | null;
  email: string | null;
  title: string | null;
  body: string;
}

export type PostAttributes = keyof Omit<Post, 'id' | 'status' | 'token' >
