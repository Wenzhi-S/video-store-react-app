import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Featured.css";

function FeaturedTVs() {
  const [featuredTVs, setFeaturedTVs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/mediaItems/featured/tvShows")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch featured TV shows");
        }
        return response.json();
      })
      .then((featured) => setFeaturedTVs(featured))
      .catch((error) =>
        console.error("Error fetching featured TV shows:", error)
      );
  }, []);

  return (
    <div className="featured-tvs-container">
      {featuredTVs.map((tvShow) => (
        <Link
          key={tvShow.id}
          to={`/tvshows/${tvShow.id}`}
          className="tvshow-card"
        >
          <img src={tvShow.poster} alt={tvShow.title} />
          <div className="tvshow-info">
            <h3>{tvShow.title}</h3>
            <p>{tvShow.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedTVs;
