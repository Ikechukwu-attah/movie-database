import React, { useContext } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { globalMovieContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

import "./movieCard.scss";

const MovieCard = ({ movies }) => {
  const { getMovieById } = useContext(globalMovieContext);
  return (
    <div className="movies-card">
      <Link to={`/detail/${movies.id}`} className="movies-link">
        <li>
          {movies.poster_path.length ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
              alt={movies.title}
              className="movies-images"
              // onClick={() => getMovieById(movies.id)}
            />
          ) : (
            <h3>No Image</h3>
          )}
        </li>
        <li className="movies-title">{movies.title}</li>
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
      </Link>
    </div>
  );
};

export default MovieCard;
