import clientApi from "./axios";

const authApi = {
  login: async () => {
    return await clientApi(`oauth2/authorization/google`);
  },
};

export default authApi;
