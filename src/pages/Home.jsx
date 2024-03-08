import React from "react";
import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTVs from "../components/FeaturedTV";
import Content from "../components/Content";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <h1> Featured Movies</h1>
      <FeaturedMovies />
      <h1> Featured TV Shows</h1>
      <FeaturedTVs />
      <Content />
    </div>
  );
}

export default Home;
