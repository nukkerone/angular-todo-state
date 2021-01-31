export interface Pagination {
  first: number;
  last: number;
}

export interface Todo {
  id: number;
  content: string;
  createdAt: string;
  done: boolean;
}
