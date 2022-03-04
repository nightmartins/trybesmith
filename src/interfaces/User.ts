export interface InUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface InCreateUser extends InUser {
  id: number;
}
