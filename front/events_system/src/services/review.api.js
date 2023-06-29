import { api } from "./api";

export const createReview = async (userData) => {
  const response = await api.post('/createReview', {
    id_user: userData.id_user,
    id_event: userData.id_event,
    score: userData.score,
    comment: userData.comment
  });
  return response;
};

export const deleteReview = async (id_review) => {
  const response = await api.put("/deleteReview", {
    id_review: id_review,
  });
  return response;
};
