import React from "react";
import FeaturedMovies from "../featured/FeaturedMovies";
import Header from "../Header/Header";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <FeaturedMovies />
    </div>
  );
};

export default Home;
