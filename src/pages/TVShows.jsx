import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Media.css";

function TVShows() {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tvShows")
      .then((response) => response.json())
      .then((data) => setTVShows(data))
      .catch((error) => console.error("Error fetching tv shows:", error));
  }, []);

  return (
    <div className="media-container">
      {tvShows.map((tvShow) => (
        <Link
          key={tvShow.id}
          to={`/tvshows/${tvShow.id}`}
          className="media-card"
        >
          <img src={tvShow.poster} alt={tvShow.title} />
          <div className="media-info">
            <h3>{tvShow.title}</h3>
            <p>{tvShow.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TVShows;
