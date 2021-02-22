export enum LoginTypes {
  VALIDATE = 'VALIDATE',
  USER = 'USER',
}

export interface Login {
  submitted: boolean;
  isValid: boolean;
}

export interface User {
  email: string;
  password: string;
}

export interface fetchAction {
  error?: string;
  meta?: string;
  payload: User;
  type: string;
}

export interface LoginState {
  readonly data: Login;
  readonly error: boolean;
}
