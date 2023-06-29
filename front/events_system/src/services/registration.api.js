import { api } from "./api";

export const subscribeUserEvent = async (userData) => {
  const response = await api.post('/subscribeUserEvent', {
    id_user: userData.id_user,
    id_event: userData.id_event,
    type_user: "participant"
  });
  return response;
};

export const unsubscribeUserEvent = async (userData) => {
  const response = await api.put("/unsubscribeUserEvent", {
    id_user: userData.id_user,
    id_event: userData.id_event,
  });
  return response;
};
