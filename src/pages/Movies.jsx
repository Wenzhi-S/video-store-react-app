import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Media.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="media-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`} className="media-card">
          <img src={movie.poster} alt={movie.title} />
          <div className="media-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
