import { Profile } from "../../profile/contracts/state";

export interface User {
  _id: string;
  fullname: string;
  email: string;
  isAdmin: boolean;
  profiles: Profile[];
  profilesCount: number;
  createdAt: string;
}

export const PAGE_SIZE = 5;
