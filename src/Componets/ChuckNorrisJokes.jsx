import React, { useState, useEffect } from "react";
import "../index.css"

function ChuckNorrisJokes() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching the joke:", error);
      setJoke("Oops! Couldn't fetch a joke at the moment.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="thediv">
      <h1>Chuck Norris Joke Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p style={{ fontSize: "1.5rem", margin: "20px" }}>{joke}</p>
      )}
      <button
        onClick={fetchJoke}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff5733",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get New Joke
      </button>
    </div>
  );
}

export default ChuckNorrisJokes;