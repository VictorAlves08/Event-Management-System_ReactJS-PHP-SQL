import { api } from "./api";

export const postLogin = async (userData) => {
  const response = await api.post("/login", {
    email: userData.email,
    password: userData.password
  });
  return response;
};

export const postCreateUser = async (userData) => {
  const response = await api.post("/createUser", {
    name: userData.name,
    email: userData.email,
    password: userData.password
  });
  return response;
};


