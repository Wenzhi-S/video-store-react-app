import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Media.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/mediaItems/movies`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setMovies(data);
      setAllMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setMovies(allMovies);
    } else {
      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMovies(filteredMovies);
    }
  }, [searchTerm, allMovies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="media-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="media-card"
            >
              <img src={movie.poster} alt={movie.title} />
              <div className="media-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            </Link>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    </div>
  );
}

export default Movies;
