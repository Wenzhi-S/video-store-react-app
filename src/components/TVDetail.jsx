import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MediaDetail.css";

function TVDetail() {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/tvShows/${id}`)
      .then((response) => response.json())
      .then(setTVShow)
      .catch((error) =>
        console.error("Error fetching tv show details:", error)
      );
  }, [id]);

  if (!tvShow) return <div>Loading...</div>;

  const actorsList = tvShow.actors.join(", ");

  return (
    <div className="media-detail-page">
      <div className="media-details">
        <h1>{tvShow.title}</h1>
        <p>
          <strong>Actors:</strong> {actorsList}
        </p>
        <p>
          <strong>Description:</strong> {tvShow.description}
        </p>
        <div className="media-actions">
          <Link className="media-order">Rent $5.99</Link>
          <Link className="media-order">Buy $23.99</Link>
        </div>
      </div>
      <div className="media-poster">
        <img src={tvShow.poster} alt={tvShow.title} />
      </div>
    </div>
  );
}

export default TVDetail;
