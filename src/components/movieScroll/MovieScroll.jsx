import React from "react";
import "./movieScroll.scss";

const MovieScroll = ({ getMovie }) => {
  return (
    <div className="movie-scroll">
      <div className="movie-scroll__header-scroll">
        {getMovie.img_poster ? (
          <img
            src={getMovie.img_poster}
            alt={getMovie.title}
            className="scroll-img"
          />
        ) : (
          <h3>no image</h3>
        )}
      </div>
      <div>{getMovie.title}</div>
    </div>
  );
};

export default MovieScroll;
