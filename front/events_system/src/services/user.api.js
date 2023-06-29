import { api } from "./api";

export const getUsers = async (id_user) => {
  const response = await api.get(`/user?id=${id_user}`);
  return response;
}

export const putUserEdit = async (userData) => {
  const response = await api.put("/editUser", {
    id_user: userData.id_user,
    name: userData.name,
    email: userData.email,
    password: userData.password
  });
  return response;
}
