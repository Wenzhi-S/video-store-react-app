import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MediaDetail.css";

function TVDetail() {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/mediaItems/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch TV show details");
        }
        return response.json();
      })
      .then(setTVShow)
      .catch((error) =>
        console.error("Error fetching TV show details:", error)
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
          <strong>Description:</strong> {tvShow.synopsis}{" "}
        </p>
        <div className="media-actions">
          <Link to="#" className="media-order">
            Rent: ${tvShow.rentPrice}
          </Link>{" "}
          <Link to="#" className="media-order">
            Buy ${tvShow.purchasePrice}
          </Link>{" "}
        </div>
      </div>
      <div className="media-poster">
        <img src={tvShow.poster} alt={tvShow.title} />
      </div>
    </div>
  );
}

export default TVDetail;
