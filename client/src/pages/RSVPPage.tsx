import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { RSVP } from "../interfaces/rsvp.tsx";


const RSVP = () => {
  const { token } = useParams<{ token: string }>();
  const [rsvp, setRsvp] = useState<RSVP | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rsvp/${token}`)
      .then((res) => {
        setRsvp(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Error fetching RSVP.");
        setLoading(false);
      });
  }, [token]);

  const handleResponse = (status: string) => {
    axios
      .post(`http://localhost:5000/rsvp/${token}/respond`, { status })
      .then((res) => setResponse(res.data.message))
      .catch((err) => setError(err.response?.data?.message || "Error submitting RSVP."));
  };

  if (loading) return <p>Loading RSVP...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="text-center pt-4">
      <h2>RSVP for Event #{rsvp?.event_id}</h2>
      <p>Guest: {rsvp?.guest_email}</p>
      <p>Status: {rsvp?.status}</p>

      {!response ? (
        <div>
          <button className="btn btn-success me-3" onClick={() => handleResponse("accepted")}>
            Accept
          </button>
          <button className="btn btn-danger" onClick={() => handleResponse("declined")}>
            Decline
          </button>
        </div>
      ) : (
        <p className="text-success">{response}</p>
      )}
    </div>
  );
};

export default RSVP;
