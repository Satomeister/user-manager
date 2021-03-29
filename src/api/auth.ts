import axios from "../core/axios";

import {
  FetchLoginPayload,
  FetchSignupPayload,
} from "../store/ducks/auth/contracts/state";

const baseUrl = "/api/auth";

export const AuthApi = {
  signup: async (payload: FetchSignupPayload) => {
    const { data } = await axios.post(baseUrl + "/signup", payload);
    return data;
  },
  login: async (payload: FetchLoginPayload) => {
    const { data } = await axios.post(baseUrl + "/signin", payload);
    return data;
  },
  logout: async () => {
    await axios.get(baseUrl + "/logout");
  },
  refresh: async () => {
    const { data } = await axios.get(baseUrl + `/refresh`);
    return data;
  },
};
