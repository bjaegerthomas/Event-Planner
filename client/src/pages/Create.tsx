import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/events", event);
      navigate("/"); // Redirect to Home page after successful creation
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Create New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={event.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={event.description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="datetime-local" name="date" value={event.date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={event.location} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Save Event</button>
      </form>
    </div>
  );
};

export default Create;
