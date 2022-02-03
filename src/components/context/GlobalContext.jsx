import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const globalMovieContext = createContext();
const API_KEY = "266d4fdbc6d6a07f319f748963762a86";
const name = "harry";

const GlobalMovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        console.log("RESPONSE :", response.data);
        if (response.status === 200) {
          setMovies(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    retriveData();
  }, []);

  return (
    <globalMovieContext.Provider value={{ movies }}>
      {children}
    </globalMovieContext.Provider>
  );
};

export default GlobalMovieProvider;
