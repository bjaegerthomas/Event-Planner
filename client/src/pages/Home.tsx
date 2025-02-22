import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null); // Store event being edited

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/events/public");
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleUpdate = (event) => {
    setEditingEvent(event); // Set the event to be edited
  };

  const handleChange = (e) => {
    setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { id, name, description, date, location } = editingEvent;
      await axios.put(`http://localhost:5000/events/${id}`, {
        name,
        description,
        date,
        location,
      });

      setEvents(events.map(event => (event.id === id ? editingEvent : event)));
      setEditingEvent(null); // Hide edit form after saving
    } catch (error) {
      console.error("Error updating event", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              {editingEvent && editingEvent.id === event.id ? (
                // Edit Form
                <div className="edit-form">
                  <input
                    type="text"
                    name="name"
                    value={editingEvent.name}
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
                  <button onClick={handleSave} className="btn btn-success">
                    Save
                  </button>
                  <button onClick={() => setEditingEvent(null)} className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              ) : (
                // Display Event Details
                <>
                  <h2>{event.name}</h2>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleString()}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <div className="event-actions">
                    <button onClick={() => handleUpdate(event)} className="btn btn-warning">
                      Update
                    </button>
                    <button onClick={() => handleDelete(event.id)} className="btn btn-danger">
                      Delete
                    </button>
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
