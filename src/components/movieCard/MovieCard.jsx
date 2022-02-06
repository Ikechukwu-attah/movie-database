import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import "./movieCard.scss";

const MovieCard = ({ movies }) => {
  return (
    <div className="movies-card">
      <li>
        {movies.poster_path.length ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
            alt={movies.title}
            className="movies-images"
          />
        ) : (
          <h3>No Image</h3>
        )}
      </li>
      <li>{movies.title}</li>
      <div className="movies-card__wrapper">
        <div className="movies-card__ratings">
          <GradeIcon fontSize="large" className="movie-rating-icon" />
          <span className="movie-rating-text">{movies.vote_average}</span>
        </div>
        <span className="favourite-movie-cover">
          <BookmarkAddIcon
            fontSize="large"
            className="favourite-movie"
            onClick={() => {}}
          />
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
