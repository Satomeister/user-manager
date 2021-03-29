import axios from "../core/axios";
import {
  FetchCreateProfilePayload,
  FetchEditProfilePayload,
  FetchGetNewProfilesChunkPayload,
} from "../store/ducks/profile/contracts/state";

const baseUrl = "/api/profile";

export const ProfileApi = {
  create: async (payload: FetchCreateProfilePayload) => {
    const { data } = await axios.post(baseUrl, payload);
    return data;
  },
  getNewChunk: async (payload: FetchGetNewProfilesChunkPayload) => {
    const { data } = await axios.get(
      baseUrl + `/${payload.userId}/?page=${payload.page}`
    );
    return data;
  },
  delete: async (profileId: string) => {
    await axios.delete(baseUrl + `/${profileId}`);
  },
  edit: async (payload: FetchEditProfilePayload) => {
    const { data } = await axios.put(baseUrl + `/edit/${payload._id}`, payload);
    return data;
  },
};
