import axios from "../core/axios";
import { FetchEditUserPayload } from "../store/ducks/users/contracts/state";

const baseUrl = "/api/user";

export const UsersApi = {
  getMe: async () => {
    const { data } = await axios.get(baseUrl + "/me");
    return data;
  },
  getAll: async (page: number) => {
    const { data } = await axios.get(baseUrl + `/?page=${page}`);
    return data;
  },
  getById: async (userId: string) => {
    const { data } = await axios.get(baseUrl + `/${userId}`);
    return data;
  },
  delete: async (userId: string) => {
    const { data } = await axios.delete(baseUrl + `/${userId}`);
    return data;
  },
  edit: async (payload: FetchEditUserPayload) => {
    const { data } = await axios.put(
      baseUrl + `/${payload.userId}`,
      payload.values
    );
    return data;
  },
  getUsersData: async () => {
    const { data } = await axios.get(baseUrl + "/data");
    return data;
  },
  getTotalUsersCount: async () => {
    const { data } = await axios.get(baseUrl + "/count");
    return data;
  },
};
