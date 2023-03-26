export type Post = {
  id: string;
  status:
    | 'private'
    | 'public';
  authorName: string | null;
  email: string | null;
  title: string | null;
  body: string;
}
