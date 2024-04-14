import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Media.css";

function TVShows() {
  const [tvShows, setTVShows] = useState([]);
  const [allTVShows, setAllTVShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTVShows = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/mediaItems/tvShows`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setTVShows(data);
      setAllTVShows(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTVShows();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setTVShows(allTVShows);
    } else {
      const filteredTVShows = allTVShows.filter((tvShow) =>
        tvShow.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTVShows(filteredTVShows);
    }
  }, [searchTerm, allTVShows]);

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
          placeholder="Search TV shows..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="media-container">
        {tvShows.length > 0 ? (
          tvShows.map((tvShow) => (
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
          ))
        ) : (
          <div>No TV shows found.</div>
        )}
      </div>
    </div>
  );
}

export default TVShows;
