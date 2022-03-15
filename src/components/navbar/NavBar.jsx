import React, { useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SearchIcon from "@mui/icons-material/Search";
import { globalMovieContext } from "../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CloseIcon from "@mui/icons-material/Close";
import "./navBar.scss";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showMenu, setShowMenu] = useState(false); // !showMenu
  const { showMovies, showFavourite } = useContext(globalMovieContext);
  const onSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    console.log("result", result);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=266d4fdbc6d6a07f319f748963762a86&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      console.log("Response", response.data.results[0].title);
      if (!response.data.error) {
        setResult(response.data.results);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuToggle = () => setShowMenu(!showMenu);
  return (
    <nav className="nav-bar">
      <div className="nav-bar__desktop">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="nav-bar__logo">IMDb</span>
        </Link>
        <div className="nav-bar__menu">
          <MenuIcon className="menuIcon" fontSize="large" />
          <span className="nav-bar__menu-item">Menu</span>
          <Link
            to="/allmovie"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span
              className="nav-bar__menu-item"
              onClick={() => {
                showMovies();
              }}
            >
              Movies
            </span>
          </Link>

          <span
            className="nav-bar__menu-item"
            onClick={() => {
              showFavourite();
            }}
          >
            Favourite
          </span>
        </div>
        <div className="nav-bar__search">
          <div className="nav-bar__selections">
            <span className="selectionItems">All</span>
            <ArrowDropDownRoundedIcon
              fontSize="large"
              className="selectArrowIcon"
            />
          </div>
          <input
            type="text"
            className="nav-bar__searchInput"
            placeholder="search for any movie"
            onChange={onSearch}
            value={search}
          />
          <SearchIcon className="searchIcon" fontSize="large" />
        </div>

        <div className="nav-bar__right">
          <span className="imdbPro">IMDbPro </span>
          <span className="rightborder">&nbsp;</span>
          <div className="nav-bar__rightListContainer">
            <AddCommentIcon fontSize="large" className="rightIcon" />
            <span className="nav-bar__rightWatchListText">WatchList</span>
          </div>
          <span className="nav-bar__rightSignIn">Sign In</span>
        </div>
      </div>

      {/* MOBILE SCREEN NAVBAR BEGINS HERE.  */}
      <div div className="mobile-screen">
        <div className="mobile-screen__wrapper">
          <div className="mobile-screen__left">
            <MenuIcon
              className="menuIcon"
              fontSize="large"
              onClick={handleMenuToggle}
            />

            <div id={!showMenu ? "hidden" : ""} className="mobile-move">
              <ul>
                <CloseIcon
                  className="mobile-close-icon"
                  fontSize="large"
                  onClick={handleMenuToggle}
                />
                <Link
                  to="/allmovie"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <AddCommentIcon fontSize="large" className="mobile-icon" />
                    <span>Movies</span>
                  </li>
                </Link>
                <li>
                  <AddCommentIcon fontSize="large" className="mobile-icon" />
                  <span
                    onClick={() => {
                      showFavourite();
                    }}
                  >
                    Favourite
                  </span>
                </li>
                <li>
                  <AddCommentIcon fontSize="large" className="mobile-icon" />
                  <span>Watch</span>
                </li>
                <li>
                  <AddCommentIcon fontSize="large" className="mobile-icon" />
                  <span>Award & Events</span>
                </li>
                <li>
                  <AddCommentIcon fontSize="large" className="mobile-icon" />
                  <span>Celebs</span>
                </li>

                <li>
                  <AddCommentIcon fontSize="large" className="mobile-icon" />
                  <span>Community</span>
                </li>
              </ul>
            </div>

            {/* <CloseIcon className="close-icon" fontSize="large" /> */}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <span className="imdb-logo">IMDb </span>
            </Link>
          </div>
          <div className="mobile-screen__center">
            <input
              type="text"
              placeholder="Searach"
              className="mobile-search"
            />
            <SearchIcon className="mobile-searchIcon" fontSize="large" />
          </div>
          <div className="mobile-screen__right">
            <span className="mobile-signin">Sign In</span>
            <div className="select-langauge">
              <span className="mobile-language">EN</span>
              <ArrowDropDownRoundedIcon
                fontSize="large"
                className="mobile-dropdown-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
