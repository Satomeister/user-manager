export interface FetchLoginPayload {
  email: string;
  password: string;
}

export interface FetchSignupPayload {
  fullname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
