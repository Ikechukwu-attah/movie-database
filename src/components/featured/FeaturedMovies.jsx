import React, { useContext } from "react";
import { globalMovieContext } from "../context/GlobalContext";
import Slider from "react-slick";
import MovieList from "../movieList/MovieList";

const FeaturedMovies = () => {
  const { movies } = useContext(globalMovieContext);
  const featuredMovies = movies.map((movie) => (
    <ul>
      <MovieList movie={movie} />
    </ul>
  ));
  return (
    <div>
      <h3>Featured Movie</h3>
      {featuredMovies}
    </div>
  );
};

export default FeaturedMovies;
