import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import "../movieCard/movieCard.scss";

const Favourite = ({ favMovie }) => {
  return (
    <div className="movies-card">
      <Link to={`/detail/${favMovie.id}`} className="movies-link">
        <li>
          {favMovie.poster_path.length ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${favMovie.poster_path}`}
              alt={favMovie.title}
              className="movies-images"
            />
          ) : (
            <h3>No Image</h3>
          )}
        </li>
      </Link>
      <li className="movies-title">{favMovie.title}</li>
      <div className="movies-card__wrapper">
        <div className="movies-card__ratings">
          {favMovie.id ? (
            <GradeIcon fontSize="large" className="movie-rating-icon" />
          ) : (
            <GradeIcon fontSize="large" className="movie-rating-green" />
          )}

          <span className="movie-rating-text">{favMovie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
