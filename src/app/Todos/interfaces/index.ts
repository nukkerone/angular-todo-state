export interface Pagination {
  first: number;
  last: number;
}

export interface Todo {
  id: string;
  content: string;
  createdAt: string;
  done: boolean;
}
