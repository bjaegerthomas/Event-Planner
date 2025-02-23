import axios from "axios";

const API_URL = "http://localhost:5000/events";

// Fetch all public events
export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/public`);
    return data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};

// Update an event
export const updateEvent = async (id, updatedEvent) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedEvent);
    return updatedEvent;
  } catch (error) {
    console.error("Error updating event", error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error("Error deleting event", error);
    throw error;
  }
};
