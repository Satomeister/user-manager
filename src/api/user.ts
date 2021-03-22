import axios from "../core/axios";

export const UserApi = {
  getMe: async () => {
    const { data } = await axios.get("/api/user/me");
    return data;
  },
};
