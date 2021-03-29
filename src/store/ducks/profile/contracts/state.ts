export interface Profile {
  _id: string;
  owner: string;
  name: string;
  gender: "male" | "female";
  city: string;
  birthdate: Date;
  createdAt: Date;
}

export interface FetchCreateProfilePayload {
  name: string;
  city: string;
  gender: "male" | "female";
  birthdate: Date;
}

export interface FetchDeleteProfilePayload {
  profileId: string;
  userId: string;
}

export interface FetchEditProfilePayload {
  _id: string;
  name: string;
  city: string;
  gender: "male" | "female";
  birthdate: Date;
  userId: string;
}

export interface FetchGetNewProfilesChunkPayload {
  page: number;
  userId: string;
}

export interface SetNewProfilesChunkPayload {
  userId: string;
  profiles: Profile[];
}
