import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Landing = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container">
      <h1 className="text-center my-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong> {new Date(event.date).toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <Link to={`/view-event/${event.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default Landing;
