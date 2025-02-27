import { useState, useEffect } from "react";
import { fetchEvents, updateEvent, deleteEvent } from "../api/eventsAPI";
import type { Event } from "../interfaces/event";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        console.log("✅ Events fetched:", data);
        setEvents(Array.isArray(data) ? data : []); // ✅ Ensure data is an array
      } catch (error) {
        console.error("🚨 Error fetching events:", error);
        setEvents([]); // ✅ Prevents .map() error
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleUpdate = (event: Event) => {
    setEditingEvent(event);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
    }
  };

  const handleSave = async () => {
    if (!editingEvent) return;

    try {
      const updatedEvent = (await updateEvent(editingEvent.id, editingEvent)) as unknown as Event;
      setEvents(prevEvents => prevEvents.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
      setEditingEvent(null);
    } catch (error) {
      console.error("🚨 Error updating event:", error);
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deleteEvent(id.toString());
      setEvents(prevEvents => prevEvents.filter(event => event.id !== id.toString()));
    } catch (error) {
      console.error("🚨 Error deleting event:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              {editingEvent && editingEvent.id === event.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={editingEvent.title}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <textarea
                    name="description"
                    value={editingEvent.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <input
                    type="datetime-local"
                    name="date"
                    value={editingEvent.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="location"
                    value={editingEvent.location}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <button onClick={handleSave} className="btn btn-success">Save</button>
                  <button onClick={() => setEditingEvent(null)} className="btn btn-secondary">Cancel</button>
                </div>
              ) : (
                <>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <div className="event-actions">
                    <button onClick={() => handleUpdate(event)} className="btn btn-warning">Update</button>
                    <button onClick={() => handleDelete(event.id)} className="btn btn-danger">Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default Home;

/*
import { useState, useEffect } from "react";
import { fetchEvents, updateEvent, deleteEvent } from "../api/eventsAPI";
import type { Event } from "../interfaces/event";


const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data as Event[]);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleUpdate = (event: Event) => {
    setEditingEvent(event);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
    }
  };

  const handleSave = async () => {
    if (!editingEvent) return;

    try {
      const updatedEvent = (await updateEvent(editingEvent.id, editingEvent)) as unknown as Event; // Cast first to unknown, then Event
      setEvents(prevEvents =>
        prevEvents.map(event => (event.id === updatedEvent.id ? updatedEvent : event))
      );
      setEditingEvent(null);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async (id: string | number) => { // Accepts both string & number
    try {
      await deleteEvent(id.toString()); // Ensures it's passed as a string
      setEvents(prevEvents => prevEvents.filter(event => event.id !== id.toString()));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              {editingEvent && editingEvent.id === event.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={editingEvent.title}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <textarea
                    name="description"
                    value={editingEvent.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <input
                    type="datetime-local"
                    name="date"
                    value={editingEvent.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="location"
                    value={editingEvent.location}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <button onClick={handleSave} className="btn btn-success">Save</button>
                  <button onClick={() => setEditingEvent(null)} className="btn btn-secondary">Cancel</button>
                </div>
              ) : (
                <>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <div className="event-actions">
                    <button onClick={() => handleUpdate(event)} className="btn btn-warning">Update</button>
                    <button onClick={() => handleDelete(event.id)} className="btn btn-danger">Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default Home;
*/