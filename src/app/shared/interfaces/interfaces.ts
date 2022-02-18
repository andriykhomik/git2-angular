export interface Users {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}

export interface User {
  login: string;
}
