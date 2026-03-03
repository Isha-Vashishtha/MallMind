import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [session, setSession] = useState(null);

  const createSession = async () => {
    const res = await axios.post("http://localhost:4000/graphql", {
      query: `query { createSession { id createdAt } }`
    });

    setSession(res.data.data.createSession);
  };

  return (
    <div>
      <h1>MallMind</h1>
      <button onClick={createSession}>Start Session</button>

      {session && (
        <div>
          <p>Session ID: {session.id}</p>
        </div>
      )}
    </div>
  );
}