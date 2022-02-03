import React from "react";
import "./rightMovies.scss";

const RightMovies = ({ movie }) => {
  return (
    <div className="right-movie">
      <li>
        <img src={movie.img_poster} alt={movie.title} className="img" />
      </li>
      <li>
        <span className="check">{movie.title}</span>
      </li>
    </div>
  );
};

export default RightMovies;
