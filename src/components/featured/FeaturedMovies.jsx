import React, { useContext } from "react";
import { globalMovieContext } from "../context/GlobalContext";
import Slider from "react-slick";
import MovieList from "../movieList/MovieList";
import GradeIcon from "@mui/icons-material/Grade";
import "./featuredMovie.scss";

const FeaturedMovies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const { movies } = useContext(globalMovieContext);
  console.log(movies);
  const featuredMovies = movies.map((movie) => (
    <div key={movie.id}>
      <ul>
        <li>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="{movie.title}"
              className="featured-movie-image"
            />
          ) : (
            <h1>No movie</h1>
          )}
        </li>
        <li className="featured-movie-title">{movie.title}</li>
      </ul>
      <div className="featured-ratings">
        <GradeIcon
          fontSize="large"
          className="featured-ratings__featured-rating-icon"
        />
        <span className="featured-ratings__featured-rating-text">
          {movie.vote_average}
        </span>
        <span></span>
      </div>
    </div>
  ));
  return (
    <div className="featured-movies">
      <h3>Featured Movie</h3>
      <Slider {...settings}> {featuredMovies}</Slider>
    </div>
  );
};

export default FeaturedMovies;
