import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MediaDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((response) => response.json())
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
          <strong>Description:</strong> {movie.description}
        </p>
        <div className="media-actions">
          <Link className="media-order">Rent $3.99</Link>
          <Link className="media-order">Buy $14.99</Link>
        </div>
      </div>
      <div className="media-poster">
        <img src={movie.poster} alt={movie.title} />
      </div>
    </div>
  );
}

export default MovieDetail;
