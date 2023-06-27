import { api } from "./api";

export const getUsers = async (id_user) => {
  const response = await api.get(`/user?id=${id_user}`);
  return response;
}
