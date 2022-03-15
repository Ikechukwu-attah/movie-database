import React, { useContext, useEffect, useState } from "react";
import { globalMovieContext } from "../context/GlobalContext";
import Favourite from "../favouriteMovie/Favourite";
import MovieCard from "../movieCard/MovieCard";
import "./movieList.scss";

const MovieList = () => {
  const { allMovies, favourite, retriveAllMovies, toggle, checkMovieExists } =
    useContext(globalMovieContext);
  // console.log("allMovies:", allMovies);
  console.log("movie-togle:", toggle);

  const getFavourite = favourite.map((fav) => (
    <ul>
      <Favourite favMovie={fav} key={fav.id} />
    </ul>
  ));

  useEffect(() => {
    retriveAllMovies();
  }, []);

  return (
    <div className="movies">
      {toggle ? (
        <>
          <h2>All Movies</h2>
          <div className="movies__movie-list">
            {allMovies &&
              allMovies.map((movie) => (
                <ul>
                  <MovieCard
                    movies={movie}
                    key={movie.id}
                    isFavorite={() => checkMovieExists(allMovies, movie.id)}
                  />
                </ul>
              ))}
          </div>
        </>
      ) : (
        <>
          <h2>Favourite Movies</h2>
          <div className="movies__movie-list">{getFavourite}</div>
        </>
      )}
    </div>
  );
};

export default MovieList;
