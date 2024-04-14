import React from "react";
import "./Content.css";

function Content() {
  const contentData = {
    heading: "Explore Marvel's Finest",
    text: "Dive into the world of cinema with Video Vessel. Get the latest on your favorite movies, behind-the-scenes content, and exclusive interviews with Marvel stars.",
    image: "/content.png",
  };

  return (
    <div className="content-section">
      <h2>{contentData.heading}</h2>
      <p>{contentData.text}</p>
      <img src={contentData.image} alt="Marvel" />
    </div>
  );
}

export default Content;
