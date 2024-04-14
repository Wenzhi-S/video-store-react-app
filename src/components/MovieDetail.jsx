import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MediaDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/mediaItems/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return response.json();
      })
      .then(setMovie)
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const actorsList = movie.actors.join(", ");

  return (
    <div className="media-detail-page">
      <div className="media-details">
        <h1>{movie.title}</h1>
        <p>
          <strong>Actors:</strong> {actorsList}
        </p>
        <p>
          <strong>Description:</strong> {movie.synopsis}
        </p>
        <div className="media-actions">
          <Link to="#" className="media-order">Rent: ${movie.rentPrice}</Link>
          <Link to="#" className="media-order">Buy ${movie.purchasePrice}</Link>
        </div>
      </div>
      <div className="media-poster">
        <img src={movie.poster} alt={movie.title} />
      </div>
    </div>
  );
}

export default MovieDetail;