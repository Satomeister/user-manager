import axios from "../core/axios";

import {
  FetchLoginPayload,
  FetchSignupPayload,
} from "../store/ducks/auth/contracts/state";

export const AuthApi = {
  signup: async (payload: FetchSignupPayload) => {
    const { data } = await axios.post("/api/auth/signup", payload);
    return data;
  },
  login: async (payload: FetchLoginPayload) => {
    const { data } = await axios.post("/api/auth/signin", payload);
    return data;
  },
};
