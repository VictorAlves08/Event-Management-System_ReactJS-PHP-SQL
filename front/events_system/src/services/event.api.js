import { api } from "./api";

export const getAllEvents = async () => {
  const response = await api.get("/allEvents");
  return response;
};

export const postCreateEvent = async (eventData) => {
  const response = await api.post("/createEvent", {
    title: eventData.title,
    description: eventData.description,
    dateTime: `${eventData.date} ${eventData.time}`,
    location: eventData.location,
    price: eventData.price,
    image_url: eventData.image_url || 'https://events.liveto.io/_next/static/media/default_event.82c17d7a.png',
    type: eventData.type,
    id_user: eventData.id_user
  });
  return response;
};

export const putUpdateEvent = async (eventData) => {
  const response = await api.put("/updateEvent", {
    title: eventData.title,
    description: eventData.description,
    dateTime: `${eventData.date} ${eventData.time}`,
    location: eventData.location,
    price: eventData.price,
    image_url: eventData.image_url,
    type: eventData.type,
    id_event: eventData.id_event
  });
  return response;
};

export const deleteEvent = async (id_event) => {
  const response = await api.post("/deleteEvent", {
    id_event: id_event
  });
  return response;
};
