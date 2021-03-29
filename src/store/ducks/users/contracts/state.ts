export interface EditUserState {
  fullname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface FetchEditUserPayload {
  values: EditUserState;
  userId: string;
}
