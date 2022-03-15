import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { globalMovieContext } from "../context/GlobalContext";
import GradeIcon from "@mui/icons-material/Grade";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import "./movieDetail.scss";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieDetail, getMoviesById } = useContext(globalMovieContext);
  console.log("movieDetils", movieDetail);
  useEffect(() => {
    getMoviesById(movieId);
  }, [movieId]);

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <div className="movie-detail__top-left">
          <h2>{movieDetail.title}</h2>
          <span className="movie-year">
            {`${
              movieDetail.release_date &&
              movieDetail.release_date.substring(0, 4)
            } .${movieDetail.runtime}`}
          </span>
        </div>

        <div className="movie-detail__top-right">
          <div className="movie-detail__right-sub">
            <span>imdb rating</span>
            <div className="movie-detail__right-sub-icon-wrapper">
              <GradeIcon fontSize="large" className="movie-icon" />
              <span className="movie-text-rating">
                {movieDetail.vote_average}
              </span>
            </div>
          </div>

          <div className="movie-detail__right-sub">
            <span>your rating</span>
            <div className="movie-detail__right-sub-icon-wrapper">
              <GradeIcon fontSize="large" className="movie-icon" />
              <span className="movie-text-rating">rate</span>
            </div>
          </div>

          <div className="movie-detail__right-sub">
            <span>Popularity</span>
            <div className="movie-detail__right-sub-icon-wrapper">
              <AutoGraphIcon fontSize="large" className="movie-icon" />
              <span className="movie-text-rating">
                {movieDetail.popularity}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-feature">
        <div className="movie-detail-feature__left">
          {movieDetail.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="movies-images"
              // onClick={() => getMovieById(movies.id)}
            />
          ) : (
            <h3>No Image</h3>
          )}
          <div className="movie-detail-feature__list">
            <h3>{movieDetail.overview}</h3>
            <hr className="hr-top" />
            <div className="movie-detail-feature__item">
              <div className="feature-item">
                <span className="feature-list">Revenue</span>
                <span className="feature-list">{movieDetail.revenue}</span>
              </div>
              <hr />
              <div className="feature-item">
                <span className="feature-list">Status</span>
                <span className="feature-list">{movieDetail.status}</span>
              </div>
              <hr />
              <div className="feature-item">
                <span className="feature-list">Vote Count</span>
                <span className="feature-list">{movieDetail.vote_count}</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="movie-detail-feature__right"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
