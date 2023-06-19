import { api } from "./api";

export const getAllEvents = async () => {
  const response = await api.get("/allEvents");
  return response;
};

