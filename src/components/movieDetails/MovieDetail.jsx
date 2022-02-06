import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { globalMovieContext } from "../context/GlobalContext";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieDetail, RetriveMovieDetail } = useContext(globalMovieContext);
  console.log("movieDetal:", movieDetail);
  console.log("MovieId:", movieId);
  const getMovieById = () => {
    if (movieId) {
      RetriveMovieDetail.getMovieDetail(movieId);
    }
  };
  return (
    <div>
      <h1>checking this stuff ooooo</h1>
      <button onClick={getMovieById}>check</button>
    </div>
  );
};

export default MovieDetail;
