export type Category = {
  id: string;
  name: string;
  postsCnt: number;
}

export type CategoryAttributes = keyof Omit<Category, 'id' | 'postsCnt' >