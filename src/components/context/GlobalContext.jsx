import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const globalMovieContext = createContext();
const API_KEY = "266d4fdbc6d6a07f319f748963762a86";
const name = "harry";

const GlobalMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState("");
  const [allMovies, setAllMovies] = useState();

  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        // console.log("RESPONSE :", response.data);
        if (response.status === 200) {
          setMovies(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    retriveData();
  }, []);

  const retriveAllMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log("All Movies", response.data);
      if (response.status === 200) {
        setAllMovies(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesById = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      console.log("MOVIE DETAILS:", movieDetail);
      if (response.data) {
        setMovieDetail(response.data);
        console.log("movie-single", movieDetail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <globalMovieContext.Provider
      value={{
        movies,
        movieDetail,
        allMovies,
        retriveAllMovies,
        getMoviesById,
      }}
    >
      {children}
    </globalMovieContext.Provider>
  );
};

export default GlobalMovieProvider;
