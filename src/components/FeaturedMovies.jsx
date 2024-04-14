import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Featured.css";

function FeaturedMovies() {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/mediaItems/featured/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch featured movies");
        }
        return response.json();
      })
      .then((featured) => setFeaturedMovies(featured))
      .catch((error) =>
        console.error("Error fetching featured movies:", error)
      );
  }, []);

  return (
    <div className="featured-movies-container">
      {featuredMovies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedMovies;
