import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const globalMovieContext = createContext();
const API_KEY = "266d4fdbc6d6a07f319f748963762a86";

const GlobalMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [check, setCheck] = useState(true);
  const [toggle, setToggle] = useState(true);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkMovieExists = (array, id) => {
    return array.find((favMovie) => favMovie.id === id);
  };

  const addToFavouriteMovie = (item, id) => {
    const allFavourite = [...favourite];

    console.log("favArray", favourite);
    const itExist = checkMovieExists(allFavourite, id);
    console.log("Exist", itExist);
    // setCheck(false);
    if (itExist) {
      const filteredItems = allFavourite.filter(
        (favMovie) => favMovie.id !== id
      );
      setFavourite(filteredItems);
      setCheck(false);
    } else {
      const updatedFavouriteMovie = allFavourite.concat(item);
      console.log("UpdatedFav", updatedFavouriteMovie);
      setFavourite(updatedFavouriteMovie);
      setCheck(true);
    }
  };

  const showMovies = () => {
    setToggle(true);
  };

  const showFavourite = () => {
    setToggle(false);
  };

  return (
    <globalMovieContext.Provider
      value={{
        movies,
        movieDetail,
        allMovies,
        retriveAllMovies,
        getMoviesById,
        addToFavouriteMovie,
        favourite,
        toggle,
        showMovies,
        showFavourite,
        checkMovieExists,
      }}
    >
      {children}
    </globalMovieContext.Provider>
  );
};

export default GlobalMovieProvider;
