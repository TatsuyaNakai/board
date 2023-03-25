import type { Category } from "../types/category"
import type { Post } from "../types/post"

export const initialCategory: Category = {
  id: '',
  name: '',
  postsCnt: 0,
}

export const initialPost: Post = {
  id: null,
  status:'public',
  authorName: '',
  email: '',
  title: '',
  body: '',
}

export const initialAdmin = {
  email: '',
  password: '',
}
