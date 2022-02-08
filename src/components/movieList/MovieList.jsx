import React, { useContext, useEffect } from "react";
import { globalMovieContext } from "../context/GlobalContext";
import MovieCard from "../movieCard/MovieCard";
import "./movieList.scss";

const MovieList = () => {
  const { allMovies, retriveAllMovies } = useContext(globalMovieContext);
  console.log("allMovies:", allMovies);

  useEffect(() => {
    retriveAllMovies();
  }, [retriveAllMovies]);

  //   const getMovies = allMovies.map((movies) => {
  //     return <MovieCard value={movies} key={movies.id} />;
  //   });
  return (
    <div className="movies">
      <h2>All Movies</h2>
      <div className="movies__movie-list">
        {allMovies &&
          allMovies.map((movie) => (
            <ul>
              <MovieCard movies={movie} key={movie.id} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
