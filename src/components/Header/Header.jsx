import React, { useContext } from "react";
import { globalMovieContext } from "../context/GlobalContext";
import MovieScroll from "../movieScroll/MovieScroll";
import { movieImages } from "../../Dummydata";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { rightMovie } from "../../Dummydata";
import RightMovies from "../rightMovies/RightMovies";
import Slider from "react-slick";
import "./header.scss";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { movies } = useContext(globalMovieContext);
  const getMovies = movieImages.map((movie) => (
    <MovieScroll getMovie={movie} key={movie.id} />
  ));

  const getRightMovie = rightMovie.map((movieRight) => (
    <ul>
      <RightMovies movie={movieRight} key={movieRight.id} />
    </ul>
  ));
  return (
    <header className="movie-header">
      <div className="movie-header__left">
        <Carousel className="infinteLoop autoPlay">{getMovies}</Carousel>
      </div>

      <div className="movie-header__right">
        <h3>Up Next</h3>
        <div className="movie-header__right-side">{getRightMovie}</div>
      </div>
    </header>
  );
};

export default Header;
