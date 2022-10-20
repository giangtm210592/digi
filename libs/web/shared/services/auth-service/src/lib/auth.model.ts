export interface NewUser {
  username: string;
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
}

export interface User {
  username: string;
  email: string;
  fullName?: string;
  phone?: string;
}

export interface AuthedUser {
  user: User;
  accessToken: string;
}

export interface LoginReqBody {
  username: string;
  password: string;
}
