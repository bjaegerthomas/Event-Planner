import axios from 'axios';
import AuthService from '../utils/auth.ts';
import type { Event } from '../interfaces/events.ts';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/events';

export interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
}

// Fetch all events
export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/public`);
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Create a new event (authenticated)
export const createEvent = async (event: Event) => {
  try {
    const token = AuthService.getToken();
    await axios.post(API_URL, event, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Delete an event (authenticated)
export const deleteEvent = async (id: string) => {
  try {
    const token = AuthService.getToken();
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};